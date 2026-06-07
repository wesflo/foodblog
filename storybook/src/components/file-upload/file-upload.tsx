import type { ReactNode } from 'react';

import { CheckIcon, CloseIcon, UploadIcon, WarningIcon } from '../../utilities/icons';
import styles from './file-upload.module.css';

export type FileUploadStatus = 'default' | 'selected' | 'success' | 'error' | 'disabled';

export type FileUploadProps = {
    label: string;
    hint?: ReactNode;
    fileName?: string;
    status?: FileUploadStatus;
};

export const FileUpload = ({
    label,
    hint = 'Choose a file or drag it here.',
    fileName,
    status = 'default',
}: FileUploadProps) => (
    <div className={styles.root} data-status={status}>
        <UploadIcon className={styles.icon} />
        <div>
            <p className={styles.label}>{label}</p>
            <p className={styles.hint}>{fileName ?? hint}</p>
        </div>
        {status === 'success' ? <CheckIcon className={styles.statusIcon} /> : null}
        {status === 'error' ? <WarningIcon className={styles.statusIcon} /> : null}
        {status === 'selected' ? <CloseIcon className={styles.statusIcon} /> : null}
    </div>
);
