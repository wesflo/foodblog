import type { Meta, StoryObj } from '@storybook/react-vite';
import { Search, iconDefaults } from '@wesflo/ui/icons';

import { IconButton } from './icon-button';

const meta = {
    title: 'Components/Icon Button',
    component: IconButton,
    args: { label: 'Search', icon: <Search {...iconDefaults} /> },
    parameters: { layout: 'centered' },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
export const Primary: Story = { args: { variant: 'primary' } };
export const Disabled: Story = { args: { disabled: true } };
