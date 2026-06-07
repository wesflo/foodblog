import type { Meta, StoryObj } from '@storybook/react-vite';

import { MotionPreview } from './foundation-preview';

const meta = {
    title: 'Foundations/Motion',
    component: MotionPreview,
} satisfies Meta<typeof MotionPreview>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
