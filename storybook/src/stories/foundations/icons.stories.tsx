import type { Meta, StoryObj } from '@storybook/react-vite';

import { IconPreview } from './foundation-preview';

const meta = {
    title: 'Foundations/Icons',
    component: IconPreview,
} satisfies Meta<typeof IconPreview>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
