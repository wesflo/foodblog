import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Checkbox } from './checkbox';

describe('Checkbox', () => {
    it('toggles through its label', async () => {
        const user = userEvent.setup();
        render(<Checkbox label="Accept" />);

        await user.click(screen.getByText('Accept'));

        expect(screen.getByRole('checkbox', { name: 'Accept' })).toBeChecked();
    });
});
