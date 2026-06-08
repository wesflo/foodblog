import type { ReactNode } from 'react';
import { Check, TriangleAlert, Upload, X, iconDefaults } from '@wesflo/ui/icons';

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
        <Upload {...iconDefaults} className={styles.icon} />
        <div>
            <p className={styles.label}>{label}</p>
            <p className={styles.hint}>{fileName ?? hint}</p>
        </div>
        {status === 'success' ? <Check {...iconDefaults} className={styles.statusIcon} /> : null}
        {status === 'error' ? (
            <TriangleAlert {...iconDefaults} className={styles.statusIcon} />
        ) : null}
        {status === 'selected' ? <X {...iconDefaults} className={styles.statusIcon} /> : null}
    </div>
);
