import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Switch } from './switch';

describe('Switch', () => {
    it('toggles through its label', async () => {
        const user = userEvent.setup();
        render(<Switch label="Enable" />);

        await user.click(screen.getByText('Enable'));

        expect(screen.getByRole('checkbox', { name: 'Enable' })).toBeChecked();
    });
});
