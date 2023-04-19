import "styles/globals.css";
import { Nunito } from "next/font/google";
import type { AppProps } from "next/app";

const nunito = Nunito({ subsets: ["latin"], weight: ["300", "500", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={nunito.className}>
      <Component {...pageProps} />
    </main>
  );
}
