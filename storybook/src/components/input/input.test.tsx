import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Input } from './input';

describe('Input', () => {
    it('associates label and input', () => {
        render(<Input label="Email" />);

        expect(screen.getByLabelText('Email')).toBeInTheDocument();
    });

    it('marks the field as filled when a default value is present', () => {
        const { container } = render(<Input defaultValue="hello@example.com" label="Email" />);

        expect(container.firstElementChild).toHaveAttribute('data-filled', 'true');
    });

    it('keeps label association when focused', async () => {
        const user = userEvent.setup();
        render(<Input label="Name" />);

        const input = screen.getByLabelText('Name');
        await user.click(input);

        expect(input).toHaveFocus();
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
