import { forwardRef, useId } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';

import { CheckIcon } from '../../utilities/icons';
import styles from './checkbox.module.css';

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    label: ReactNode;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ label, id, disabled = false, ...props }, ref) => {
        const generatedId = useId();
        const checkboxId = id ?? generatedId;

        return (
            <label
                className={styles.root}
                data-disabled={disabled || undefined}
                htmlFor={checkboxId}
            >
                <span className={styles.box}>
                    <input
                        className={styles.input}
                        disabled={disabled}
                        id={checkboxId}
                        ref={ref}
                        type="checkbox"
                        {...props}
                    />
                    <CheckIcon className={styles.check} />
                </span>
                <span>{label}</span>
            </label>
        );
    },
);

Checkbox.displayName = 'Checkbox';
