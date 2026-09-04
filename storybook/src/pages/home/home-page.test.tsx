import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { HomePage, type HomePageProps } from './home-page';

const props: HomePageProps = {
    hero: {
        eyebrow: 'Kochen und Reisen',
        headline: 'Was darf es sein?',
        description: 'Eine Beschreibung.',
        collage: { src: '/collage.png', alt: 'Collage.' },
    },
    sideBySideHero: {
        badge: {
            firstLine: 'Food',
            separator: '×',
            secondLine: 'Travel',
            ariaLabel: 'Food und Travel',
        },
        items: [
            {
                eyebrow: 'Kochen',
                headline: 'Rezepte',
                description: 'Rezeptbeschreibung.',
                image: { src: 'https://picsum.photos/seed/home-test-one/800/600', alt: '' },
                href: '/recipes',
                linkLabel: 'Zu den Rezepten',
            },
            {
                eyebrow: 'Reisen',
                headline: 'Reiseziele',
                description: 'Reisebeschreibung.',
                image: { src: 'https://picsum.photos/seed/home-test-two/800/600', alt: '' },
                href: '/travel',
                linkLabel: 'Zu den Reisen',
            },
        ],
    },
    featureHero: {
        variant: 'travel',
        eyebrow: 'Reise',
        headline: 'Lissabon',
        description: 'Reisebeschreibung.',
        image: { src: 'https://picsum.photos/seed/home-test-three/800/600', alt: '' },
        href: '/travel/lisbon',
        linkLabel: 'Zur Reise',
    },
    teaserSections: [],
    about: {
        headline: 'Über mich',
        paragraphs: ['Über Julia.'],
        image: { src: 'https://picsum.photos/seed/home-test-four/800/600', alt: '' },
        href: '/about',
        linkLabel: 'Mehr über mich',
    },
    travelSection: {
        title: 'Unterwegs',
        columns: 2,
        items: [],
    },
};

describe('HomePage', () => {
    it('renders CMS supplied content without a site header', () => {
        render(<HomePage {...props} />);

        expect(screen.getByRole('main')).toBeInTheDocument();
        expect(
            screen.getByRole('heading', { level: 1, name: 'Was darf es sein?' }),
        ).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Über mich' })).toBeInTheDocument();
        expect(screen.queryByRole('banner')).not.toBeInTheDocument();
    });
});
