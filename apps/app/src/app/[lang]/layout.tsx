import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { headers } from 'next/headers';

import { Locale, i18n } from '@ab/core/config/i18n';

import { authOptions } from '@app/config/auth';
import { AppProviders } from '@app/providers/AppProviders';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root({ children, params }: { children: React.ReactNode; params: { lang: Locale } }) {
  const session = await getServerSession(authOptions);
  const authHeaders = {
    COOKIE: headers().get('COOKIE') || '',
  };
  return (
    <html lang={params.lang}>
      <body>
        <AppProviders
          session={session}
          apolloClientOpts={{
            authHeaders,
          }}
          lang={params.lang}
        >
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
