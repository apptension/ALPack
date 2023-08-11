import { Queries, queries } from '@testing-library/dom';
import { RenderOptions, RenderResult, render, renderHook } from '@testing-library/react';
import { ComponentClass, ComponentType, FC, PropsWithChildren, ReactElement } from 'react';

import { MantineProvider } from '@ab/core/providers';

/**
 * A set of properties that are passed to [`CoreTestProviders`](#coretestproviders) component to override the initial
 * state of providers
 */
export type CoreTestProvidersProps = PropsWithChildren;

/**
 * Component that renders a set of providers used in tests globally like: `Mantine`, `LocalesProvider`, etc...
 *
 * It is used in [`render`](#render) and [`renderHook`](#renderhook) methods.
 * @param children
 * @constructor
 */
export function CoreTestProviders({ children }: CoreTestProvidersProps) {
  return <MantineProvider>{children}</MantineProvider>;
}

export type WrapperProps = Partial<CoreTestProvidersProps>;

/** @ignore */
export function getWrapper(
  WrapperComponent: ComponentClass<CoreTestProvidersProps> | FC<CoreTestProvidersProps>,
  wrapperProps: WrapperProps
): {
  wrapper: ComponentType<WrapperProps>;
} {
  const wrapper = (props: PropsWithChildren<WrapperProps>) => {
    return <WrapperComponent {...props} {...(wrapperProps ?? {})} />;
  };

  return {
    wrapper,
  };
}

export type CustomRenderOptions<
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container
> = RenderOptions<Q, Container, BaseElement> & WrapperProps;

/**
 * Method that extends [`render`](https://testing-library.com/docs/react-testing-library/api#render) method from
 * `@testing-library/react` package. It composes a wrapper using [`CoreTestProviders`](#coretestproviders) component and
 * `options` property that is passed down to parent `render` method.
 * @param ui
 * @param options
 */
function customRender<
  Q extends Queries = typeof queries,
  Container extends Element | DocumentFragment = HTMLElement,
  BaseElement extends Element | DocumentFragment = Container
>(
  ui: ReactElement,
  options: CustomRenderOptions<Q, Container, BaseElement> = {}
): RenderResult<Q, Container, BaseElement> {
  const { wrapper } = getWrapper(CoreTestProviders, options);

  return {
    ...render<Q, Container, BaseElement>(ui, {
      ...options,
      wrapper,
    }),
  };
}

/**
 * Method that extends [`renderHook`](https://testing-library.com/docs/react-testing-library/api#renderhook) method from
 * `@testing-library/react` package. It composes a wrapper using [`CoreTestProviders`](#coretestproviders) component and
 * `options` property that is passed down to parent `renderHook` method.
 * @param hook
 * @param options
 */
function customRenderHook<Result, Props>(hook: (initialProps: Props) => Result, options: CustomRenderOptions = {}) {
  const { wrapper } = getWrapper(CoreTestProviders, options);

  return {
    ...renderHook(hook, {
      ...options,
      wrapper,
    }),
  };
}

export { customRender as render, customRenderHook as renderHook };

/** @ignore */
export const PLACEHOLDER_TEST_ID = 'content';
/** @ignore */
export const PLACEHOLDER_CONTENT = <span data-testid="content">content</span>;
