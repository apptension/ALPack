import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr';

import { makeClient } from '../../client';

export const ApolloProvider = ({ children }: any) => {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>;
};
