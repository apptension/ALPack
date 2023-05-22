import { ReactNode } from 'react';

import { ApolloProvider } from '@app/providers/ApolloProvider';

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return <ApolloProvider>{children}</ApolloProvider>;
};
