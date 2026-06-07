import { useId } from 'react';
import type { InputHTMLAttributes } from 'react';

import styles from './input-field.module.css';

export type InputFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'aria-describedby'> & {
    label: string;
    description?: string;
    error?: string;
};

export const InputField = ({
    label,
    description,
    error,
    id,
    required = false,
    disabled = false,
    ...props
}: InputFieldProps) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const descriptionId = description ? `${inputId}-description` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;
    const describedBy = [descriptionId, errorId].filter(Boolean).join(' ') || undefined;

    return (
        <div
            className={styles.field}
            data-disabled={disabled || undefined}
            data-invalid={Boolean(error) || undefined}
        >
            <label className={styles.label} htmlFor={inputId}>
                {label}
                {required ? <span aria-hidden="true"> *</span> : null}
            </label>
            {description ? (
                <p className={styles.description} id={descriptionId}>
                    {description}
                </p>
            ) : null}
            <input
                aria-describedby={describedBy}
                aria-invalid={Boolean(error) || undefined}
                className={styles.input}
                disabled={disabled}
                id={inputId}
                required={required}
                {...props}
            />
            {error ? (
                <p className={styles.error} id={errorId} role="alert">
                    {error}
                </p>
            ) : null}
        </div>
    );
};
