import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Tabs } from './tabs';

const items = [
    { value: 'description', label: 'Beschreibung', content: 'Beschreibungstext' },
    { value: 'ingredients', label: 'Zutaten', content: 'Zutatenliste' },
    { value: 'notes', label: 'Notizen', content: 'Private Notizen', disabled: true },
];

describe('Tabs', () => {
    it('selects the first tab by default', () => {
        render(<Tabs items={items} />);

        expect(screen.getByRole('tab', { name: 'Beschreibung' })).toHaveAttribute(
            'aria-selected',
            'true',
        );
        expect(screen.getByText('Beschreibungstext')).toBeVisible();
    });

    it('changes the active tab on click', async () => {
        const user = userEvent.setup();
        render(<Tabs items={items} />);

        await user.click(screen.getByRole('tab', { name: 'Zutaten' }));

        expect(screen.getByRole('tab', { name: 'Zutaten' })).toHaveAttribute(
            'aria-selected',
            'true',
        );
        expect(screen.getByText('Zutatenliste')).toBeVisible();
    });

    it('uses the configured default tab', () => {
        render(<Tabs defaultValue="ingredients" items={items} />);

        expect(screen.getByRole('tab', { name: 'Zutaten' })).toHaveAttribute(
            'aria-selected',
            'true',
        );
    });

    it('does not select disabled tabs', async () => {
        const user = userEvent.setup();
        render(<Tabs items={items} />);

        await user.click(screen.getByRole('tab', { name: 'Notizen' }));

        expect(screen.getByRole('tab', { name: 'Notizen' })).toHaveAttribute(
            'aria-disabled',
            'true',
        );
        expect(screen.getByRole('tab', { name: 'Beschreibung' })).toHaveAttribute(
            'aria-selected',
            'true',
        );
    });
});
