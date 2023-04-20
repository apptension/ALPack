import { ApolloProvider } from '@apollo/client';
import { ReactNode } from 'react';
import { apolloClient } from 'shared/services/apollo';

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
