import { Meta, StoryObj } from '@storybook/react';

import { UserRole } from '@ab/schema/types';

import { withAppProviders } from '../../../.storybook/decorators';
import { sessionProviderFactory } from '../../tests/factories/sessionProviderFactory';
import { LoginState } from './loginState.component';

type Story = StoryObj<typeof LoginState>;

const meta: Meta<typeof LoginState> = {
  title: 'App/Components/LoginState',
  component: LoginState,
};

export default meta;

export const Default: Story = {
  render: () => <LoginState />,
  decorators: [withAppProviders()],
};
export const LoggedIn: Story = {
  render: () => <LoginState />,
  decorators: [
    withAppProviders({
      sessionProviderProps: sessionProviderFactory({ role: UserRole.USER }),
    }),
  ],
};
