import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { RecipeDetail, type RecipeDetailProps } from './recipe-detail';

const baseProps: RecipeDetailProps = {
    breadcrumb: [{ label: 'Rezepte', href: '#' }, { label: 'Testrezept' }],
    category: 'Hauptgang',
    title: 'Testrezept',
    description: 'Eine Beschreibung.',
    images: [],
    imageGalleryAriaLabel: 'Rezeptbilder',
    metricsAriaLabel: 'Rezeptübersicht',
    metrics: [{ kind: 'total', label: 'Gesamtzeit', value: '10 Min.' }],
    ingredientsTitle: 'Zutaten',
    ingredientGroups: [{ title: 'Basis', items: [{ amount: '1', name: 'Zutat' }] }],
    preparationTitle: 'Zubereitung',
    stepGroups: [
        {
            title: 'Start',
            steps: [
                { title: 'Erster Schritt', description: 'Die Zutat vorbereiten.' },
                { title: 'Zweiter Schritt', description: 'Die Zutat servieren.' },
            ],
        },
    ],
    aboutTitle: 'Über das Gericht',
    about: { paragraphs: ['Ein kurzer Text.'] },
    tagsTitle: 'Tags',
    tags: [{ label: 'Schnell', href: '#schnell' }],
};

describe('RecipeDetail', () => {
    it('renders no gallery when the recipe has no images', () => {
        render(<RecipeDetail {...baseProps} />);

        expect(screen.queryByRole('group', { name: 'Rezeptbilder' })).not.toBeInTheDocument();
        expect(screen.getByRole('heading', { level: 1, name: 'Testrezept' })).toBeVisible();
    });

    it('renders at most the first three images', () => {
        const images = Array.from({ length: 5 }, (_, index) => ({
            src: `https://picsum.photos/seed/test-${index}/800/600`,
            alt: `Rezeptbild ${index + 1}`,
        }));

        render(<RecipeDetail {...baseProps} images={images} />);

        const gallery = screen.getByRole('group', { name: 'Rezeptbilder' });
        expect(gallery.querySelectorAll('img')).toHaveLength(3);
        expect(screen.queryByAltText('Rezeptbild 4')).not.toBeInTheDocument();
    });

    it('renders CMS-shaped content in the supplied order', () => {
        render(<RecipeDetail {...baseProps} />);

        expect(screen.getByText('01')).toBeVisible();
        expect(screen.getByText('02')).toBeVisible();
        expect(screen.getByRole('link', { name: 'Schnell' })).toHaveAttribute('href', '#schnell');
    });
});
