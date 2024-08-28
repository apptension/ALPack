import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { UserRole } from '@alp/graphql-api/types';

import { withAppProviders } from '../../../.storybook/decorators';
import { sessionProviderFactory } from '../../tests/factories/sessionProviderFactory';
import { CrudItem, CrudItemProps } from './crudItem.component';

type Story = StoryObj<typeof CrudItem>;

const meta: Meta<typeof CrudItem> = {
  title: 'App/Components/CrudItem',
  component: CrudItem,
};

export default meta;

const Template: StoryFn<CrudItemProps> = (args) => <CrudItem crudItem={args.crudItem} />;

export const Default: Story = {
  render: Template,
  args: {
    crudItem: {
      id: '1',
      name: 'default name',
    },
  },
  decorators: [
    withAppProviders({
      sessionProviderProps: sessionProviderFactory({ role: UserRole.USER }),
    }),
  ],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export const ShortName: Story = {
  render: Template,
  args: {
    crudItem: {
      id: '2',
      name: 'name',
    },
  },
  decorators: [
    withAppProviders({
      sessionProviderProps: sessionProviderFactory({ role: UserRole.USER }),
    }),
  ],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export const LongName: Story = {
  render: Template,
  args: {
    crudItem: {
      id: '3',
      name: 'Long long long long name',
    },
  },
  decorators: [
    withAppProviders({
      sessionProviderProps: sessionProviderFactory({ role: UserRole.USER }),
    }),
  ],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
