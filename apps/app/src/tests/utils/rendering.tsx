import { StoryContext } from '@storybook/react';
import { RenderOptions, render, renderHook } from '@testing-library/react';
import { Session } from 'next-auth';
import { SessionContext, SessionContextValue } from 'next-auth/react';
import { ComponentClass, ComponentType, FC, PropsWithChildren, ReactElement, ReactNode, Suspense } from 'react';
import { IntlProvider } from 'react-intl';

import * as apiUtils from '@ab/api-client/tests/utils/rendering';
import { DEFAULT_LOCALE, Locale, TranslationMessages, translationMessages } from '@ab/core/config/i18n';

import { AppRouterContextProviderMock, AppRouterContextProviderMockProps } from '../providers';

export { PLACEHOLDER_TEST_ID, PLACEHOLDER_CONTENT } from '@ab/core/tests/utils/rendering';

export type AppTestProvidersProps = PropsWithChildren<{
  sessionProviderProps?: Pick<SessionContextValue, 'status'> & {
    data: Session | null;
  };
  routerProps?: Omit<AppRouterContextProviderMockProps, 'children'>;
  intlLocale: Locale;
  intlMessages: TranslationMessages;
  suspenseFallback?: ReactNode;
}>;

const defaultRouterProps = { router: {} };

export function AppTestProviders({
  children,
  sessionProviderProps = { status: 'unauthenticated', data: null },
  routerProps = defaultRouterProps,
  intlLocale,
  intlMessages,
}: AppTestProvidersProps) {
  return (
    <SessionContext.Provider
      // @ts-ignore
      value={{
        // @ts-ignore
        update: () => Promise.resolve(null),
        ...sessionProviderProps,
      }}
    >
      <AppRouterContextProviderMock {...routerProps}>
        <IntlProvider locale={intlLocale} messages={intlMessages}>
          {children}
        </IntlProvider>
      </AppRouterContextProviderMock>
    </SessionContext.Provider>
  );
}

export type WrapperProps = apiUtils.WrapperProps & Partial<AppTestProvidersProps>;

/** @ignore */
export function getWrapper(
  WrapperComponent: ComponentClass<AppTestProvidersProps> | FC<AppTestProvidersProps>,
  wrapperProps: WrapperProps,
  storyContext?: StoryContext
): {
  wrapper: ComponentType<WrapperProps>;
  waitForApolloMocks: (mockIndex?: number) => Promise<void>;
} {
  const { wrapper: ApiWrapper, waitForApolloMocks } = apiUtils.getWrapper(
    apiUtils.ApiTestProviders,
    wrapperProps,
    storyContext
  );
  const wrapper = ({ children, ...props }: WrapperProps) => {
    const {
      sessionProviderProps,
      routerProps = defaultRouterProps,
      suspenseFallback = 'Tree is loading...',
    } = wrapperProps;

    return (
      <ApiWrapper {...props}>
        <WrapperComponent
          routerProps={routerProps}
          {...props}
          sessionProviderProps={sessionProviderProps}
          intlLocale={DEFAULT_LOCALE}
          intlMessages={translationMessages[DEFAULT_LOCALE]}
        >
          <Suspense fallback={suspenseFallback}>{children}</Suspense>
        </WrapperComponent>
      </ApiWrapper>
    );
  };
  return {
    wrapper,
    waitForApolloMocks,
  };
}

export type CustomRenderOptions = RenderOptions & WrapperProps;

/**
 * Method that extends [`render`](https://testing-library.com/docs/react-testing-library/api#render) method from
 * `@testing-library/react` package. It composes a wrapper using `ApiTestProviders` component from
 * `@sb/api-client/tests/utils/rendering` package and `options` property that is passed down to parent
 * `render` method. It also extends returned result with the
 * [`waitForApolloMocks`](../../../api-client/generated/modules/tests_utils_rendering#waitforapollomocks) method.
 *
 * @example
 * Example usage (reset CommonQuery):
 * ```tsx showLineNumbers
 * it('should render ', async () => {
 *   const apolloMocks = [];
 *   const { waitForApolloMocks } = render(<Component />, {
 *     apolloMocks,
 *   });
 *
 *   await waitForApolloMocks();
 *
 *   expect(screen.getByText('Rendered')).toBeInTheDocument();
 * });
 * ```
 *
 * @example
 * Example usage (append query to default set):
 * ```tsx showLineNumbers
 * it('should render ', async () => {
 *   const requestMock = composeMockedQueryResult(...);
 *   const { waitForApolloMocks } = render(<Component />, {
 *      apolloMocks: append(requestMock),
 *   });
 *
 *   await waitForApolloMocks();
 *
 *   expect(screen.getByText('Rendered')).toBeInTheDocument();
 * });
 * ```
 *
 * @param ui
 * @param options
 */
function customRender(ui: ReactElement, options: CustomRenderOptions = {}) {
  const { wrapper, waitForApolloMocks } = getWrapper(AppTestProviders, options);

  return {
    ...render(ui, {
      ...options,
      wrapper,
    }),
    waitForApolloMocks,
  };
}

/**
 * Method that extends [`renderHook`](https://testing-library.com/docs/react-testing-library/api#renderhook) method from
 * `@testing-library/react` package. It composes a wrapper using `ApiTestProviders` component from
 * `@sb/api-client/tests/utils/rendering` package and `options` property that is passed down to parent
 * `renderHook` method. It also extends returned result with the
 * [`waitForApolloMocks`](../../../api-client/generated/modules/tests_utils_rendering#waitforapollomocks) method.
 *
 * @param hook
 * @param options
 */
function customRenderHook<Result, Props>(hook: (initialProps: Props) => Result, options: CustomRenderOptions = {}) {
  const { wrapper, waitForApolloMocks } = getWrapper(AppTestProviders, options);

  return {
    ...renderHook(hook, {
      ...options,
      wrapper,
    }),
    waitForApolloMocks,
  };
}

export { customRender as render, customRenderHook as renderHook };
