import type { Meta, StoryObj } from '@storybook/react-vite';

import { Textarea } from './textarea';

const meta = {
    title: 'Components/Textarea',
    component: Textarea,
    args: { label: 'Nachricht', defaultValue: 'Ich liebe eure Rezepte!' },
    parameters: { layout: 'centered' },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
export const Error: Story = { args: { status: 'error', message: 'Bitte schreibe etwas.' } };
