import type { Meta, StoryObj } from '@storybook/react-vite';

import { TokenPreview } from './token-preview';

const meta = {
    title: 'Styles/Colors',
    component: TokenPreview,
    parameters: {
        layout: 'padded',
    },
    args: {
        title: 'Colors',
        type: 'color',
        tokens: [
            '--color-background',
            '--color-foreground',
            '--color-surface',
            '--color-muted',
            '--color-muted-foreground',
            '--color-primary',
            '--color-secondary',
            '--color-border',
            '--color-focus',
            '--color-danger',
        ],
    },
} satisfies Meta<typeof TokenPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
