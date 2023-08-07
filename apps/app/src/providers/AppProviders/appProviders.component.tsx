'use client';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

import { ApolloProvider } from '@app/providers/ApolloProvider';

interface AppProvidersProps {
  children: ReactNode;
  session?: Session | null;
}

export const AppProviders = ({ children, session }: AppProvidersProps) => {
  return (
    <SessionProvider session={session}>
      <ApolloProvider>{children}</ApolloProvider>
    </SessionProvider>
  );
};
