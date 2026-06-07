import type { Meta, StoryObj } from '@storybook/react-vite';

import { TokenGrid } from './foundation-preview';

const meta = {
    title: 'Foundations/Shadows',
    component: TokenGrid,
    args: {
        type: 'shadow',
        tokens: ['--wf-shadow-overlay', '--wf-shadow-floating', '--wf-shadow-hover'],
    },
} satisfies Meta<typeof TokenGrid>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
