import { forwardRef, useId } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import { Check, iconDefaults } from '@wesflo/ui/icons';

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
                    <Check {...iconDefaults} className={styles.check} size={14} />
                </span>
                <span>{label}</span>
            </label>
        );
    },
);

Checkbox.displayName = 'Checkbox';
