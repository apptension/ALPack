import { Meta, StoryObj } from '@storybook/react';

import { withProviders } from '../../utils';
import { GenericError } from './';

type Story = StoryObj<typeof GenericError>;

const meta: Meta<typeof GenericError> = {
  title: 'Core/GenericError',
  component: GenericError,
};

export default meta;

export const Default: Story = {
  render: () => <GenericError />,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  decorators: [withProviders()],
};
