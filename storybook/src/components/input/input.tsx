import { forwardRef, useEffect, useId, useState } from 'react';
import type { FocusEvent, InputHTMLAttributes, ReactElement } from 'react';

import { classNames } from '../../utilities/class-names';
import type { FieldStatus } from '../field/field';
import styles from './input.module.css';

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
    label: string;
    description?: string;
    message?: string;
    status?: FieldStatus;
    leadingIcon?: ReactElement;
    trailingAction?: ReactElement;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            description,
            message,
            status = 'default',
            leadingIcon,
            trailingAction,
            id,
            disabled = false,
            required = false,
            value,
            defaultValue,
            className,
            onBlur,
            onChange,
            onFocus,
            onInput,
            placeholder,
            ...props
        },
        ref,
    ) => {
        const generatedId = useId();
        const inputId = id ?? generatedId;
        const descriptionId = description ? `${inputId}-description` : undefined;
        const messageId = message ? `${inputId}-message` : undefined;
        const describedBy = [descriptionId, messageId].filter(Boolean).join(' ') || undefined;
        const [focused, setFocused] = useState(false);
        const [hasValue, setHasValue] = useState(
            value !== undefined
                ? String(value).length > 0
                : defaultValue !== undefined && String(defaultValue).length > 0,
        );
        const hasVisiblePlaceholder = Boolean(placeholder);
        const floating = focused || hasValue || hasVisiblePlaceholder;

        useEffect(() => {
            if (value !== undefined) {
                setHasValue(String(value).length > 0);
            }
        }, [value]);

        const syncValueState = (element: HTMLInputElement) => {
            setHasValue(element.value.length > 0);
        };

        return (
            <div
                className={classNames(styles.field, className)}
                data-disabled={disabled || undefined}
                data-filled={String(hasValue)}
                data-floating={String(floating)}
                data-focused={String(focused)}
                data-placeholder={String(hasVisiblePlaceholder)}
                data-status={status}
            >
                <div className={styles.control}>
                    {leadingIcon ? <span className={styles.icon}>{leadingIcon}</span> : null}
                    <input
                        aria-describedby={describedBy}
                        aria-invalid={status === 'error' || undefined}
                        className={styles.input}
                        defaultValue={defaultValue}
                        disabled={disabled}
                        id={inputId}
                        onBlur={(event: FocusEvent<HTMLInputElement>) => {
                            setFocused(false);
                            syncValueState(event.currentTarget);
                            onBlur?.(event);
                        }}
                        onChange={onChange}
                        onFocus={(event: FocusEvent<HTMLInputElement>) => {
                            setFocused(true);
                            onFocus?.(event);
                        }}
                        onInput={(event) => {
                            syncValueState(event.currentTarget);
                            onInput?.(event);
                        }}
                        placeholder={placeholder}
                        ref={ref}
                        required={required}
                        value={value}
                        {...props}
                    />
                    <label className={styles.label} htmlFor={inputId}>
                        {label}
                        {required ? <span aria-hidden="true"> *</span> : null}
                    </label>
                    {trailingAction ? (
                        <span className={styles.action}>{trailingAction}</span>
                    ) : null}
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

Input.displayName = 'Input';
