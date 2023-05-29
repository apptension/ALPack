import type { AppProps } from 'next/app';
import { AppProviders } from 'providers/AppProviders';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { Layout } from 'shared/components/Layout';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export default function App({ Component, pageProps, ...appProps }: AppProps) {
  const nonLayoutPages: string[] = [];

  return (
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
  );
}
