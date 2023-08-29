import enTranslationMessages from '../translations/en.json';
import plTranslationMessages from '../translations/pl.json';


export const i18n = {
    defaultLocale: 'en',
    locales: ['en', 'pl'],
} as const

export type Locale = (typeof i18n)['locales'][number]


export const DEFAULT_LOCALE = i18n.defaultLocale;

export const appLocales = i18n.locales;

export interface TranslationMessage {
    defaultMessage: string;
    description?: string;
}

export type TranslationMessagesWithDescriptors = Record<
    string,
    TranslationMessage
>;

export type TranslationMessages = Record<string, string>;

export const formatTranslationMessages = (
    locale: Locale,
    messages: TranslationMessagesWithDescriptors
): TranslationMessages => {
    const defaultFormattedMessages =
        locale !== DEFAULT_LOCALE
            ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
            : {};

    return Object.keys(messages).reduce((formattedMessages, key) => {
        const formattedMessage =
            !messages[key]?.defaultMessage && locale !== DEFAULT_LOCALE
                ? defaultFormattedMessages[key]
                : messages[key]?.defaultMessage;
        return Object.assign(formattedMessages, { [key]: formattedMessage });
    }, {});
};

export const translationMessages: Record<Locale, TranslationMessages> = {
    ['en']: formatTranslationMessages(
        'en',
        enTranslationMessages
    ),
    ['pl']: formatTranslationMessages(
        'pl',
        plTranslationMessages
    ),
};
