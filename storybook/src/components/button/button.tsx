import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';

import { classNames } from '../../utilities/class-names';
import { SpinnerIcon } from '../../utilities/icons';
import styles from './button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    loading?: boolean;
    leadingIcon?: ReactElement;
    trailingIcon?: ReactElement;
    children: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            variant = 'primary',
            size = 'medium',
            fullWidth = false,
            loading = false,
            disabled = false,
            type = 'button',
            leadingIcon,
            trailingIcon,
            children,
            className,
            ...props
        },
        ref,
    ) => (
        <button
            aria-busy={loading || undefined}
            className={classNames(styles.button, className)}
            data-full-width={fullWidth || undefined}
            data-size={size}
            data-variant={variant}
            disabled={disabled || loading}
            ref={ref}
            type={type}
            {...props}
        >
            {loading ? (
                <>
                    <SpinnerIcon className={styles.spinner} />
                    <span className={styles.srOnly}>Loading</span>
                </>
            ) : (
                leadingIcon
            )}
            <span className={styles.label}>{children}</span>
            {trailingIcon}
        </button>
    ),
);

Button.displayName = 'Button';
