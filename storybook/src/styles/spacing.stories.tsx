import type { Meta, StoryObj } from '@storybook/react-vite';

import { TokenPreview } from './token-preview';

const meta = {
    title: 'Styles/Spacing',
    component: TokenPreview,
    parameters: {
        layout: 'padded',
    },
    args: {
        title: 'Spacing',
        type: 'spacing',
        tokens: ['--space-xs', '--space-s', '--space-m', '--space-l', '--space-xl', '--space-2xl'],
    },
} satisfies Meta<typeof TokenPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
