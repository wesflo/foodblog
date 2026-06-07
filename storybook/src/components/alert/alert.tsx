import type { ReactNode } from 'react';

import { CheckIcon, CloseIcon, InfoIcon, WarningIcon } from '../../utilities/icons';
import styles from './alert.module.css';

export type FeedbackStatus = 'information' | 'success' | 'warning' | 'error';

export type AlertProps = {
    status?: FeedbackStatus;
    title: string;
    description?: ReactNode;
    dismissible?: boolean;
};

const icons = {
    information: InfoIcon,
    success: CheckIcon,
    warning: WarningIcon,
    error: WarningIcon,
};

export const Alert = ({
    status = 'information',
    title,
    description,
    dismissible = false,
}: AlertProps) => {
    const StatusIcon = icons[status];

    return (
        <div
            className={styles.alert}
            data-status={status}
            role={status === 'error' ? 'alert' : 'status'}
        >
            <StatusIcon className={styles.icon} />
            <div className={styles.body}>
                <p className={styles.title}>{title}</p>
                {description ? <p className={styles.description}>{description}</p> : null}
            </div>
            {dismissible ? (
                <button aria-label="Dismiss alert" className={styles.close} type="button">
                    <CloseIcon />
                </button>
            ) : null}
        </div>
    );
};
