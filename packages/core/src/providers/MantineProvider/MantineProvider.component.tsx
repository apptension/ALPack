import { CacheProvider } from '@emotion/react';
import { MantineProvider as DefaultMantineProvider, useEmotionCache } from '@mantine/core';
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

  return (
    <CacheProvider value={cache}>
      <DefaultMantineProvider withGlobalStyles withNormalizeCSS>
        {children}
      </DefaultMantineProvider>
    </CacheProvider>
  );
};
