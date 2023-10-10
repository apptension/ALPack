'use client';

import { PropsWithChildren, useEffect } from 'react';
import { IntlProvider as Provider } from 'react-intl';

import { Locale, translationMessages } from '@alp/core/config/i18n';
import { useLocales } from '@alp/core/hooks';

export interface IntlProviderProps {
  lang: Locale;
}

export const IntlProvider = ({ children, lang }: PropsWithChildren<IntlProviderProps>) => {
  const { setLanguage } = useLocales();

  useEffect(() => {
    setLanguage(lang);
  }, [lang, setLanguage]);

  return (
    <Provider key={lang} locale={lang} messages={translationMessages[lang]}>
      {children}
    </Provider>
  );
};
