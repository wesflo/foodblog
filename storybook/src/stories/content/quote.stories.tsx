import type { Meta, StoryObj } from '@storybook/react-vite';

import { RichTextExample } from './content-preview';

const meta = {
    title: 'Content/Quote',
    component: RichTextExample,
    parameters: { layout: 'padded' },
} satisfies Meta<typeof RichTextExample>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
