import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Input } from './input';

const field = (container: HTMLElement) => container.firstElementChild;

describe('Input', () => {
    it('associates label and input', () => {
        render(<Input label="Email" />);

        expect(screen.getByLabelText('Email')).toBeInTheDocument();
    });

    it('does not float an empty label by default', () => {
        const { container } = render(<Input label="Name" />);

        expect(field(container)).toHaveAttribute('data-floating', 'false');
        expect(field(container)).toHaveAttribute('data-filled', 'false');
    });

    it('floats the label while focused', async () => {
        const user = userEvent.setup();
        const { container } = render(<Input label="Name" />);

        await user.click(screen.getByLabelText('Name'));

        expect(screen.getByLabelText('Name')).toHaveFocus();
        expect(field(container)).toHaveAttribute('data-floating', 'true');
        expect(field(container)).toHaveAttribute('data-focused', 'true');
    });

    it('keeps the label floated after text entry and blur', async () => {
        const user = userEvent.setup();
        const { container } = render(<Input label="Email" />);

        await user.type(screen.getByLabelText('Email'), 'hello@example.com');
        await user.tab();

        expect(field(container)).toHaveAttribute('data-floating', 'true');
        expect(field(container)).toHaveAttribute('data-filled', 'true');
    });

    it('returns the label when the value is cleared', async () => {
        const user = userEvent.setup();
        const { container } = render(<Input label="Email" />);

        const input = screen.getByLabelText('Email');
        await user.type(input, 'hello@example.com');
        await user.clear(input);
        await user.tab();

        expect(field(container)).toHaveAttribute('data-floating', 'false');
        expect(field(container)).toHaveAttribute('data-filled', 'false');
    });

    it('floats the label when a placeholder is visible', () => {
        const { container } = render(<Input label="Search" placeholder="Search recipes" />);

        expect(field(container)).toHaveAttribute('data-floating', 'true');
        expect(field(container)).toHaveAttribute('data-placeholder', 'true');
    });

    it('marks the field as filled when a default value is present', () => {
        const { container } = render(<Input defaultValue="hello@example.com" label="Email" />);

        expect(field(container)).toHaveAttribute('data-filled', 'true');
        expect(field(container)).toHaveAttribute('data-floating', 'true');
    });

    it('updates floating state when controlled value changes', () => {
        const { container, rerender } = render(
            <Input label="Email" onChange={() => {}} value="" />,
        );

        expect(field(container)).toHaveAttribute('data-floating', 'false');

        rerender(<Input label="Email" onChange={() => {}} value="hello@example.com" />);

        expect(field(container)).toHaveAttribute('data-floating', 'true');
        expect(field(container)).toHaveAttribute('data-filled', 'true');
    });

    it('associates error message and invalid state', () => {
        render(<Input label="Email" message="Invalid email." status="error" />);

        const input = screen.getByLabelText('Email');
        expect(input).toHaveAttribute('aria-invalid', 'true');
        expect(input).toHaveAccessibleDescription('Invalid email.');
    });

    it('behaves as disabled', () => {
        render(<Input disabled label="Email" />);

        expect(screen.getByLabelText('Email')).toBeDisabled();
    });
});
