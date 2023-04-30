import { ApolloProvider } from '@app/providers/ApolloProvider';
import { ReactNode } from 'react';

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return <ApolloProvider>{children}</ApolloProvider>;
};
