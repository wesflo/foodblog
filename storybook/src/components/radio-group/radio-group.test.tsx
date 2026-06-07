import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { RadioGroup } from './radio-group';

describe('RadioGroup', () => {
    it('supports single selection', async () => {
        const user = userEvent.setup();
        render(
            <RadioGroup
                label="Diet"
                options={[
                    { value: 'vegetarian', label: 'Vegetarian' },
                    { value: 'vegan', label: 'Vegan' },
                ]}
            />,
        );

        await user.click(screen.getByRole('radio', { name: 'Vegan' }));

        expect(screen.getByRole('radio', { name: 'Vegan' })).toBeChecked();
        expect(screen.getByRole('radio', { name: 'Vegetarian' })).not.toBeChecked();
    });
});
