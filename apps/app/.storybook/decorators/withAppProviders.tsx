import { StoryFn } from '@storybook/react';

import { AppTestProviders, WrapperProps, getWrapper } from '../../src/tests/utils/rendering';

/**
 * [Storybook decorator](https://storybook.js.org/docs/react/writing-stories/decorators) to be used in `app` package
 * stories. It wraps the story with all needed providers and allows to pass state to it.
 * @param wrapperProps
 * @category utils
 *
 * @example Basic usage:
 * ```tsx title="example.stories.tsx" showLineNumbers
 * export default {
 *   title: 'ExampleComponent',
 *   component: ExampleComponent,
 *   decorators: [
 *     withAppProviders(),
 *   ],
 * };
 * ```
 */
export function withAppProviders(wrapperProps: WrapperProps = {}) {
  return (StoryComponent: StoryFn, storyContext: any) => {
    const { wrapper: WrapperComponent } = getWrapper(AppTestProviders, wrapperProps, storyContext) as any;

    return (
      <WrapperComponent {...wrapperProps}>
        <StoryComponent />
      </WrapperComponent>
    );
  };
}
