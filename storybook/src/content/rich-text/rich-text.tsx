import type { HTMLAttributes, ReactNode } from 'react';

import { classNames } from '../../utilities/class-names';
import styles from './rich-text.module.css';

export type RichTextProps = HTMLAttributes<HTMLDivElement> & {
    columns?: boolean;
    children: ReactNode;
};

export const RichText = ({ columns = false, className, children, ...props }: RichTextProps) => (
    <div className={classNames(styles.richText, columns && styles.columns, className)} {...props}>
        {children}
    </div>
);
