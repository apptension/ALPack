import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { headers } from 'next/headers';

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

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  const authHeaders = {
    COOKIE: headers().get('COOKIE') || '',
  };
  return (
    <html lang="en">
      <body>
        <AppProviders
          session={session}
          apolloClientOpts={{
            authHeaders,
          }}
        >
          {children}
        </AppProviders>
      </body>
    </html>
  );
}
