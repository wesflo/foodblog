import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Accordion } from './accordion';

describe('Accordion', () => {
    it('expands content from the trigger', async () => {
        const user = userEvent.setup();
        render(<Accordion items={[{ title: 'Question', content: 'Answer' }]} />);

        await user.click(screen.getByRole('button', { name: 'Question' }));

        expect(screen.getByText('Answer')).toBeVisible();
        expect(screen.getByRole('button', { name: 'Question' })).toHaveAttribute(
            'aria-expanded',
            'true',
        );
    });
});
