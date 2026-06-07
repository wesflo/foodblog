import { forwardRef, useId } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';

import styles from './switch.module.css';

export type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
    label: ReactNode;
};

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
    ({ label, id, disabled = false, ...props }, ref) => {
        const generatedId = useId();
        const switchId = id ?? generatedId;

        return (
            <label className={styles.root} data-disabled={disabled || undefined} htmlFor={switchId}>
                <span>{label}</span>
                <span className={styles.track}>
                    <input
                        className={styles.input}
                        disabled={disabled}
                        id={switchId}
                        ref={ref}
                        type="checkbox"
                        {...props}
                    />
                    <span className={styles.thumb} />
                </span>
            </label>
        );
    },
);

Switch.displayName = 'Switch';
