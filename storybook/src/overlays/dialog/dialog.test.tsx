import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Button } from '../../components/button/button';
import { ConfirmDialog, Dialog } from './dialog';

describe('Dialog', () => {
    it('opens from trigger and closes with Escape', async () => {
        const user = userEvent.setup();
        render(
            <Dialog title="Details" trigger={<Button>Open</Button>}>
                <p>Dialog content</p>
            </Dialog>,
        );

        const trigger = screen.getByRole('button', { name: 'Open' });
        await user.click(trigger);

        expect(screen.getByRole('dialog', { name: 'Details' })).toBeInTheDocument();

        await user.keyboard('{Escape}');

        expect(screen.queryByRole('dialog', { name: 'Details' })).not.toBeInTheDocument();
        expect(trigger).toHaveFocus();
    });

    it('runs confirm callback', async () => {
        const user = userEvent.setup();
        let confirmed = false;
        render(
            <ConfirmDialog
                description="This cannot be undone."
                onConfirm={() => {
                    confirmed = true;
                }}
                title="Delete recipe?"
                trigger={<Button>Open confirm</Button>}
            />,
        );

        await user.click(screen.getByRole('button', { name: 'Open confirm' }));
        await user.click(screen.getByRole('button', { name: 'Delete' }));

        expect(confirmed).toBe(true);
    });
});
