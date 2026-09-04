import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SideBySideHero } from './side-by-side-hero';

describe('SideBySideHero', () => {
    it('renders both supplied content variants and links', () => {
        render(
            <SideBySideHero
                badge={{
                    firstLine: 'Food',
                    separator: '×',
                    secondLine: 'Travel',
                    ariaLabel: 'Food und Travel',
                }}
                items={[
                    {
                        eyebrow: 'Kochen',
                        headline: 'Mit Liebe gekocht.',
                        description: 'Rezepte für jeden Tag.',
                        image: { src: 'https://picsum.photos/seed/test-cooking/800/600', alt: '' },
                        href: '/recipes',
                        linkLabel: 'Zu den Rezepten',
                    },
                    {
                        eyebrow: 'Unterwegs',
                        headline: 'Die Welt entdecken.',
                        description: 'Geschichten für unterwegs.',
                        image: { src: 'https://picsum.photos/seed/test-travel/800/600', alt: '' },
                        href: '/travel',
                        linkLabel: 'Zu den Reisezielen',
                    },
                ]}
            />,
        );

        expect(screen.getByRole('heading', { name: 'Mit Liebe gekocht.' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Die Welt entdecken.' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Zu den Rezepten' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Zu den Reisezielen' })).toBeInTheDocument();
        expect(screen.getByRole('img', { name: 'Food und Travel' })).toBeInTheDocument();
    });
});
