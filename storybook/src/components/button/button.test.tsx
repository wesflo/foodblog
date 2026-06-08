import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Search, iconDefaults } from '@wesflo/ui/icons';
import { describe, expect, it } from 'vitest';

import { Button } from './button';

describe('Button', () => {
    it('renders as a button', () => {
        render(<Button>Save</Button>);

        expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
    });

    it('prevents activation when disabled', () => {
        let count = 0;
        render(
            <Button disabled onClick={() => count++}>
                Save
            </Button>,
        );

        fireEvent.click(screen.getByRole('button', { name: 'Save' }));

        expect(count).toBe(0);
    });

    it('announces loading state', () => {
        render(<Button loading>Save</Button>);

        expect(screen.getByRole('button', { name: /save/i })).toHaveAttribute('aria-busy', 'true');
        expect(screen.getByText('Loading')).toBeInTheDocument();
    });

    it('supports icon content without losing its accessible name', () => {
        render(
            <Button>
                <Search {...iconDefaults} size={16} />
                Search
            </Button>,
        );

        expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument();
    });

    it('can receive keyboard focus', async () => {
        const user = userEvent.setup();
        render(<Button>Focus me</Button>);

        await user.tab();

        expect(screen.getByRole('button', { name: 'Focus me' })).toHaveFocus();
    });
});
