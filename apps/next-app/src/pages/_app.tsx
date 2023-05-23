import type { AppProps } from 'next/app';
import { AppProviders } from 'providers/AppProviders';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import { ReactElement, ReactNode, useState } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextPage } from 'next';
import { Layout } from 'shared/components/Layout';
import { ROUTES } from 'constants/ROUTES';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type CustomAppProps = AppProps & {
  initialSession: Session;
};

export default function App({
  Component,
  pageProps,
  ...appProps
}: CustomAppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  const nonLayoutPages: string[] = [ROUTES.PROVIDER, ROUTES.REGISTER];

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <AppProviders>
        <main>
          {nonLayoutPages.includes(appProps.router.pathname) ? (
            <Component {...pageProps} />
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </main>
      </AppProviders>
    </SessionContextProvider>
  );
}
