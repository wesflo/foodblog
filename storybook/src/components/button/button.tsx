import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './button.module.css';

export type ButtonVariant = 'filled' | 'secondary' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 's' | 'm' | 'l';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    fullWidth?: boolean;
    children: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        { variant = 'filled', size = 'm', fullWidth = false, type = 'button', children, ...props },
        ref,
    ) => (
        <button
            className={styles.button}
            data-full-width={fullWidth || undefined}
            data-size={size}
            data-variant={variant}
            ref={ref}
            type={type}
            {...props}
        >
            {children}
        </button>
    ),
);

Button.displayName = 'Button';
