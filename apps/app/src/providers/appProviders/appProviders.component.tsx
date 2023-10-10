'use client';

import { ColorScheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

import { MakeClientOpts } from '@alp/api-client/client';
import { ApolloProvider } from '@alp/api-client/providers';
import { Locale } from '@alp/core/config/i18n';
import { IntlProvider, LocalesProvider, MantineProvider } from '@alp/core/providers';

interface AppProvidersProps {
  children: ReactNode;
  session?: Session | null;
  apolloClientOpts?: MakeClientOpts;
  lang: Locale;
  defaultColorScheme?: ColorScheme;
}

export const AppProviders = ({ children, session, apolloClientOpts, lang, defaultColorScheme }: AppProvidersProps) => {
  return (
    <SessionProvider session={session}>
      <LocalesProvider>
        <IntlProvider lang={lang}>
          <MantineProvider defaultColorScheme={defaultColorScheme}>
            <ApolloProvider clientOpts={apolloClientOpts}>
              <Notifications />
              {children}
            </ApolloProvider>
          </MantineProvider>
        </IntlProvider>
      </LocalesProvider>
    </SessionProvider>
  );
};
