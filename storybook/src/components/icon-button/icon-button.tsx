import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactElement } from 'react';

import { classNames } from '../../utilities/class-names';
import styles from './icon-button.module.css';

export type IconButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
export type IconButtonSize = 'small' | 'medium' | 'large';

export type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
    label: string;
    icon: ReactElement;
    variant?: IconButtonVariant;
    size?: IconButtonSize;
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    (
        {
            label,
            icon,
            variant = 'secondary',
            size = 'medium',
            className,
            type = 'button',
            ...props
        },
        ref,
    ) => (
        <button
            aria-label={label}
            className={classNames(styles.button, className)}
            data-size={size}
            data-variant={variant}
            ref={ref}
            type={type}
            {...props}
        >
            {icon}
        </button>
    ),
);

IconButton.displayName = 'IconButton';
