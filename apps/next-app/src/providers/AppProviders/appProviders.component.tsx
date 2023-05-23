import { ApolloProvider } from 'providers/ApolloProvider';
import { MantineProvider } from '@mantine/core';
import { ReactNode } from 'react';
import { theme } from 'theme';

import '@fontsource/nunito/600.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/300.css';

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ApolloProvider>
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </ApolloProvider>
  );
};
