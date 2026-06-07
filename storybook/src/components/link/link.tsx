import type { AnchorHTMLAttributes, ReactNode } from 'react';

import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon } from '../../utilities/icons';
import styles from './link.module.css';

export type LinkVariant = 'inline' | 'text' | 'arrow' | 'external' | 'back' | 'muted';

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: LinkVariant;
    disabled?: boolean;
    children: ReactNode;
};

export const Link = ({ variant = 'inline', disabled = false, children, ...props }: LinkProps) => {
    if (disabled) {
        return (
            <span
                aria-disabled="true"
                className={styles.link}
                data-disabled="true"
                data-variant={variant}
            >
                {children}
                {variant === 'arrow' ? <ArrowRightIcon /> : null}
            </span>
        );
    }

    return (
        <a className={styles.link} data-variant={variant} {...props}>
            {variant === 'back' ? <ArrowLeftIcon /> : null}
            <span>{children}</span>
            {variant === 'arrow' ? <ArrowRightIcon /> : null}
            {variant === 'external' ? <ExternalLinkIcon /> : null}
        </a>
    );
};
