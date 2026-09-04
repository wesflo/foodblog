import type { Meta, StoryObj } from '@storybook/react-vite';

import { FeatureHero } from './feature-hero';

const meta = {
    title: 'Compositions/Feature Hero',
    component: FeatureHero,
    parameters: { layout: 'padded' },
    args: {
        variant: 'recipe',
        eyebrow: 'Rezept für dich',
        headline: 'Cremige Pilz-Pasta mit Kräutern',
        description:
            'Samtige Sauce, aromatische Pilze und frische Kräuter – ein Wohlfühlgericht, das immer passt.',
        image: {
            src: 'https://picsum.photos/seed/feature-recipe/1400/1000',
            alt: 'Platzhalterbild für das Rezept der Woche.',
        },
        href: '#',
        linkLabel: 'Zum Rezept',
        metaAriaLabel: 'Rezeptübersicht',
        meta: [
            { kind: 'time', value: '30 Min.', label: 'Gesamtzeit' },
            { kind: 'difficulty', value: 'Einfach', label: 'Schwierigkeit' },
            { kind: 'category', value: 'Vegetarisch', label: 'Kategorie' },
        ],
    },
} satisfies Meta<typeof FeatureHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Recipe: Story = {};

export const Travel: Story = {
    args: {
        variant: 'travel',
        eyebrow: 'Reise für dich',
        headline: 'Ein Wochenende zwischen Markt und Meer',
        description:
            'Lokale Küche, kleine Gassen und eine Küste, an der der Alltag kurz Pause macht.',
        image: {
            src: 'https://picsum.photos/seed/feature-travel/1400/1000',
            alt: 'Platzhalterbild für die hervorgehobene Reise.',
        },
        href: '#',
        linkLabel: 'Zur Reise',
        meta: [],
    },
};
