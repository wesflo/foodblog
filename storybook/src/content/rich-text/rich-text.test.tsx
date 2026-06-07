import { readFileSync } from 'node:fs';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { RichText } from './rich-text';

describe('RichText', () => {
    it('renders semantic content inside the multi-column container', () => {
        const { container } = render(
            <RichText columns>
                <h2>Der Wochenflow</h2>
                <p>Kochen ist Alltag.</p>
                <ul>
                    <li>Frische Zutaten</li>
                </ul>
            </RichText>,
        );

        expect(container.firstElementChild?.className).toContain('columns');
        expect(screen.getByRole('heading', { name: 'Der Wochenflow' })).toBeInTheDocument();
        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getByText('Frische Zutaten')).toBeInTheDocument();
    });

    it('keeps content blocks protected from column breaks', () => {
        const css = readFileSync('src/content/rich-text/rich-text.module.css', 'utf8');

        expect(css).toContain('break-inside: avoid');
        expect(css).toContain('.richText ul,');
        expect(css).toContain('.richText ol,');
        expect(css).toContain('.richText table,');
        expect(css).toContain('.richText figure');
    });
});
