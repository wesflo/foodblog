import type { Meta, StoryObj } from '@storybook/react-vite';

import { TokenGrid } from './foundation-preview';

const meta = {
    title: 'Foundations/Spacing',
    component: TokenGrid,
    args: {
        type: 'space',
        tokens: [
            '--wf-space-2xs',
            '--wf-space-xs',
            '--wf-space-s',
            '--wf-space-m',
            '--wf-space-l',
            '--wf-space-xl',
            '--wf-space-2xl',
            '--wf-space-3xl',
        ],
    },
} satisfies Meta<typeof TokenGrid>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
