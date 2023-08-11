'use client';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

import { ApolloProvider } from '@ab/api-client/providers';
import { MantineProvider } from '@ab/core/providers';

interface AppProvidersProps {
  children: ReactNode;
  session?: Session | null;
}

export const AppProviders = ({ children, session }: AppProvidersProps) => {
  return (
    <SessionProvider session={session}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <ApolloProvider>{children}</ApolloProvider>
      </MantineProvider>
    </SessionProvider>
  );
};
