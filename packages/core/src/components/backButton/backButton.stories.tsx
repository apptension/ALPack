import { Meta, StoryObj } from '@storybook/react';

import { BackButton } from './';

type Story = StoryObj<typeof BackButton>;

const meta: Meta<typeof BackButton> = {
  title: 'Core/BackButton',
  component: BackButton,
};

export default meta;

export const Default: Story = {
  render: () => <BackButton />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
