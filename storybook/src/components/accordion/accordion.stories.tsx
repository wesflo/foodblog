import type { Meta, StoryObj } from '@storybook/react-vite';

import { Accordion } from './accordion';

const baseItems = [
    {
        title: 'Was ist der Wochenflow?',
        content: 'Der Wochenflow ist dein persoenlicher Begleiter fuer entspanntes Kochen.',
    },
    {
        title: 'Kann ich Rezepte speichern?',
        content: 'Ja, du kannst Rezepte vormerken und spaeter wiederfinden.',
    },
    {
        title: 'Gibt es eine App?',
        content: 'Die Oberflaeche ist vorbereitet, damit Rezepte auch mobil gut funktionieren.',
    },
];

const meta = {
    title: 'Components/Accordion',
    component: Accordion,
    args: {
        items: baseItems,
    },
    parameters: { layout: 'padded' },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const OneItemOpen: Story = {
    name: 'One Item Open',
    args: { defaultValue: ['0'] },
};

export const MultipleItems: Story = {
    name: 'Multiple Items',
    args: {
        defaultValue: ['0', '1'],
    },
};

export const LongTriggerText: Story = {
    name: 'Long Trigger Text',
    args: {
        items: [
            {
                title: 'Wie plane ich eine Woche mit wenig Zeit, wechselnden Terminen und trotzdem gutem Essen?',
                content:
                    'Starte mit zwei sicheren Rezepten, einem schnellen Gericht und genug Resten fuer einen weiteren Tag.',
            },
            ...baseItems.slice(1),
        ],
    },
};

export const LongContent: Story = {
    name: 'Long Content',
    args: {
        defaultValue: ['0'],
        items: [
            {
                title: 'Wie funktioniert der Wochenflow?',
                content:
                    'Du sammelst Rezepte, planst grob nach Tagen und laesst genug Luft fuer spontane Abende. Der Inhalt bleibt bewusst ruhig, damit auch laengere Antworten im Panel lesbar bleiben.',
            },
            ...baseItems.slice(1),
        ],
    },
};

export const KeyboardInteraction: Story = {
    name: 'Keyboard Interaction',
    args: { defaultValue: ['1'] },
};

export const DisabledItem: Story = {
    name: 'Disabled Item',
    args: {
        items: [
            ...baseItems,
            { title: 'Archivierte Rezepte', content: 'Nicht verfuegbar.', disabled: true },
        ],
    },
};
