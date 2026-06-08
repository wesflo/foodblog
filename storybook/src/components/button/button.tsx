import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { LoaderCircle, iconDefaults } from '@wesflo/ui/icons';

import { classNames } from '../../utilities/class-names';
import styles from './button.module.css';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link' | 'destructive';
export type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    loading?: boolean;
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
                    <LoaderCircle {...iconDefaults} className={styles.spinner} size={16} />
                    <span className={styles.srOnly}>Loading</span>
                </>
            ) : null}
            {children}
        </button>
    ),
);

Button.displayName = 'Button';
