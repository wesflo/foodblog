import type { Meta, StoryObj } from '@storybook/react-vite';

import { TokenPreview } from './token-preview';

const meta = {
    title: 'Styles/Radius',
    component: TokenPreview,
    parameters: {
        layout: 'padded',
    },
    args: {
        title: 'Radius',
        type: 'radius',
        tokens: ['--radius-s', '--radius-m', '--radius-l', '--radius-full'],
    },
} satisfies Meta<typeof TokenPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
