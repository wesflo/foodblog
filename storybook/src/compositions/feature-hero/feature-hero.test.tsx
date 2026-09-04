import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { FeatureHero } from './feature-hero';

const baseProps = {
    eyebrow: 'Reise für dich',
    headline: 'Zwischen Markt und Meer',
    description: 'Eine Reisebeschreibung.',
    image: { src: 'https://picsum.photos/seed/test-feature/800/600', alt: 'Reise.' },
    href: '/travel',
    linkLabel: 'Zur Reise',
    meta: [{ kind: 'time' as const, value: '3 Tage', label: 'Dauer' }],
};

describe('FeatureHero', () => {
    it('renders recipe metadata', () => {
        render(<FeatureHero {...baseProps} variant="recipe" />);

        expect(screen.getByText('3 Tage')).toBeInTheDocument();
    });

    it('does not render metadata for the travel variant', () => {
        render(<FeatureHero {...baseProps} variant="travel" />);

        expect(screen.queryByText('3 Tage')).not.toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Zur Reise' })).toBeInTheDocument();
    });
});
