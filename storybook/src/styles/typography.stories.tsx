import type { Meta, StoryObj } from '@storybook/react-vite';

import { TokenPreview } from './token-preview';

const meta = {
    title: 'Styles/Typography',
    component: TokenPreview,
    parameters: {
        layout: 'padded',
    },
    args: {
        title: 'Typography',
        type: 'typography',
        tokens: [
            '--font-size-s',
            '--font-size-m',
            '--font-size-l',
            '--font-size-xl',
            '--font-size-2xl',
        ],
    },
} satisfies Meta<typeof TokenPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
