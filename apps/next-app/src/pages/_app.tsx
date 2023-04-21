import 'styles/globals.css';
import { Nunito } from 'next/font/google';
import type { AppProps } from 'next/app';
import { AppProviders } from 'providers/AppProviders';
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';

const nunito = Nunito({ subsets: ['latin'], weight: ['300', '500', '700'] });

export default function App({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <AppProviders>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <main className={nunito.className}>
          <Component {...pageProps} />
        </main>
      </SessionContextProvider>
    </AppProviders>
  );
}
