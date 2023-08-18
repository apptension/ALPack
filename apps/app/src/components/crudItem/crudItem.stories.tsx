import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { CrudItem, CrudItemProps } from './crudItem.component';

type Story = StoryObj<typeof CrudItem>;

const meta: Meta<typeof CrudItem> = {
  title: 'App/Components/CrudItem',
  component: CrudItem,
};

export default meta;

const Template: StoryFn<CrudItemProps> = (args) => {
  return <CrudItem crudItem={args.crudItem} />;
};

export const Default: Story = {
  render: Template,
  args: {
    crudItem: {
      id: '1',
      name: 'default name',
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
};

export const LongName: Story = {
  render: Template,
  args: {
    crudItem: {
      id: '3',
      name: 'Long long long long name',
    },
  },
};
