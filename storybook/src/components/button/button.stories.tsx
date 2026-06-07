import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './button';

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    args: {
        children: 'Save recipe',
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Filled: Story = {};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Plan menu',
    },
};

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'View notes',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Dismiss',
    },
};

export const Link: Story = {
    args: {
        variant: 'link',
        children: 'Read the guide',
    },
};

export const Small: Story = {
    args: {
        size: 's',
        children: 'Small action',
    },
};

export const Large: Story = {
    args: {
        size: 'l',
        children: 'Start cooking',
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
        children: 'Unavailable',
    },
};
