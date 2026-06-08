import { render, screen } from '@testing-library/react';
import { Search, iconDefaults } from '@wesflo/ui/icons';
import { describe, expect, it } from 'vitest';

import { IconButton } from './icon-button';

describe('IconButton', () => {
    it('requires and exposes an accessible name', () => {
        render(<IconButton icon={<Search {...iconDefaults} />} label="Search recipes" />);

        expect(screen.getByRole('button', { name: 'Search recipes' })).toBeInTheDocument();
    });
});
