import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { i18n } from '@alp/core/config/i18n';

const privatePages = ['/app/:path*', '/admin/:path*'];

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to transform headers

  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  const language = request.cookies.get('NEXT_LOCALE')?.value ?? getBrowserLanguage(request) ?? i18n.defaultLocale;

  return language;
}

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  (req) => intlMiddleware(req),
  {
    callbacks: {
      authorized: ({ token }) => token != null,
    },
  }
);

export function intlMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
  // // If you have one
  if (
    [
      '/manifest.json',
      '/favicon.ico',
      '/emails/logo.png',
      // Your other files in `public`
    ].includes(pathname)
  )
    return;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    // eslint-disable-next-line consistent-return
    return NextResponse.redirect(new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url));
  }
}

export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(`^(/(${i18n.locales.join('|')}))?(${privatePages.join('|')})?/?$`, 'i');
  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname);

  if (isPublicPage) {
    return intlMiddleware(req);
  }
  return (authMiddleware as any)(req);
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|emails/logo.png).*)'],
};

const getBrowserLanguage = (req: NextRequest) =>
  req.headers
    .get('accept-language')
    ?.split(',')
    .map((i) => i.split(';'))
    ?.reduce((ac: { code: string; priority: string }[], lang) => [...ac, { code: lang[0], priority: lang[1] }], [])
    ?.sort((a, b) => (a.priority > b.priority ? -1 : 1))
    ?.find((i) => (i18n.locales as readonly string[]).includes(i.code.substring(0, 2)))
    ?.code?.substring(0, 2);
