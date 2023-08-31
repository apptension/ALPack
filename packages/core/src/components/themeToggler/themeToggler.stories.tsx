import { Meta, StoryObj } from '@storybook/react';

import { withProviders } from '../../utils';
import { ThemeToggler } from './';

type Story = StoryObj<typeof ThemeToggler>;

const meta: Meta<typeof ThemeToggler> = {
  title: 'Core/ThemeToggler',
  component: ThemeToggler,
};

export default meta;

export const Default: Story = {
  render: () => <ThemeToggler />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [withProviders()],
};
