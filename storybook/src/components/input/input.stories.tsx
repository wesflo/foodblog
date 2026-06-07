import type { Meta, StoryObj } from '@storybook/react-vite';

import { Input } from './input';

const meta = {
    title: 'Components/Input',
    component: Input,
    args: { label: 'E-Mail-Adresse', type: 'email' },
    parameters: { layout: 'centered' },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
export const Filled: Story = { args: { defaultValue: 'hallo@beispiel.de' } };
export const Error: Story = {
    args: { status: 'error', message: 'Bitte gib eine gültige E-Mail-Adresse ein.' },
};
export const Success: Story = { args: { status: 'success', message: 'Sieht gut aus!' } };
export const Disabled: Story = { args: { disabled: true } };
