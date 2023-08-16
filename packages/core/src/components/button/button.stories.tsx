import { Meta, StoryObj } from '@storybook/react';

import { Button } from './';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'Core/Button',
  component: Button,
};

export default meta;

export const Default: Story = {
  render: () => <Button>Example</Button>,
};
