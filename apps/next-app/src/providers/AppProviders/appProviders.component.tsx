import { ApolloProvider } from 'providers/ApolloProvider';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core';
import { ReactNode, useState } from 'react';
import { theme } from 'theme';

import '@fontsource/nunito/600.css';
import '@fontsource/nunito/400.css';
import '@fontsource/nunito/300.css';

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <ApolloProvider>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          theme={{ ...theme, colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          {children}
        </MantineProvider>
      </ColorSchemeProvider>
    </ApolloProvider>
  );
};
