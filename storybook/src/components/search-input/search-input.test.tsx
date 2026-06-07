import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { SearchInput } from './search-input';

const field = (container: HTMLElement) => container.firstElementChild;

describe('SearchInput', () => {
    it('uses the input floating-label behavior for an empty field', () => {
        const { container } = render(<SearchInput label="Search" />);

        expect(screen.getByRole('searchbox', { name: 'Search' })).toBeInTheDocument();
        expect(field(container)).toHaveAttribute('data-floating', 'false');
    });

    it('floats after search text is entered and exposes the clear action', async () => {
        const user = userEvent.setup();
        const { container } = render(<SearchInput label="Search" />);

        await user.type(screen.getByRole('searchbox', { name: 'Search' }), 'pasta');

        expect(field(container)).toHaveAttribute('data-floating', 'true');
        expect(screen.getByRole('button', { name: 'Clear search' })).toBeInTheDocument();
    });

    it('returns the label after clearing an uncontrolled search', async () => {
        const user = userEvent.setup();
        const { container } = render(<SearchInput label="Search" defaultValue="pasta" />);

        await user.click(screen.getByRole('button', { name: 'Clear search' }));

        expect(field(container)).toHaveAttribute('data-floating', 'false');
    });
});
