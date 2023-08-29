'use client';

import { Notifications } from '@mantine/notifications';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

import { MakeClientOpts } from '@ab/api-client/client';
import { ApolloProvider } from '@ab/api-client/providers';
import { MantineProvider } from '@ab/core/providers';

interface AppProvidersProps {
  children: ReactNode;
  session?: Session | null;
  apolloClientOpts?: MakeClientOpts;
}

export const AppProviders = ({ children, session, apolloClientOpts }: AppProvidersProps) => {
  return (
    <SessionProvider session={session}>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <ApolloProvider clientOpts={apolloClientOpts}>
          <Notifications />
          {children}
        </ApolloProvider>
      </MantineProvider>
    </SessionProvider>
  );
};
