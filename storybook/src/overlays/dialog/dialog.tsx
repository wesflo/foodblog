'use client';

import { Dialog as BaseDialog } from '@base-ui/react/dialog';
import { AlertDialog } from '@base-ui/react/alert-dialog';
import type { ReactElement, ReactNode } from 'react';
import { Info, TriangleAlert, X, iconDefaults } from '@wesflo/ui/icons';

import { Button } from '../../components/button/button';
import { Input } from '../../components/input/input';
import { Select } from '../../components/select/select';
import styles from './dialog.module.css';

export type DialogProps = {
    title: string;
    description?: string;
    trigger: ReactElement;
    children: ReactNode;
    actions?: ReactNode;
};

export const Dialog = ({ title, description, trigger, children, actions }: DialogProps) => (
    <BaseDialog.Root>
        <BaseDialog.Trigger render={trigger} />
        <BaseDialog.Portal>
            <BaseDialog.Backdrop className={styles.backdrop} />
            <BaseDialog.Popup className={styles.popup}>
                <DialogHeader title={title} {...(description ? { description } : {})} />
                <div className={styles.content}>{children}</div>
                {actions ? <div className={styles.actions}>{actions}</div> : null}
            </BaseDialog.Popup>
        </BaseDialog.Portal>
    </BaseDialog.Root>
);

export type ConfirmDialogProps = {
    trigger: ReactElement;
    title: string;
    description: string;
    confirmLabel?: string;
    onConfirm?: () => void;
};

export const ConfirmDialog = ({
    trigger,
    title,
    description,
    confirmLabel = 'Delete',
    onConfirm,
}: ConfirmDialogProps) => (
    <AlertDialog.Root>
        <AlertDialog.Trigger render={trigger} />
        <AlertDialog.Portal>
            <AlertDialog.Backdrop className={styles.backdrop} />
            <AlertDialog.Popup className={styles.popup}>
                <div className={styles.warningIcon}>
                    <TriangleAlert {...iconDefaults} />
                </div>
                <AlertDialog.Title className={styles.title}>{title}</AlertDialog.Title>
                <AlertDialog.Description className={styles.description}>
                    {description}
                </AlertDialog.Description>
                <div className={styles.actions}>
                    <AlertDialog.Close render={<Button variant="outline">Cancel</Button>} />
                    <AlertDialog.Close
                        render={
                            <Button onClick={onConfirm} variant="destructive">
                                {confirmLabel}
                            </Button>
                        }
                    />
                </div>
            </AlertDialog.Popup>
        </AlertDialog.Portal>
    </AlertDialog.Root>
);

export const InformationDialog = ({ trigger }: { trigger: ReactElement }) => (
    <Dialog
        actions={<BaseDialog.Close render={<Button>Got it</Button>} />}
        description="Dein Rezept wurde erfolgreich gespeichert."
        title="Alles bereit"
        trigger={trigger}
    >
        <div className={styles.infoIcon}>
            <Info {...iconDefaults} />
        </div>
    </Dialog>
);

export const SelectionDialog = ({ trigger }: { trigger: ReactElement }) => (
    <Dialog
        actions={
            <>
                <BaseDialog.Close render={<Button variant="outline">Cancel</Button>} />
                <BaseDialog.Close render={<Button>Apply</Button>} />
            </>
        }
        description="Choose how the recipes should be sorted."
        title="Sort recipes"
        trigger={trigger}
    >
        <Select
            label="Sort order"
            options={[
                { value: 'newest', label: 'Newest first' },
                { value: 'popular', label: 'Most popular' },
                { value: 'az', label: 'A-Z' },
            ]}
        />
    </Dialog>
);

export const NewsletterDialog = ({ trigger }: { trigger: ReactElement }) => (
    <Dialog
        actions={
            <>
                <BaseDialog.Close render={<Button variant="outline">Cancel</Button>} />
                <Button>Subscribe</Button>
            </>
        }
        description="Erhalte neue Rezepte, Geschichten und Tipps direkt in dein Postfach."
        title="Newsletter abonnieren"
        trigger={trigger}
    >
        <Input label="Email address" type="email" />
    </Dialog>
);

const DialogHeader = ({ title, description }: { title: string; description?: string }) => (
    <div className={styles.header}>
        <div>
            <BaseDialog.Title className={styles.title}>{title}</BaseDialog.Title>
            {description ? (
                <BaseDialog.Description className={styles.description}>
                    {description}
                </BaseDialog.Description>
            ) : null}
        </div>
        <BaseDialog.Close aria-label="Close dialog" className={styles.close}>
            <X {...iconDefaults} />
        </BaseDialog.Close>
    </div>
);
