import type { Meta, StoryObj } from '@storybook/react-vite';

import { BreakpointPreview } from './foundation-preview';

const meta = {
    title: 'Foundations/Breakpoints',
    component: BreakpointPreview,
} satisfies Meta<typeof BreakpointPreview>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
