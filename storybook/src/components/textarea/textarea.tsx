import { forwardRef, useId } from 'react';
import type { TextareaHTMLAttributes } from 'react';

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
            ...props
        },
        ref,
    ) => {
        const generatedId = useId();
        const textareaId = id ?? generatedId;
        const descriptionId = description ? `${textareaId}-description` : undefined;
        const messageId = message ? `${textareaId}-message` : undefined;
        const describedBy = [descriptionId, messageId].filter(Boolean).join(' ') || undefined;

        return (
            <div
                className={classNames(styles.field, className)}
                data-disabled={disabled || undefined}
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
                        disabled={disabled}
                        id={textareaId}
                        ref={ref}
                        required={required}
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
