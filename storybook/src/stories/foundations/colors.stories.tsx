import type { Meta, StoryObj } from '@storybook/react-vite';

import { TokenGrid } from './foundation-preview';

const meta = {
    title: 'Foundations/Colors',
    component: TokenGrid,
    args: {
        type: 'color',
        tokens: [
            '--wf-background',
            '--wf-surface',
            '--wf-text',
            '--wf-text-muted',
            '--wf-border',
            '--wf-primary',
            '--wf-secondary',
            '--wf-coral',
            '--wf-yellow',
            '--wf-success',
            '--wf-warning',
            '--wf-error',
        ],
    },
} satisfies Meta<typeof TokenGrid>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
