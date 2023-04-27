import 'styles/globals.css';
import { Nunito } from 'next/font/google';
import type { AppProps } from 'next/app';
import { AppProviders } from 'providers/AppProviders';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import { ReactElement, ReactNode, useState } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextPage } from 'next';
import { Layout } from 'shared/components/Layout';

const nunito = Nunito({ subsets: ['latin'], weight: ['300', '500', '700'] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type CustomAppProps = AppProps & {
  initialSession: Session;
};

export default function App({ Component, pageProps }: CustomAppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <AppProviders>
        <main className={nunito.className}>
          <Component {...pageProps} />)
        </main>
      </AppProviders>
    </SessionContextProvider>
  );
}
