import { useRef } from 'react';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import {
    Navigation,
    type NavigationPreviewItem,
    type NavigationSection,
    type NavigationTagGroup,
} from './navigation';
import storyStyles from './navigation.stories.module.css';

const meta = {
    title: 'Compositions/Navigation',
    component: Navigation,
    args: {
        sections: createSections(),
    },
    parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
    render: (args) => <NavigationFrame {...args} />,
};

export const MenuOpen: Story = {
    name: 'Menu Open',
    args: {
        defaultView: 'menu',
        defaultSectionId: 'recipes',
    },
    render: (args) => <NavigationFrame {...args} />,
};

export const MenuScrolledContent: Story = {
    name: 'Menu - Scrolled Content',
    args: {
        defaultView: 'menu',
        sections: createMaximumSections(),
    },
    render: (args) => <NavigationFrame {...args} constrainedPanel />,
};

export const SearchOpen: Story = {
    name: 'Search Open',
    args: {
        defaultView: 'search',
    },
    render: (args) => <NavigationFrame {...args} />,
};

export const SearchScrolledContent: Story = {
    name: 'Search - Scrolled Content',
    args: {
        defaultView: 'search',
    },
    render: (args) => <NavigationFrame {...args} constrainedPanel />,
};

export const ScrollLock: Story = {
    name: 'Scroll Lock',
    render: (args) => <NavigationFrame {...args} showScrollContent />,
};

export const MenuRightAlignedContent: Story = {
    name: 'Menu - Right Aligned Content',
    args: {
        defaultView: 'menu',
        defaultSectionId: 'recipes',
        defaultGroupId: 'preparation',
    },
    render: (args) => <NavigationFrame {...args} />,
};

export const MenuMaximumContent: Story = {
    name: 'Menu - Maximum Content',
    args: {
        defaultView: 'menu',
        sections: createMaximumSections(),
    },
    render: (args) => <NavigationFrame {...args} />,
};

export const MenuSparseContent: Story = {
    name: 'Menu - Sparse Content',
    args: {
        defaultView: 'menu',
        sections: createSparseSections(),
    },
    render: (args) => <NavigationFrame {...args} />,
};

export const SearchEmptyResultsArea: Story = {
    name: 'Search - Empty Results Area',
    args: {
        defaultView: 'search',
    },
    render: (args) => <NavigationFrame {...args} />,
};

export const MobileClosed: Story = {
    name: 'Mobile Closed',
    render: (args) => <NavigationFrame {...args} />,
};

export const MobileMenu: Story = {
    args: {
        defaultView: 'menu',
    },
    render: (args) => <NavigationFrame {...args} />,
};

export const MobileSearch: Story = {
    args: {
        defaultView: 'search',
    },
    render: (args) => <NavigationFrame {...args} />,
};

const NavigationFrame = ({
    constrainedPanel = false,
    showScrollContent = false,
    ...args
}: ComponentProps<typeof Navigation> & {
    constrainedPanel?: boolean;
    showScrollContent?: boolean;
}) => {
    const pageContainerRef = useRef<HTMLDivElement>(null);

    return (
        <div className={storyStyles.canvas}>
            <div className={storyStyles.pageShell} ref={pageContainerRef}>
                <div className={storyStyles.pageContent}>
                    <h1>Cooking without a stage.</h1>
                    <p>
                        This composition floats above normal page content. The logo and page
                        structure stay in the application document flow, while Search and Menu
                        remain available in the upper right.
                    </p>
                    {showScrollContent ? <ScrollLockStoryContent /> : null}
                </div>
            </div>
            <Navigation
                {...args}
                pageContainerRef={pageContainerRef}
                {...(constrainedPanel && storyStyles.constrainedNavigation
                    ? { className: storyStyles.constrainedNavigation }
                    : {})}
            />
        </div>
    );
};

const ScrollLockStoryContent = () => (
    <div className={storyStyles.scrollContent}>
        {[
            'Scroll to the middle of this page, then open Menu.',
            'The document scrollbar should stay visible while this text remains fixed in place.',
            'Scroll inside the Navigation panel and switch directly to Search.',
            'Close the panel and confirm this page returns to the same scroll position.',
        ].map((text, index) => (
            <section className={storyStyles.scrollSection} key={text}>
                <p className={storyStyles.scrollMarker}>Step {index + 1}</p>
                <h2>{text}</h2>
                <p>
                    This is static story content used only to make page scroll preservation easy to
                    verify by hand. The Navigation panel remains fixed above it and owns its own
                    internal scroll region.
                </p>
            </section>
        ))}
    </div>
);

function createSections(): NavigationSection[] {
    return [
        {
            id: 'recipes',
            label: 'Recipes',
            href: '#recipes',
            mode: 'navigation',
            featuredItems: previewSet('latest-recipe', 'Recipe', [
                'Fresh pasta with peas',
                'Tomato toast with herbs',
                'Rice bowls for busy nights',
                'Soup for a tired evening',
            ]),
            groups: recipeGroups(),
        },
        {
            id: 'stories',
            label: 'Stories',
            href: '#stories',
            mode: 'teasers',
            teaserLayout: 'small',
            featuredItems: previewSet('latest-story', 'Story', [
                'A slower way to shop',
                'What I keep in the pantry',
                'Notes from a small kitchen',
                'The dinners that repeat',
            ]),
        },
        {
            id: 'about',
            label: 'About',
            href: '#about',
            mode: 'teasers',
            teaserLayout: 'large',
            links: [link('Myself', '#myself'), link('Contact', '#contact')],
            featuredItems: previewSet('about', 'About', [
                'Food without performance',
                'A kitchen built for real days',
            ]),
        },
    ];
}

function createSparseSections(): NavigationSection[] {
    return [
        {
            id: 'about',
            label: 'About',
            href: '#about',
            mode: 'teasers',
            teaserLayout: 'large',
            links: [link('Contact', '#contact')],
            featuredItems: previewSet('sparse-about', 'About', ['A small kitchen note']),
        },
    ];
}

function createMaximumSections(): NavigationSection[] {
    return [
        {
            id: 'recipes',
            label: 'Recipes',
            href: '#recipes',
            mode: 'navigation',
            featuredItems: previewSet('maximum', 'Recipe', [
                'Spring vegetables with lemon',
                'A pantry pasta for late evenings',
                'Crisp salad with warm grains',
                'Roasted roots and herb sauce',
                'Extra item clipped by constraints',
            ]),
            groups: Array.from({ length: 6 }, (_, groupIndex) => ({
                id: `maximum-group-${groupIndex}`,
                label:
                    [
                        'Courses for everyday cooking',
                        'Ingredients worth keeping close',
                        'Preparation styles for busy weeks',
                        'Inspiration for flexible planning',
                        'Hidden overflow group',
                        'Another hidden group',
                    ][groupIndex] ?? `Group ${groupIndex + 1}`,
                links: Array.from({ length: 8 }, (_, linkIndex) =>
                    link(
                        `Long navigation label ${groupIndex + 1}.${linkIndex + 1} for real wrapping behavior`,
                        `#maximum-${groupIndex}-${linkIndex}`,
                    ),
                ),
            })),
        },
    ];
}

function recipeGroups(): NavigationTagGroup[] {
    return [
        {
            id: 'courses',
            label: 'Courses',
            links: [
                link('Weeknight dinners', '#weeknight'),
                link('Lunch ideas', '#lunch'),
                link('Breakfast', '#breakfast'),
                link('Desserts', '#desserts'),
            ],
        },
        {
            id: 'ingredients',
            label: 'Ingredients',
            links: [
                link('Vegetables', '#vegetables'),
                link('Pasta and grains', '#pasta'),
                link('Beans and lentils', '#beans'),
                link('Tomatoes', '#tomatoes'),
            ],
        },
        {
            id: 'preparation',
            label: 'Preparation',
            links: [
                link('Quick recipes', '#quick'),
                link('Batch cooking', '#batch'),
                link('One pan', '#one-pan'),
            ],
        },
        {
            id: 'mood',
            label: 'Mood',
            links: [
                link('Comfort', '#comfort'),
                link('Fresh and light', '#fresh'),
                link('For guests', '#guests'),
            ],
        },
    ];
}

function link(label: string, href: string) {
    return { label, href };
}

function previewSet(seed: string, eyebrow: string, headlines: string[]): NavigationPreviewItem[] {
    return headlines.map((headline, index) => ({
        id: `${seed}-${index}`,
        eyebrow,
        headline,
        description:
            index % 2 === 0
                ? 'Simple, generous cooking for ordinary days.'
                : 'A steady favorite with bright flavor and no fuss.',
        href: `#${seed}-${index}`,
        image: {
            src: imageUrl(`${seed}-${index}`),
            alt: `Placeholder image for ${headline}.`,
            sources: [
                {
                    media: '(min-width: 800px)',
                    srcSet: imageUrl(`${seed}-${index}-wide`, 960, 720),
                },
            ],
        },
    }));
}

function imageUrl(seed: string, width = 640, height = 480) {
    return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}
