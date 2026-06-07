import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tabs } from './tabs';

const meta = {
    title: 'Components/Tabs',
    component: Tabs,
    args: {
        items: [
            {
                value: 'description',
                label: 'Beschreibung',
                content: 'Ein einfaches, cremiges Pasta-Rezept.',
            },
            {
                value: 'ingredients',
                label: 'Zutaten',
                content: 'Pasta, Erbsen, Zitrone und Parmesan.',
            },
        ],
    },
    parameters: { layout: 'padded' },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Experimental: Story = {};
