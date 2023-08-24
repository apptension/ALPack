'use client';

import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr';
import { PropsWithChildren } from 'react';

import { MakeClientOpts, makeClient } from '../../client';

export interface ApolloProviderProps {
  clientOpts?: MakeClientOpts;
}

export const ApolloProvider = ({ children, clientOpts }: PropsWithChildren<ApolloProviderProps>) => {
  return <ApolloNextAppProvider makeClient={makeClient(clientOpts)}>{children}</ApolloNextAppProvider>;
};
