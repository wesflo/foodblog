import type { Meta, StoryObj } from '@storybook/react-vite';

import { SpacingPreview } from './foundation-preview';

const meta = {
    title: 'Foundations/Spacing',
    component: SpacingPreview,
} satisfies Meta<typeof SpacingPreview>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
