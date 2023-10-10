import { Meta, StoryObj } from '@storybook/react';

import { UserRole } from '@alp/graphql-api/types';

import { withAppProviders } from '../../../../.storybook/decorators';
import { sessionProviderFactory } from '../../../tests/factories/sessionProviderFactory';
import { Header } from './header.component';

type Story = StoryObj<typeof Header>;

const links = [
  { link: '#', label: 'Home' },
  { link: `#features`, label: 'Features' },
];

const meta: Meta<typeof Header> = {
  title: 'Homepage/Components/Header',
  component: Header,
};

export default meta;

export const Default: Story = {
  render: () => <Header links={links} />,
  decorators: [withAppProviders()],
};

export const LoggedIn: Story = {
  render: () => <Header links={links} />,
  decorators: [
    withAppProviders({
      sessionProviderProps: sessionProviderFactory({ role: UserRole.USER }),
    }),
  ],
};

export const Loading: Story = {
  render: () => <Header links={links} />,
  decorators: [
    withAppProviders({
      sessionProviderProps: {
        data: null,
        status: 'loading',
      },
    }),
  ],
};
