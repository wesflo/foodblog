import type { Meta, StoryObj } from '@storybook/react-vite';

import { InputField } from './input-field';

const meta = {
    title: 'Components/Input Field',
    component: InputField,
    parameters: {
        layout: 'centered',
    },
    args: {
        label: 'Email address',
        placeholder: 'you@example.com',
        type: 'email',
    },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDescription: Story = {
    args: {
        description: 'Used for recipe updates and saved shopping lists.',
    },
};

export const Required: Story = {
    args: {
        required: true,
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        value: 'reader@example.com',
    },
};

export const Invalid: Story = {
    args: {
        error: 'Enter a valid email address.',
        value: 'reader',
    },
};
