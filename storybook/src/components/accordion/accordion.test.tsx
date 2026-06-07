import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Accordion } from './accordion';

const items = [
    { title: 'Was ist der Wochenflow?', content: 'Ein ruhiger Plan fuer die Woche.' },
    { title: 'Kann ich Rezepte speichern?', content: 'Ja, du kannst Rezepte vormerken.' },
    { title: 'Ist das deaktiviert?', content: 'Dieser Inhalt bleibt geschlossen.', disabled: true },
];

describe('Accordion', () => {
    it('expands and collapses content from the trigger', async () => {
        const user = userEvent.setup();
        render(<Accordion items={items} />);

        const trigger = screen.getByRole('button', { name: /wochenflow/i });
        await user.click(trigger);

        expect(trigger).toHaveAttribute('aria-expanded', 'true');
        expect(screen.getByText('Ein ruhiger Plan fuer die Woche.')).toBeVisible();

        await user.click(trigger);

        expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });

    it('opens the configured default item', () => {
        render(<Accordion defaultValue={['1']} items={items} />);

        expect(screen.getByRole('button', { name: /rezepte speichern/i })).toHaveAttribute(
            'aria-expanded',
            'true',
        );
        expect(screen.getByText('Ja, du kannst Rezepte vormerken.')).toBeVisible();
    });

    it('toggles from the keyboard', async () => {
        const user = userEvent.setup();
        render(<Accordion items={items} />);

        const trigger = screen.getByRole('button', { name: /wochenflow/i });
        trigger.focus();
        await user.keyboard('{Enter}');

        expect(trigger).toHaveAttribute('aria-expanded', 'true');

        await user.keyboard(' ');

        expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });

    it('does not open disabled items', async () => {
        const user = userEvent.setup();
        render(<Accordion items={items} />);

        const trigger = screen.getByRole('button', { name: /deaktiviert/i });
        await user.click(trigger);

        expect(trigger).toHaveAttribute('aria-disabled', 'true');
        expect(trigger).toHaveAttribute('aria-expanded', 'false');
    });
});
