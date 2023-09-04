'use client';

import { ColorScheme } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

import { MakeClientOpts } from '@ab/api-client/client';
import { ApolloProvider } from '@ab/api-client/providers';
import { Locale } from '@ab/core/config/i18n';
import { MantineProvider } from '@ab/core/providers';
import { LocalesProvider } from '@ab/core/providers/localesProvider';

import { IntlProvider } from '../IntlProvider';

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
