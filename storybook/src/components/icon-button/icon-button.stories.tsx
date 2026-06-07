import type { Meta, StoryObj } from '@storybook/react-vite';

import { SearchIcon } from '../../utilities/icons';
import { IconButton } from './icon-button';

const meta = {
    title: 'Components/Icon Button',
    component: IconButton,
    args: { label: 'Search', icon: <SearchIcon /> },
    parameters: { layout: 'centered' },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
export const Primary: Story = { args: { variant: 'primary' } };
export const Disabled: Story = { args: { disabled: true } };
