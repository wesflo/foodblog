import type { Meta, StoryObj } from '@storybook/react-vite';

import { Select } from './select';

const options = [
    { value: '', label: 'Kategorie wählen' },
    { value: 'pasta', label: 'Pasta' },
    { value: 'salad', label: 'Salat' },
];

const meta = {
    title: 'Components/Select',
    component: Select,
    args: { label: 'Kategorie', options },
    parameters: { layout: 'centered' },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
export const Error: Story = { args: { status: 'error', message: 'Bitte eine Option wählen.' } };
export const Success: Story = {
    args: { status: 'success', message: 'Auswahl gespeichert.', defaultValue: 'pasta' },
};
