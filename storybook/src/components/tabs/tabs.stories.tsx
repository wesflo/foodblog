import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tabs } from './tabs';

const baseItems = [
    {
        value: 'description',
        label: 'Beschreibung',
        content: 'Ein einfaches, cremiges Pasta-Rezept mit frischen Zitronen und Parmesan.',
    },
    {
        value: 'ingredients',
        label: 'Zutaten',
        content: 'Pasta, Erbsen, Zitrone, Ricotta, Parmesan und Olivenoel.',
    },
    {
        value: 'preparation',
        label: 'Zubereitung',
        content: 'Alles in Ruhe vorbereiten, kurz anbraten und mit Pasta-Wasser cremig ruehren.',
    },
];

const meta = {
    title: 'Components/Tabs',
    component: Tabs,
    args: {
        items: baseItems,
    },
    parameters: { layout: 'padded' },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const DifferentActiveTab: Story = {
    name: 'Different Active Tab',
    args: { defaultValue: 'ingredients' },
};

export const LongLabels: Story = {
    name: 'Long Labels',
    args: {
        items: [
            {
                value: 'overview',
                label: 'Beschreibung und Kontext',
                content:
                    'Ein laengerer Tab-Name bleibt lesbar und bricht den Rest der Navigation nicht.',
            },
            {
                value: 'ingredients',
                label: 'Zutaten fuer die Woche',
                content: 'Pasta, Erbsen, Zitrone, Ricotta, Parmesan und Olivenoel.',
            },
            {
                value: 'notes',
                label: 'Notizen aus der Kueche',
                content: 'Kleine Hinweise fuer Varianten und Reste.',
            },
        ],
    },
};

export const NarrowViewport: Story = {
    name: 'Narrow Viewport',
    render: (args) => (
        <div style={{ maxWidth: '18rem' }}>
            <Tabs {...args} />
        </div>
    ),
};

export const KeyboardInteraction: Story = {
    name: 'Keyboard Interaction',
    args: { defaultValue: 'description' },
};

export const DisabledTab: Story = {
    name: 'Disabled Tab',
    args: {
        items: [
            ...baseItems,
            { value: 'notes', label: 'Notizen', content: 'Nicht verfuegbar.', disabled: true },
        ],
    },
};
