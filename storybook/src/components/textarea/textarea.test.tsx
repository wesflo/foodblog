import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Textarea } from './textarea';

const field = (container: HTMLElement) => container.firstElementChild;

describe('Textarea', () => {
    it('does not float an empty label by default', () => {
        const { container } = render(<Textarea label="Message" />);

        expect(screen.getByLabelText('Message')).toBeInTheDocument();
        expect(field(container)).toHaveAttribute('data-floating', 'false');
    });

    it('floats while focused', async () => {
        const user = userEvent.setup();
        const { container } = render(<Textarea label="Message" />);

        await user.click(screen.getByLabelText('Message'));

        expect(field(container)).toHaveAttribute('data-floating', 'true');
    });

    it('stays floated when content is present', async () => {
        const user = userEvent.setup();
        const { container } = render(<Textarea label="Message" />);

        await user.type(screen.getByLabelText('Message'), 'I cooked this yesterday.');
        await user.tab();

        expect(field(container)).toHaveAttribute('data-floating', 'true');
    });

    it('updates floating state when controlled value changes', () => {
        const { container, rerender } = render(
            <Textarea label="Message" onChange={() => {}} value="" />,
        );

        expect(field(container)).toHaveAttribute('data-floating', 'false');

        rerender(<Textarea label="Message" onChange={() => {}} value="I cooked this yesterday." />);

        expect(field(container)).toHaveAttribute('data-floating', 'true');
    });
});
