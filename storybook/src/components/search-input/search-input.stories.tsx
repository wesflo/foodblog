import type { Meta, StoryObj } from '@storybook/react-vite';

import { SearchInput } from './search-input';

const meta = {
    title: 'Components/Search Input',
    component: SearchInput,
    args: { label: 'Suche', defaultValue: 'Pasta' },
    parameters: { layout: 'centered' },
} satisfies Meta<typeof SearchInput>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
export const NoResults: Story = {
    args: { defaultValue: 'xyz', status: 'error', message: 'Nichts gefunden.' },
};
export const Results: Story = { args: { status: 'success', message: '12 Rezepte gefunden.' } };
