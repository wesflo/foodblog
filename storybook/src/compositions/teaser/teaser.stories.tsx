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
            src: picsumImage('teaser-pasta'),
            alt: 'Placeholder image for fresh pasta with peas and lemon.',
        },
    },
    {
        eyebrow: 'Market guide',
        headline: 'How to shop when the week is already full',
        description:
            'A practical note on buying flexible ingredients that work across several simple dinners.',
        image: {
            src: picsumImage('teaser-market'),
            sources: [
                {
                    media: '(min-width: 800px)',
                    srcSet: picsumImage('teaser-market-wide', 1200, 800),
                },
            ],
            alt: 'Placeholder image for a market guide.',
        },
    },
    {
        eyebrow: 'Kitchen note',
        headline: 'A quieter way to plan dinner',
        description:
            'Keep a short list, leave space for leftovers, and let one good sauce carry the week.',
        image: {
            src: picsumImage('teaser-kitchen'),
            sources: [
                {
                    media: '(min-width: 800px)',
                    srcSet: picsumImage('teaser-kitchen-wide', 1200, 800),
                },
            ],
            alt: 'Placeholder image for a kitchen note.',
        },
    },
    {
        eyebrow: 'Seasonal',
        headline: 'Tomatoes, oil, bread, and nothing complicated',
        description:
            'A warm-weather idea for days when dinner should be generous but almost effortless.',
        image: {
            src: picsumImage('teaser-tomatoes'),
            alt: 'Placeholder image for a seasonal recipe.',
        },
    },
    {
        eyebrow: 'Technique',
        headline: 'The small pan sauce that saves dinner',
        description:
            'A simple method for building flavor from garlic, pasta water, herbs, and a little patience.',
        image: {
            src: picsumImage('teaser-sauce'),
            alt: 'Placeholder image for a pan sauce technique.',
        },
    },
    {
        eyebrow: 'Weekend',
        headline: 'Roasted vegetables for more than one meal',
        description: longDescription,
        image: {
            src: picsumImage('teaser-roasted-vegetables'),
            sources: [
                {
                    media: '(min-width: 800px)',
                    srcSet: picsumImage('teaser-roasted-vegetables-wide', 1200, 800),
                },
            ],
            alt: 'Placeholder image for roasted vegetables.',
        },
    },
    {
        eyebrow: 'Pantry',
        headline: 'Beans, herbs, and a clean bowl',
        description:
            'A pantry-first dinner that becomes brighter with lemon, parsley, and good olive oil.',
        image: {
            src: picsumImage('teaser-beans'),
            alt: 'Placeholder image for beans and herbs.',
        },
    },
    {
        eyebrow: 'Quick lunch',
        headline: 'A salad that still feels like a meal',
        description:
            'Crisp leaves, warm grains, and a sharp dressing make this more than a side dish.',
        image: {
            src: picsumImage('teaser-salad'),
            alt: 'Placeholder image for a lunch salad.',
        },
    },
    {
        eyebrow: 'Baking',
        headline: 'Flatbread for the impatient baker',
        description:
            'A forgiving dough for dipping, folding, tearing, and rescuing whatever is left in the fridge.',
        image: {
            src: picsumImage('teaser-flatbread'),
            alt: 'Placeholder image for flatbread.',
        },
    },
    {
        eyebrow: 'Prep',
        headline: 'One pot of rice, three calm dinners',
        description:
            'Cook once, then change the bowl with herbs, crunchy seeds, roasted vegetables, or eggs.',
        image: {
            src: picsumImage('teaser-rice'),
            alt: 'Placeholder image for a rice dish.',
        },
    },
    {
        eyebrow: 'Flavor',
        headline: 'The dressing that makes leftovers useful',
        description:
            'A sharp, salty, slightly sweet dressing can turn yesterday’s vegetables into dinner.',
        image: {
            src: picsumImage('teaser-dressing'),
            alt: 'Placeholder image for a dressing.',
        },
    },
    {
        eyebrow: 'Home cooking',
        headline: 'Soup for a tired evening',
        description:
            'A steady pot with soft vegetables, broth, and enough texture to feel complete.',
        image: {
            src: picsumImage('teaser-soup'),
            alt: 'Placeholder image for soup.',
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

export const SmallHeadlineWithMeta: Story = {
    name: 'Small headline with meta',
    args: {
        headlineSize: 's',
        meta: [
            { label: 'Gesamtzeit', value: '20 Min.' },
            { label: 'Schwierigkeit', value: 'Einfach' },
        ],
    },
    render: ({ description: _description, ...args }) => <Teaser {...args} />,
};

export const MediumHeadline: Story = {
    name: 'Medium headline',
    args: {
        headlineSize: 'm',
    },
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

function picsumImage(seed: string, width = 900, height = 680) {
    return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}
