'use client';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

import { MakeClientOpts } from '@alp/api-client/client';
import { ApolloProvider } from '@alp/api-client/providers';
import { Locale } from '@alp/core/config/i18n';
import { IntlProvider, LocalesProvider } from '@alp/core/providers';

import { theme } from '../../theme';

interface AppProvidersProps {
  children: ReactNode;
  session?: Session | null;
  apolloClientOpts?: MakeClientOpts;
  lang: Locale;
}

export const AppProviders = ({ children, session, apolloClientOpts, lang }: AppProvidersProps) => (
    <SessionProvider session={session}>
      <LocalesProvider>
        <IntlProvider lang={lang}>
          <MantineProvider theme={theme}>
            <ApolloProvider clientOpts={apolloClientOpts}>
              <Notifications />
              {children}
            </ApolloProvider>
          </MantineProvider>
        </IntlProvider>
      </LocalesProvider>
    </SessionProvider>
  );
