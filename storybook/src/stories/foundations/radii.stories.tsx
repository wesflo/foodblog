import type { Meta, StoryObj } from '@storybook/react-vite';

import { TokenGrid } from './foundation-preview';

const meta = {
    title: 'Foundations/Radii',
    component: TokenGrid,
    args: {
        type: 'radius',
        tokens: ['--wf-radius-m', '--wf-radius-l', '--wf-radius-xl', '--wf-radius-pill'],
    },
} satisfies Meta<typeof TokenGrid>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
