import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Breadcrumb } from './breadcrumb';

describe('Breadcrumb', () => {
    it('links parent items and marks the final item as the current page', () => {
        render(
            <Breadcrumb
                ariaLabel="Brotkrümelnavigation"
                items={[
                    { label: 'Rezepte', href: '/recipes' },
                    { label: 'Pasta', href: '/recipes/pasta' },
                    { label: 'Pilz-Pasta' },
                ]}
            />,
        );

        expect(screen.getByRole('navigation', { name: 'Brotkrümelnavigation' })).toBeVisible();
        expect(screen.getByRole('link', { name: 'Rezepte' })).toHaveAttribute('href', '/recipes');
        expect(screen.getByText('Pilz-Pasta')).toHaveAttribute('aria-current', 'page');
    });
});
