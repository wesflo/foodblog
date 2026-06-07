import { forwardRef, useEffect, useId, useState } from 'react';
import type { FocusEvent, TextareaHTMLAttributes } from 'react';

import { classNames } from '../../utilities/class-names';
import type { FieldStatus } from '../field/field';
import styles from './textarea.module.css';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label: string;
    description?: string;
    message?: string;
    status?: FieldStatus;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        {
            label,
            description,
            message,
            status = 'default',
            id,
            disabled = false,
            required = false,
            className,
            value,
            defaultValue,
            placeholder,
            onBlur,
            onFocus,
            onInput,
            ...props
        },
        ref,
    ) => {
        const generatedId = useId();
        const textareaId = id ?? generatedId;
        const descriptionId = description ? `${textareaId}-description` : undefined;
        const messageId = message ? `${textareaId}-message` : undefined;
        const describedBy = [descriptionId, messageId].filter(Boolean).join(' ') || undefined;
        const [focused, setFocused] = useState(false);
        const [hasValue, setHasValue] = useState(
            value !== undefined
                ? String(value).length > 0
                : defaultValue !== undefined && String(defaultValue).length > 0,
        );
        const floating = focused || hasValue || Boolean(placeholder);

        useEffect(() => {
            if (value !== undefined) {
                setHasValue(String(value).length > 0);
            }
        }, [value]);

        return (
            <div
                className={classNames(styles.field, className)}
                data-disabled={disabled || undefined}
                data-floating={String(floating)}
                data-status={status}
            >
                <div className={styles.control}>
                    <label className={styles.label} htmlFor={textareaId}>
                        {label}
                        {required ? <span aria-hidden="true"> *</span> : null}
                    </label>
                    <textarea
                        aria-describedby={describedBy}
                        aria-invalid={status === 'error' || undefined}
                        className={styles.textarea}
                        defaultValue={defaultValue}
                        disabled={disabled}
                        id={textareaId}
                        onBlur={(event: FocusEvent<HTMLTextAreaElement>) => {
                            setFocused(false);
                            setHasValue(event.currentTarget.value.length > 0);
                            onBlur?.(event);
                        }}
                        onFocus={(event: FocusEvent<HTMLTextAreaElement>) => {
                            setFocused(true);
                            onFocus?.(event);
                        }}
                        onInput={(event) => {
                            setHasValue(event.currentTarget.value.length > 0);
                            onInput?.(event);
                        }}
                        placeholder={placeholder}
                        ref={ref}
                        required={required}
                        value={value}
                        {...props}
                    />
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

Textarea.displayName = 'Textarea';
