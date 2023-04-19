import 'styles/globals.css';
import { Nunito } from 'next/font/google';
import type { AppProps } from 'next/app';
import { AppProviders } from 'providers/AppProviders';

const nunito = Nunito({ subsets: ['latin'], weight: ['300', '500', '700'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <main className={nunito.className}>
        <Component {...pageProps} />
      </main>
    </AppProviders>
  );
}
