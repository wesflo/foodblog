import type { Meta, StoryObj } from '@storybook/react-vite';

import { TokenGrid } from './foundation-preview';

const meta = {
    title: 'Foundations/Breakpoints',
    component: TokenGrid,
    args: {
        type: 'breakpoint',
        tokens: [
            '--wf-breakpoint-s',
            '--wf-breakpoint-m',
            '--wf-breakpoint-l',
            '--wf-breakpoint-xl',
        ],
    },
} satisfies Meta<typeof TokenGrid>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
