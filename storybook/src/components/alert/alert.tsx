import type { ReactNode } from 'react';
import { Check, Info, TriangleAlert, X, iconDefaults } from '@wesflo/ui/icons';

import styles from './alert.module.css';

export type FeedbackStatus = 'information' | 'success' | 'warning' | 'error';

export type AlertProps = {
    status?: FeedbackStatus;
    title: string;
    description?: ReactNode;
    dismissible?: boolean;
};

export const Alert = ({
    status = 'information',
    title,
    description,
    dismissible = false,
}: AlertProps) => {
    return (
        <div
            className={styles.alert}
            data-status={status}
            role={status === 'error' ? 'alert' : 'status'}
        >
            {renderStatusGraphic(status)}
            <div className={styles.body}>
                <p className={styles.title}>{title}</p>
                {description ? <p className={styles.description}>{description}</p> : null}
            </div>
            {dismissible ? (
                <button aria-label="Dismiss alert" className={styles.close} type="button">
                    <X {...iconDefaults} />
                </button>
            ) : null}
        </div>
    );
};

const renderStatusGraphic = (status: FeedbackStatus) => {
    if (status === 'success') {
        return <Check {...iconDefaults} className={styles.icon} />;
    }

    if (status === 'warning' || status === 'error') {
        return <TriangleAlert {...iconDefaults} className={styles.icon} />;
    }

    return <Info {...iconDefaults} className={styles.icon} />;
};
