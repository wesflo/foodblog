import type { Meta, StoryObj } from '@storybook/react-vite';

import { SideBySideHero } from './side-by-side-hero';

const meta = {
    title: 'Compositions/Side By Side Hero',
    component: SideBySideHero,
    parameters: { layout: 'padded' },
    args: {
        ariaLabel: 'Kochen und Reisen',
        badge: {
            firstLine: 'Food',
            separator: '×',
            secondLine: 'Travel',
            ariaLabel: 'Food und Travel',
        },
        items: [
            {
                eyebrow: 'Kochen',
                headline: 'Mit Liebe gekocht.',
                description:
                    'Saisonale Zutaten, kreative Rezepte und Techniken, die gelingen. Für Genussmomente zu Hause.',
                image: {
                    src: 'https://picsum.photos/seed/side-hero-cooking/900/1100',
                    alt: 'Platzhalterbild für die Rezeptwelt.',
                },
                href: '#',
                linkLabel: 'Zu den Rezepten',
            },
            {
                eyebrow: 'Unterwegs',
                headline: 'Die Welt entdecken.',
                description:
                    'Neue Orte, lokale Märkte und kulinarische Geschichten. Inspiration für deine nächste Reise.',
                image: {
                    src: 'https://picsum.photos/seed/side-hero-travel/900/1100',
                    alt: 'Platzhalterbild für die Reisewelt.',
                },
                href: '#',
                linkLabel: 'Zu den Reisezielen',
            },
        ],
    },
} satisfies Meta<typeof SideBySideHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
