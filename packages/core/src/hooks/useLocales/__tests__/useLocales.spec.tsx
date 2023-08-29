import { act } from '@testing-library/react';

import { useLocales } from '../';
import { renderHook } from '../../../tests/utils/rendering';

describe('useLocales', () => {
  it('should return initial locales and setLanguage function when used inside LocalesProvider', async () => {
    const locales = null;

    const { result } = renderHook(() => useLocales());

    expect(result.current).toEqual({
      locales: {
        language: locales,
      },
      setLanguage: expect.any(Function),
    });

    expect(typeof result.current.setLanguage).toEqual('function');
  });

  it('should call setLanguage and change language inside context', () => {
    const language = 'pl';

    const { result } = renderHook(() => useLocales());

    act(() => {
      result.current.setLanguage(language);
    });

    expect(result.current.locales).toEqual({ language: language });
  });
});
