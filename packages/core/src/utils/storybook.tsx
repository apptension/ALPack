import { Story } from '@storybook/react';

import { CoreTestProviders, WrapperProps, getWrapper } from '../tests/utils/rendering';

export function withProviders(wrapperProps: WrapperProps = {}) {
  return (StoryComponent: Story) => {
    const { wrapper: WrapperComponent } = getWrapper(CoreTestProviders, wrapperProps);

    return (
      <WrapperComponent {...wrapperProps}>
        <StoryComponent />
      </WrapperComponent>
    );
  };
}
