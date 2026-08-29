import { ChevronRight, iconDefaults } from '@wesflo/ui/icons';

import { Link } from '../link/link';
import styles from './breadcrumb.module.css';

export type BreadcrumbItem = {
    label: string;
    href?: string;
};

export type BreadcrumbProps = {
    items: BreadcrumbItem[];
    ariaLabel?: string;
};

export const Breadcrumb = ({ items, ariaLabel = 'Breadcrumb' }: BreadcrumbProps) => (
    <nav aria-label={ariaLabel} className={styles.breadcrumb}>
        <ol className={styles.list}>
            {items.map((item, index) => {
                const isCurrent = index === items.length - 1;

                return (
                    <li className={styles.item} key={`${item.label}-${index}`}>
                        {index > 0 ? (
                            <ChevronRight
                                {...iconDefaults}
                                className={styles.separator}
                                size={14}
                            />
                        ) : null}
                        {item.href && !isCurrent ? (
                            <Link href={item.href} variant="muted">
                                {item.label}
                            </Link>
                        ) : (
                            <span aria-current={isCurrent ? 'page' : undefined}>{item.label}</span>
                        )}
                    </li>
                );
            })}
        </ol>
    </nav>
);
