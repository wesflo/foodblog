import type { Meta, StoryObj } from '@storybook/react-vite';

import { BlockquoteExample } from './content-preview';

const meta = {
    title: 'Content/Quote',
    parameters: { layout: 'padded' },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => <BlockquoteExample />,
};

export const LongQuote: Story = {
    name: 'Long Quote',
    render: () => <BlockquoteExample long />,
};
