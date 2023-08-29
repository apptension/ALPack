
import { LocalesAction, LocalesState } from './localesProvider.types';

export const localesReducer = (
    state: LocalesState,
    { type, payload }: LocalesAction
) => {
    switch (type) {
        case 'SET_LANGUAGE':
            return { ...state, language: payload };
        default:
            throw new Error(`Cannot resolve locales reducer action type ${type}`);
    }
};
