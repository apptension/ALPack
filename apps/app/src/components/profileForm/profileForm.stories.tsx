import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { withAppProviders } from '../../../.storybook/decorators';
import { ProfileForm, ProfileFormProps } from './profileForm.component';

type Story = StoryObj<typeof ProfileForm>;

const meta: Meta<typeof ProfileForm> = {
  title: 'App/Components/ProfileForm',
  component: ProfileForm,
};

export default meta;

const Template: StoryFn<ProfileFormProps> = (args) => <ProfileForm {...args} />;

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
