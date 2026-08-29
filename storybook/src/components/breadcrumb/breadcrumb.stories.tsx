import type { Meta, StoryObj } from '@storybook/react-vite';

import { Breadcrumb } from './breadcrumb';

const meta = {
    title: 'Components/Breadcrumb',
    component: Breadcrumb,
    args: {
        ariaLabel: 'Brotkrümelnavigation',
        items: [
            { label: 'Rezepte', href: '#' },
            { label: 'Pasta', href: '#' },
            { label: 'Cremige Pilz-Pasta mit Kräutern' },
        ],
    },
    parameters: { layout: 'padded' },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
