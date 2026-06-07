import type { ReactNode } from 'react';

import { Alert } from '../../components/alert/alert';
import type { FeedbackStatus } from '../../components/alert/alert';
import styles from './toast.module.css';

export type ToastProps = {
    status?: FeedbackStatus;
    title: string;
    description?: ReactNode;
};

export const Toast = ({ status, title, description }: ToastProps) => (
    <div className={styles.toast}>
        <Alert
            dismissible
            title={title}
            {...(description ? { description } : {})}
            {...(status ? { status } : {})}
        />
    </div>
);
