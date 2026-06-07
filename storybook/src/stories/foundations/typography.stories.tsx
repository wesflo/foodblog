import type { Meta, StoryObj } from '@storybook/react-vite';

import { TypographyPreview } from './foundation-preview';

const meta = {
    title: 'Foundations/Typography',
    component: TypographyPreview,
} satisfies Meta<typeof TypographyPreview>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
