'use client';

import { Select } from '@mantine/core';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useTransition } from 'react';

import { Locale, i18n } from '../../config/i18n';
import { useLocales } from '../../hooks';

export const LanguageSwitch = () => {
  const { locales } = useLocales();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onChange = useCallback(
    (newLocales: Locale) => {
      if (newLocales) {
        startTransition(() => {
          const days = 30;
          const date = new Date();
          date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
          const expires = '; expires=' + date.toUTCString();
          document.cookie = `NEXT_LOCALE=${newLocales};expires=${expires};path=/`;

          const newPathname = pathname.replace(`/${locales.language}/`, `/${newLocales}/`);
          replace(newPathname);
        });
      }
    },
    [startTransition, pathname, replace]
  );

  return (
    <Select
      value={locales.language}
      styles={() => ({
        input: {
          width: '70px',
        },
      })}
      data-testid="language-switch"
      data={i18n.locales}
      disabled={isPending}
      onChange={onChange}
    />
  );
};
