import type { ButtonHTMLAttributes, ReactElement } from 'react';

import { Button } from '../button/button';
import type { ButtonSize, ButtonVariant } from '../button/button';

export type IconButtonVariant = Extract<ButtonVariant, 'secondary' | 'outline' | 'ghost'>;
export type IconButtonSize = Extract<ButtonSize, 'small' | 'medium' | 'large'>;

export type IconButtonProps = Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'aria-label' | 'children' | 'title'
> & {
    icon: ReactElement;
    label: string;
    size?: IconButtonSize;
    variant?: IconButtonVariant;
};

export const IconButton = ({
    icon,
    label,
    size = 'medium',
    variant = 'secondary',
    ...props
}: IconButtonProps) => (
    <Button aria-label={label} iconOnly size={size} title={label} variant={variant} {...props}>
        {icon}
    </Button>
);
