import { Meta, StoryObj } from '@storybook/react';

import { withAppProviders } from '../../../../.storybook/decorators';
import { Footer } from './footer.component';

type Story = StoryObj<typeof Footer>;

const meta: Meta<typeof Footer> = {
  title: 'Homepage/Components/Footer',
  component: Footer,
};

export default meta;

const data = [{ title: 'About', links: [{ label: 'GitHub', link: '#' }] }];

export const Default: Story = {
  render: () => <Footer data={data} />,
  decorators: [withAppProviders()],
};
