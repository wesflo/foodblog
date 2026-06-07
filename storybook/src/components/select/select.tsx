import { forwardRef, useId } from 'react';
import type { SelectHTMLAttributes } from 'react';

import { ChevronDownIcon } from '../../utilities/icons';
import type { FieldStatus } from '../field/field';
import styles from './select.module.css';

export type SelectOption = {
    value: string;
    label: string;
};

export type SelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'children'> & {
    label: string;
    options: SelectOption[];
    description?: string;
    message?: string;
    status?: FieldStatus;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    (
        {
            label,
            options,
            description,
            message,
            status = 'default',
            id,
            disabled = false,
            required = false,
            ...props
        },
        ref,
    ) => {
        const generatedId = useId();
        const selectId = id ?? generatedId;
        const descriptionId = description ? `${selectId}-description` : undefined;
        const messageId = message ? `${selectId}-message` : undefined;
        const describedBy = [descriptionId, messageId].filter(Boolean).join(' ') || undefined;

        return (
            <div
                className={styles.field}
                data-disabled={disabled || undefined}
                data-status={status}
            >
                <div className={styles.control}>
                    <label className={styles.label} htmlFor={selectId}>
                        {label}
                        {required ? <span aria-hidden="true"> *</span> : null}
                    </label>
                    <select
                        aria-describedby={describedBy}
                        aria-invalid={status === 'error' || undefined}
                        className={styles.select}
                        disabled={disabled}
                        id={selectId}
                        ref={ref}
                        required={required}
                        {...props}
                    >
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    <ChevronDownIcon className={styles.chevron} />
                </div>
                {description ? (
                    <p className={styles.description} id={descriptionId}>
                        {description}
                    </p>
                ) : null}
                {message ? (
                    <p
                        className={styles.message}
                        id={messageId}
                        role={status === 'error' ? 'alert' : undefined}
                    >
                        {message}
                    </p>
                ) : null}
            </div>
        );
    },
);

Select.displayName = 'Select';
