import type { Meta, StoryObj } from '@storybook/react-vite';

import { RadiiPreview } from './foundation-preview';

const meta = {
    title: 'Foundations/Radii',
    component: RadiiPreview,
} satisfies Meta<typeof RadiiPreview>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
