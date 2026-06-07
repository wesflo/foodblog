import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { SearchIcon } from '../../utilities/icons';
import { IconButton } from './icon-button';

describe('IconButton', () => {
    it('requires and exposes an accessible name', () => {
        render(<IconButton icon={<SearchIcon />} label="Search recipes" />);

        expect(screen.getByRole('button', { name: 'Search recipes' })).toBeInTheDocument();
    });
});
