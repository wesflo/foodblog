import type { Meta, StoryObj } from '@storybook/react-vite';

import { RecipeDetail, type RecipeDetailProps } from './recipe-detail';

const recipeMock: RecipeDetailProps = {
    breadcrumbAriaLabel: 'Brotkrümelnavigation',
    breadcrumb: [
        { label: 'Rezepte', href: '#' },
        { label: 'Pasta', href: '#' },
        { label: 'Cremige Pilz-Pasta mit Kräutern' },
    ],
    category: 'Hauptgang',
    title: 'Cremige Pilz-Pasta mit Kräutern',
    description:
        'Samtige Sauce, aromatische Pilze und frische Kräuter – ein Wohlfühlgericht für jeden Tag.',
    images: [
        {
            src: 'https://picsum.photos/seed/mushroom-pasta-main/1200/900',
            alt: 'Cremige Pasta mit Pilzen und frischen Kräutern.',
        },
        {
            src: 'https://picsum.photos/seed/mushroom-pasta-pan/700/650',
            alt: 'Pasta mit Pilzen in einer dunklen Pfanne.',
        },
        {
            src: 'https://picsum.photos/seed/mushroom-pasta-herbs/700/650',
            alt: 'Frische Kräuter und geriebener Käse.',
        },
        {
            src: 'https://picsum.photos/seed/mushroom-pasta-hidden/700/650',
            alt: 'Ein weiteres Pastagericht, das nicht angezeigt wird.',
        },
    ],
    imageGalleryAriaLabel: 'Bilder zum Rezept',
    metricsAriaLabel: 'Rezeptübersicht',
    metrics: [
        { kind: 'preparation', label: 'Vorbereitung', value: '20 Min.' },
        { kind: 'cooking', label: 'Kochzeit', value: '25 Min.' },
        { kind: 'resting', label: 'Ruhezeit', value: '10 Min.' },
        { kind: 'total', label: 'Gesamtzeit', value: '55 Min.' },
        { kind: 'difficulty', label: 'Schwierigkeit', value: 'Mittel', highlighted: true },
    ],
    ingredientsTitle: 'Zutaten',
    ingredientGroups: [
        {
            title: 'Pasta',
            items: [
                { amount: '400 g', name: 'Tagliatelle' },
                { amount: '10 g', name: 'Salz' },
                { amount: '1 EL', name: 'Olivenöl' },
            ],
        },
        {
            title: 'Pilze',
            items: [
                { amount: '400 g', name: 'Kräuterseitlinge' },
                { amount: '200 g', name: 'Champignons' },
                { amount: '1', name: 'Zwiebel' },
                { amount: '2', name: 'Knoblauchzehen' },
                { amount: '2 EL', name: 'Olivenöl' },
            ],
        },
        {
            title: 'Sauce',
            items: [
                { amount: '200 ml', name: 'Sahne' },
                { amount: '100 ml', name: 'Gemüsebrühe' },
                { amount: '50 g', name: 'Parmesan' },
                { amount: '1 TL', name: 'Senf' },
                { name: 'Salz' },
                { name: 'Pfeffer' },
            ],
        },
        {
            title: 'Kräuter',
            items: [
                { amount: '2 EL', name: 'Petersilie' },
                { amount: '1 EL', name: 'Schnittlauch' },
                { name: 'Thymian' },
            ],
        },
    ],
    preparationTitle: 'Zubereitung',
    stepGroups: [
        {
            title: 'Pasta',
            steps: [
                {
                    title: 'Pasta kochen',
                    description:
                        'Einen großen Topf mit Wasser zum Kochen bringen, salzen und die Tagliatelle nach Packungsanweisung al dente kochen.',
                    duration: '10–12 Min. kochen',
                },
                {
                    title: 'Abgießen',
                    description:
                        'Pasta abgießen, dabei etwas Kochwasser auffangen und beiseitestellen.',
                    duration: '2 Min.',
                },
                {
                    title: 'Beiseitestellen',
                    description:
                        'Pasta zurück in den Topf geben, mit Olivenöl vermengen und beiseitestellen.',
                    duration: '1 Min.',
                },
            ],
        },
        {
            title: 'Pilze',
            steps: [
                {
                    title: 'Pilze vorbereiten',
                    description:
                        'Kräuterseitlinge in Streifen, Champignons in Scheiben und die Zwiebel fein schneiden. Knoblauch hacken.',
                    duration: '10 Min. vorbereiten',
                },
                {
                    title: 'Pilze anbraten',
                    description:
                        'Olivenöl in einer Pfanne erhitzen und die Pilze bei hoher Hitze goldbraun anbraten.',
                    duration: '5–6 Min. anbraten',
                },
            ],
        },
        {
            title: 'Sauce',
            steps: [
                {
                    title: 'Sauce zubereiten',
                    description:
                        'Sahne und Gemüsebrühe zu den Pilzen geben, aufkochen und leicht köcheln lassen.',
                    duration: '3–4 Min. köcheln',
                },
                {
                    title: 'Abschmecken',
                    description: 'Parmesan, Senf, Salz und Pfeffer einrühren und abschmecken.',
                    duration: '2 Min.',
                },
            ],
        },
        {
            title: 'Fertigstellen',
            steps: [
                {
                    title: 'Pasta vermengen',
                    description:
                        'Pasta und etwas Kochwasser zur Sauce geben und gründlich vermengen.',
                    duration: '2 Min.',
                },
                {
                    title: 'Kräuter hinzufügen',
                    description:
                        'Mit Petersilie, Schnittlauch und Thymian bestreuen und direkt servieren.',
                    duration: '1 Min.',
                },
            ],
        },
    ],
    aboutTitle: 'Über das Gericht',
    about: {
        paragraphs: [
            'Diese cremige Pilz-Pasta ist ein echter Allrounder: schnell gemacht, voller Geschmack und mit wenigen Zutaten aus der Vorratskammer. Perfekt für ein entspanntes Abendessen unter der Woche – oder wenn Gäste kommen.',
        ],
        highlights: [
            'Kräuterseitlinge und Champignons sorgen gemeinsam für ein intensives Aroma.',
            'Ein Schuss Pastawasser macht die Sauce besonders schön cremig.',
            'Frische Kräuter geben dem Gericht zum Schluss Leichtigkeit.',
        ],
    },
    tagsTitle: 'Tags',
    tags: [
        { label: 'Pasta', href: '#' },
        { label: 'Pilze', href: '#' },
        { label: 'Vegetarisch', href: '#' },
        { label: 'Schnell', href: '#' },
        { label: 'Feierabendküche', href: '#' },
        { label: 'Italienisch', href: '#' },
    ],
};

const meta = {
    title: 'Compositions/Recipe Detail',
    component: RecipeDetail,
    args: recipeMock,
    parameters: {
        layout: 'fullscreen',
    },
} satisfies Meta<typeof RecipeDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutImages: Story = {
    name: 'Without images',
    args: {
        images: [],
    },
};

export const SingleImage: Story = {
    name: 'Single image',
    args: {
        images: recipeMock.images.slice(0, 1),
    },
};

export const TwoImages: Story = {
    name: 'Two images',
    args: {
        images: recipeMock.images.slice(0, 2),
    },
};
