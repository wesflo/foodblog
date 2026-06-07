import type { Meta, StoryObj } from '@storybook/react-vite';

import { ShadowPreview } from './foundation-preview';

const meta = {
    title: 'Foundations/Shadows',
    component: ShadowPreview,
} satisfies Meta<typeof ShadowPreview>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
