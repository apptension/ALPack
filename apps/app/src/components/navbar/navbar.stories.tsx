import { Meta, StoryObj } from '@storybook/react';

import { withAppProviders } from '../../../.storybook/decorators';
import { Navbar } from './navbar.component';

type Story = StoryObj<typeof Navbar>;

const meta: Meta<typeof Navbar> = {
  title: 'App/Components/Navbar',
  component: Navbar,
  decorators: [withAppProviders()],
};

export default meta;

export const Default: Story = {
  args: {
    opened: true,
  },
};
