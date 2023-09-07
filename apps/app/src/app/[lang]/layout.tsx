import { ColorScheme } from '@mantine/core';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { cookies, headers } from 'next/headers';

import { Locale, i18n } from '@ab/core/config/i18n';
import { COLOR_SCHEME_COOKIE_NAME } from '@ab/core/providers/mantineProvider/MantineProvider.const';

import { authOptions } from '@app/config/auth';
import { AppProviders } from '@app/providers/appProviders';

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
  const cookieStore = cookies();
  const colorSchemeValue = cookieStore.get(COLOR_SCHEME_COOKIE_NAME);
  return (
    <html lang={params.lang}>
      <body>
        <AppProviders
          session={session}
          apolloClientOpts={{
            authHeaders,
          }}
          lang={params.lang}
          defaultColorScheme={colorSchemeValue ? (colorSchemeValue.value as ColorScheme) : undefined}
        >
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
