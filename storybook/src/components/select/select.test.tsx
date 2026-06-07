import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Select } from './select';

const options = [
    { value: 'pasta', label: 'Pasta' },
    { value: 'salad', label: 'Salat' },
];

const field = (container: HTMLElement) => container.firstElementChild;

describe('Select', () => {
    it('does not float an empty label by default', () => {
        const { container } = render(<Select label="Kategorie" options={options} />);

        expect(screen.getByLabelText('Kategorie')).toBeInTheDocument();
        expect(field(container)).toHaveAttribute('data-floating', 'false');
    });

    it('floats while focused', async () => {
        const user = userEvent.setup();
        const { container } = render(<Select label="Kategorie" options={options} />);

        await user.click(screen.getByLabelText('Kategorie'));

        expect(field(container)).toHaveAttribute('data-floating', 'true');
    });

    it('stays floated when a default value is present', () => {
        const { container } = render(
            <Select defaultValue="pasta" label="Kategorie" options={options} />,
        );

        expect(field(container)).toHaveAttribute('data-floating', 'true');
    });

    it('updates floating state when controlled value changes', () => {
        const { container, rerender } = render(
            <Select label="Kategorie" onChange={() => {}} options={options} value="" />,
        );

        expect(field(container)).toHaveAttribute('data-floating', 'false');

        rerender(<Select label="Kategorie" onChange={() => {}} options={options} value="pasta" />);

        expect(field(container)).toHaveAttribute('data-floating', 'true');
    });
});
