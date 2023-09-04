import { Meta, StoryObj } from '@storybook/react';

import { withProviders } from '../../utils';
import { LanguageSwitch } from './';

type Story = StoryObj<typeof LanguageSwitch>;

const meta: Meta<typeof LanguageSwitch> = {
  title: 'Core/LanguageSwitch',
  component: LanguageSwitch,
};

export default meta;

export const Default: Story = {
  render: () => <LanguageSwitch />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [withProviders()],
};
