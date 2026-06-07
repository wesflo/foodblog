import type { Meta, StoryObj } from '@storybook/react-vite';

import { BorderPreview } from './foundation-preview';

const meta = {
    title: 'Foundations/Borders',
    component: BorderPreview,
} satisfies Meta<typeof BorderPreview>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
