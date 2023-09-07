import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider as DefaultMantineProvider,
  useEmotionCache,
} from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { getCookie, setCookie } from 'cookies-next';
import { useServerInsertedHTML } from 'next/navigation';
import { PropsWithChildren, useCallback, useState } from 'react';

import { COLOR_SCHEME_COOKIE_NAME } from './MantineProvider.const';

export interface MantineProviderProps {
  defaultColorScheme?: ColorScheme;
}

export const MantineProvider = ({ children, defaultColorScheme }: PropsWithChildren<MantineProviderProps>) => {
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

  const mantineColorScheme = useColorScheme();
  const preferredColorScheme =
    defaultColorScheme ?? (getCookie(COLOR_SCHEME_COOKIE_NAME) as ColorScheme | undefined) ?? mantineColorScheme;

  const [colorScheme, setColorScheme] = useState<ColorScheme>(preferredColorScheme);

  const toggleColorScheme = useCallback(
    (value?: ColorScheme) => {
      const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
      setColorScheme(nextColorScheme);
      setCookie(COLOR_SCHEME_COOKIE_NAME, nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
    },
    [setColorScheme, setCookie, colorScheme]
  );

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <DefaultMantineProvider theme={{ colorScheme }} emotionCache={cache} withGlobalStyles withNormalizeCSS>
        {children}
      </DefaultMantineProvider>
    </ColorSchemeProvider>
  );
};
