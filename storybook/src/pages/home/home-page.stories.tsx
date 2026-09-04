import type { Meta, StoryObj } from '@storybook/react-vite';

import { HomePage, type HomePageProps } from './home-page';

const collageSource = new URL('../../assets/home/home-hero-collage.png', import.meta.url).href;

const homeMock: HomePageProps = {
    hero: {
        eyebrow: 'Kochen, reisen, genießen',
        headline: 'Okay. Worauf hast du Bock?',
        description:
            'Sag mir, wonach dir ist – ich finde dir das passende Rezept. Schnell, einfach oder richtig beeindruckend.',
        collage: {
            src: collageSource,
            alt: 'Collage aus Pasta, Bergreise und gegrilltem Fleisch.',
        },
    },
    sideBySideHero: {
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
                    src: picsum('home-cooking', 1000, 1200),
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
                    src: picsum('home-travel', 1000, 1200),
                    alt: 'Platzhalterbild für die Reisewelt.',
                },
                href: '#',
                linkLabel: 'Zu den Reisezielen',
            },
        ],
    },
    featureHero: {
        variant: 'recipe',
        eyebrow: 'Rezept für dich',
        headline: 'Cremige Pilz-Pasta mit Kräutern',
        description:
            'Samtige Sauce, aromatische Pilze und frische Kräuter – ein Wohlfühlgericht, das immer passt.',
        image: {
            src: picsum('home-feature-recipe', 1600, 1100),
            alt: 'Platzhalterbild für die hervorgehobene Pilz-Pasta.',
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
    teaserSections: [
        {
            title: 'Neu auf dem Blog',
            columns: 4,
            allItemsHref: '#',
            allItemsLabel: 'Alle anzeigen',
            items: [
                metaTeaser(
                    'Zitronen-Ricotta-Pasta mit Rucola',
                    'Pasta',
                    'blog-lemon-pasta',
                    '20 Min.',
                    'Einfach',
                ),
                metaTeaser(
                    'Erdbeer-Tiramisu im Glas',
                    'Dessert',
                    'blog-strawberry',
                    '25 Min.',
                    'Einfach',
                ),
                metaTeaser(
                    'Lachs mit Ofengemüse und Kräuteröl',
                    'Ofengericht',
                    'blog-salmon',
                    '35 Min.',
                    'Mittel',
                ),
                metaTeaser(
                    'Grüne Erbsensuppe mit Minze',
                    'Suppe',
                    'blog-pea-soup',
                    '25 Min.',
                    'Einfach',
                ),
            ],
        },
        {
            title: 'Meine Dauerbrenner',
            columns: 4,
            allItemsHref: '#',
            allItemsLabel: 'Alle anzeigen',
            items: [
                metaTeaser(
                    'Spaghetti Aglio e Olio',
                    '',
                    'favorite-aglio-olio',
                    '20 Min.',
                    'Einfach',
                    'side-by-side-left',
                ),
                metaTeaser(
                    'Ofengemüse mit Feta',
                    '',
                    'favorite-feta',
                    '35 Min.',
                    'Einfach',
                    'side-by-side-left',
                ),
                metaTeaser(
                    'One-Pot Pasta mit Tomaten',
                    '',
                    'favorite-one-pot',
                    '25 Min.',
                    'Einfach',
                    'side-by-side-left',
                ),
                metaTeaser(
                    'Schokoladenkuchen mit flüssigem Kern',
                    '',
                    'favorite-chocolate',
                    '40 Min.',
                    'Mittel',
                    'side-by-side-left',
                ),
            ],
        },
    ],
    about: {
        eyebrow: 'Persönlich',
        headline: 'Über mich',
        paragraphs: [
            'Ich bin Julia, Köchin, Reisende und Genießerin. Hier teile ich Rezepte, Lieblingsorte und kleine Geschichten aus aller Welt – für mehr Geschmack im Alltag und Fernweh im Herzen.',
        ],
        image: {
            src: picsum('home-about', 1000, 1200),
            alt: 'Platzhalterbild für das Porträt auf der Startseite.',
        },
        href: '#',
        linkLabel: 'Mehr über mich',
        stampLabel: 'Kochen verbindet · Schmecken macht glücklich',
    },
    travelSection: {
        title: 'Geschichten von unterwegs',
        columns: 3,
        items: [
            teaser(
                'Pastéis, Gassen und Meerblick',
                'Lissabon',
                'Ein Wochenende zwischen Markt und Atlantik.',
                'travel-lisbon',
            ),
            teaser(
                'Wo der Markt noch echt ist',
                'Bozen',
                'Südtirol zwischen Obstständen und kleinen Küchen.',
                'travel-bolzano',
            ),
            teaser(
                'Ein Mittagessen mit Aussicht',
                'Zermatt',
                'Bergluft, lange Wege und eine gute Pause.',
                'travel-zermatt',
            ),
        ],
    },
};

const meta = {
    title: 'Pages/Home',
    component: HomePage,
    args: homeMock,
    parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

function teaser(
    headline: string,
    eyebrow: string,
    description: string,
    seed: string,
    variant: 'standard' | 'side-by-side-left' = 'standard',
) {
    return {
        headline,
        eyebrow,
        description,
        headlineSize: 's' as const,
        variant,
        href: '#',
        image: {
            src: picsum(seed),
            alt: `Platzhalterbild für ${headline}.`,
        },
    };
}

function metaTeaser(
    headline: string,
    eyebrow: string,
    seed: string,
    time: string,
    difficulty: string,
    variant: 'standard' | 'side-by-side-left' = 'standard',
) {
    return {
        headline,
        eyebrow,
        headlineSize: 's' as const,
        meta: [
            { label: 'Gesamtzeit', value: time },
            { label: 'Schwierigkeit', value: difficulty },
        ],
        variant,
        href: '#',
        image: {
            src: picsum(seed),
            alt: `Platzhalterbild für ${headline}.`,
        },
    };
}

function picsum(seed: string, width = 900, height = 680) {
    return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}
