import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Teaser } from './teaser';

describe('Teaser', () => {
    it('renders the configured headline size and metadata', () => {
        render(
            <Teaser
                headline="Pasta mit Kräutern"
                headlineSize="s"
                href="/recipes/pasta"
                image={{
                    src: 'https://picsum.photos/seed/teaser-test/800/600',
                    alt: 'Pasta.',
                }}
                meta={[
                    { label: 'Gesamtzeit', value: '20 Min.' },
                    { label: 'Schwierigkeit', value: 'Einfach' },
                ]}
            />,
        );

        expect(screen.getByRole('heading', { name: 'Pasta mit Kräutern' })).toHaveAttribute(
            'data-size',
            's',
        );
        expect(screen.getByText('20 Min.')).toBeInTheDocument();
        expect(screen.getByText('Einfach')).toBeInTheDocument();
        expect(screen.getByText('Gesamtzeit').tagName).toBe('DT');
    });
});
