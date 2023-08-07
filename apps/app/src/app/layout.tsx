import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import React from 'react';

import { authOptions } from '@app/app/api/auth/[...nextauth]/route';
import { AppProviders } from '@app/providers/AppProviders';
import '@app/styles/globals.css';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body>
        <AppProviders session={session}>{children}</AppProviders>
      </body>
    </html>
  );
}
