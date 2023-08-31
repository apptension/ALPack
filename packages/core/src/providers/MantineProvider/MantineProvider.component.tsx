import { CacheProvider } from '@emotion/react';
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider as DefaultMantineProvider,
  useEmotionCache,
} from '@mantine/core';
import { useColorScheme, useLocalStorage } from '@mantine/hooks';
import { useServerInsertedHTML } from 'next/navigation';

export const MantineProvider = ({ children }: any) => {
  const cache = useEmotionCache();
  cache.compat = true;

  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(' '),
      }}
    />
  ));

  const preferredColorScheme = useColorScheme();

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  return (
    <CacheProvider value={cache}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <DefaultMantineProvider theme={{ colorScheme: colorScheme }} withGlobalStyles withNormalizeCSS>
          {children}
        </DefaultMantineProvider>
      </ColorSchemeProvider>
    </CacheProvider>
  );
};
