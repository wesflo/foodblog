'use client';

import { Dialog } from '@base-ui/react/dialog';
import type { ReactElement, ReactNode } from 'react';

import { Button } from '../button/button';

import styles from './modal.module.css';

export type ModalProps = {
    title: string;
    description?: string;
    trigger?: ReactElement;
    children: ReactNode;
};

export const Modal = ({ title, description, trigger, children }: ModalProps) => (
    <Dialog.Root>
        <Dialog.Trigger render={trigger ?? <Button>Open modal</Button>} />
        <Dialog.Portal>
            <Dialog.Backdrop className={styles.backdrop} />
            <Dialog.Popup className={styles.popup}>
                <div className={styles.header}>
                    <div className={styles.heading}>
                        <Dialog.Title className={styles.title}>{title}</Dialog.Title>
                        {description ? (
                            <Dialog.Description className={styles.description}>
                                {description}
                            </Dialog.Description>
                        ) : null}
                    </div>
                    <Dialog.Close aria-label="Close modal" className={styles.close}>
                        <span aria-hidden="true">x</span>
                    </Dialog.Close>
                </div>
                <div className={styles.content}>{children}</div>
            </Dialog.Popup>
        </Dialog.Portal>
    </Dialog.Root>
);
