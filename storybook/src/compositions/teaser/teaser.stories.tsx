import type { Meta, StoryObj } from '@storybook/react-vite';

import { Teaser, type TeaserProps, type TeaserVariant } from './teaser';
import storyStyles from './teaser.stories.module.css';

type TeaserFixture = Omit<TeaserProps, 'href' | 'variant'>;

const longDescription =
    'This slower weekend guide follows a full market basket from the first rough plan through prep, leftovers, and the small decisions that make everyday cooking feel less fragile. It includes notes on choosing flexible vegetables, saving herbs before they wilt, turning a simple sauce into two different dinners, and leaving enough space in the plan for the nights when nobody wants to follow a plan at all.';

const teaserFixtures: TeaserFixture[] = [
    {
        eyebrow: 'Recipe',
        headline: 'Fresh pasta with peas and lemon',
        description:
            'A bright weeknight recipe with simple ingredients, a creamy finish, and enough room for improvisation.',
        image: {
            src: illustrationImage('pasta', '#f7f4ee', '#2d99f7', '#fa3c9b', '#e7e89d'),
            alt: 'Abstract plate with a blue pasta line and colorful garnish dots.',
        },
    },
    {
        eyebrow: 'Market guide',
        headline: 'How to shop when the week is already full',
        description:
            'A practical note on buying flexible ingredients that work across several simple dinners.',
        image: {
            src: illustrationImage('market', '#effaf3', '#f05470', '#e7e89d', '#2d99f7'),
            sources: [
                {
                    media: '(min-width: 800px)',
                    srcSet: illustrationImage(
                        'market-wide',
                        '#effaf3',
                        '#f05470',
                        '#e7e89d',
                        '#2d99f7',
                    ),
                },
            ],
            alt: 'Abstract tray with colorful market ingredients.',
        },
    },
    {
        eyebrow: 'Kitchen note',
        headline: 'A quieter way to plan dinner',
        description:
            'Keep a short list, leave space for leftovers, and let one good sauce carry the week.',
        image: {
            src: illustrationImage('kitchen', '#eef7ff', '#272625', '#76716c', '#fa3c9b'),
            sources: [
                {
                    media: '(min-width: 800px)',
                    srcSet: illustrationImage(
                        'kitchen-wide',
                        '#eef7ff',
                        '#272625',
                        '#76716c',
                        '#fa3c9b',
                    ),
                },
            ],
            alt: 'Abstract kitchen note card with dark text lines.',
        },
    },
    {
        eyebrow: 'Seasonal',
        headline: 'Tomatoes, oil, bread, and nothing complicated',
        description:
            'A warm-weather idea for days when dinner should be generous but almost effortless.',
        image: {
            src: illustrationImage('tomatoes', '#fff7e8', '#f05470', '#b96f00', '#14985f'),
            alt: 'Abstract composition of tomatoes, oil, and herbs.',
        },
    },
    {
        eyebrow: 'Technique',
        headline: 'The small pan sauce that saves dinner',
        description:
            'A simple method for building flavor from garlic, pasta water, herbs, and a little patience.',
        image: {
            src: illustrationImage('sauce', '#fff0f3', '#fa3c9b', '#2d99f7', '#272625'),
            alt: 'Abstract pan sauce with bright accent shapes.',
        },
    },
    {
        eyebrow: 'Weekend',
        headline: 'Roasted vegetables for more than one meal',
        description: longDescription,
        image: {
            src: illustrationImage('long', '#f1ede7', '#14985f', '#e7e89d', '#f05470'),
            sources: [
                {
                    media: '(min-width: 800px)',
                    srcSet: illustrationImage(
                        'long-wide',
                        '#f1ede7',
                        '#14985f',
                        '#e7e89d',
                        '#f05470',
                    ),
                },
            ],
            alt: 'Abstract sheet pan with vegetables and herbs.',
        },
    },
    {
        eyebrow: 'Pantry',
        headline: 'Beans, herbs, and a clean bowl',
        description:
            'A pantry-first dinner that becomes brighter with lemon, parsley, and good olive oil.',
        image: {
            src: illustrationImage('beans', '#eef7ff', '#e7e89d', '#14985f', '#2d99f7'),
            alt: 'Abstract bowl with beans and herbs.',
        },
    },
    {
        eyebrow: 'Quick lunch',
        headline: 'A salad that still feels like a meal',
        description:
            'Crisp leaves, warm grains, and a sharp dressing make this more than a side dish.',
        image: {
            src: illustrationImage('salad', '#effaf3', '#14985f', '#e7e89d', '#fa3c9b'),
            alt: 'Abstract salad bowl with green and yellow shapes.',
        },
    },
    {
        eyebrow: 'Baking',
        headline: 'Flatbread for the impatient baker',
        description:
            'A forgiving dough for dipping, folding, tearing, and rescuing whatever is left in the fridge.',
        image: {
            src: illustrationImage('flatbread', '#f7f4ee', '#b96f00', '#e7e89d', '#272625'),
            alt: 'Abstract flatbread with golden shapes.',
        },
    },
    {
        eyebrow: 'Prep',
        headline: 'One pot of rice, three calm dinners',
        description:
            'Cook once, then change the bowl with herbs, crunchy seeds, roasted vegetables, or eggs.',
        image: {
            src: illustrationImage('rice', '#fffcf8', '#2d99f7', '#e7e89d', '#76716c'),
            alt: 'Abstract rice bowl with blue and yellow accents.',
        },
    },
    {
        eyebrow: 'Flavor',
        headline: 'The dressing that makes leftovers useful',
        description:
            'A sharp, salty, slightly sweet dressing can turn yesterday’s vegetables into dinner.',
        image: {
            src: illustrationImage('dressing', '#fff7e8', '#fa3c9b', '#f05470', '#2d99f7'),
            alt: 'Abstract dressing jar with bright color bands.',
        },
    },
    {
        eyebrow: 'Home cooking',
        headline: 'Soup for a tired evening',
        description:
            'A steady pot with soft vegetables, broth, and enough texture to feel complete.',
        image: {
            src: illustrationImage('soup', '#effaf3', '#2d99f7', '#14985f', '#b96f00'),
            alt: 'Abstract soup pot with blue, green, and orange shapes.',
        },
    },
];

const meta = {
    title: 'Compositions/Teaser',
    component: Teaser,
    args: {
        ...teaserFixtures[0],
        href: '#',
    },
    parameters: { layout: 'padded' },
} satisfies Meta<typeof Teaser>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {};

export const SideBySideLeft: Story = {
    name: 'Side By Side Left',
    args: {
        ...teaserFixtures[1],
        variant: 'side-by-side-left',
        href: '#',
    },
};

export const SideBySideRight: Story = {
    name: 'Side By Side Right',
    args: {
        ...teaserFixtures[2],
        variant: 'side-by-side-right',
        href: '#',
    },
};

export const WithoutEyebrow: Story = {
    name: 'Without Eyebrow',
    render: ({ eyebrow: _eyebrow, ...args }) => <Teaser {...args} />,
};

export const WithoutDescription: Story = {
    name: 'Without Description',
    render: ({ description: _description, ...args }) => <Teaser {...args} />,
};

export const StandardGridFourColumns: Story = {
    name: 'Standard Grid - Four Columns',
    render: () => <TeaserGrid columns={4} variant="standard" />,
};

export const StandardGridThreeColumns: Story = {
    name: 'Standard Grid - Three Columns',
    render: () => <TeaserGrid columns={3} variant="standard" />,
};

export const StandardGridTwoColumns: Story = {
    name: 'Standard Grid - Two Columns',
    render: () => <TeaserGrid columns={2} variant="standard" />,
};

export const SideBySideGridTwoColumns: Story = {
    name: 'Side by Side Grid - Two Columns',
    render: () => <TeaserGrid columns={2} variant="side-by-side" />,
};

export const SideBySideGridSingleColumn: Story = {
    name: 'Side by Side Grid - Single Column',
    render: () => <TeaserGrid columns={1} variant="side-by-side" />,
};

const TeaserGrid = ({
    columns,
    variant,
}: {
    columns: 1 | 2 | 3 | 4;
    variant: 'standard' | 'side-by-side';
}) => (
    <div
        className={`${storyStyles.grid} ${
            variant === 'standard' ? storyStyles.standardGrid : storyStyles.sideBySideGrid
        }`}
        data-columns={columns}
    >
        {teaserFixtures.map((fixture, index) => (
            <Teaser
                {...fixture}
                href="#"
                key={fixture.headline}
                variant={resolveVariant(variant, index)}
            />
        ))}
    </div>
);

const resolveVariant = (variant: 'standard' | 'side-by-side', index: number): TeaserVariant => {
    if (variant === 'standard') {
        return 'standard';
    }

    return index % 2 === 0 ? 'side-by-side-left' : 'side-by-side-right';
};

function illustrationImage(
    seed: string,
    background: string,
    primary: string,
    secondary: string,
    accent: string,
) {
    const hash = Array.from(seed).reduce((total, character) => total + character.charCodeAt(0), 0);
    const circleX = 270 + (hash % 120);
    const circleY = 230 + (hash % 80);
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 680"><rect width="900" height="680" fill="${background}"/><rect x="150" y="140" width="600" height="400" rx="44" fill="#fffcf8"/><circle cx="${circleX}" cy="${circleY}" r="72" fill="${primary}"/><circle cx="${circleX + 190}" cy="${circleY + 95}" r="92" fill="${secondary}"/><path d="M240 455c120-110 235 82 390-24" stroke="${accent}" stroke-width="38" fill="none" stroke-linecap="round"/></svg>`;

    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
