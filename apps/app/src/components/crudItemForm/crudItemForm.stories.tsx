import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { withAppProviders } from '../../../.storybook/decorators';
import { CrudItemForm, CrudItemFormProps } from './crudItemForm.component';

type Story = StoryObj<typeof CrudItemForm>;

const meta: Meta<typeof CrudItemForm> = {
  title: 'App/Components/CrudItemForm',
  component: CrudItemForm,
};

export default meta;

const Template: StoryFn<CrudItemFormProps> = (args) => <CrudItemForm {...args} />;

export const Default: Story = {
  render: Template,
  decorators: [withAppProviders()],
  args: {
    loading: false,
    onSubmit: () => null,
  },
};

export const LoadingState: Story = {
  render: Template,
  decorators: [withAppProviders()],
  args: {
    loading: true,
    onSubmit: () => null,
  },
};
