import { Meta, StoryObj } from '@storybook/react';

import { withAppProviders } from '../../../.storybook/decorators';
import { Header } from './header.component';

type Story = StoryObj<typeof Header>;

const meta: Meta<typeof Header> = {
  title: 'App/Components/Header',
  component: Header,
  decorators: [withAppProviders()],
};

export default meta;

export const Default: Story = {
  args: {
    opened: true,
  },
};
