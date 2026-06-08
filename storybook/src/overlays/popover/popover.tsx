import { Popover as BasePopover } from '@base-ui/react/popover';
import type { ReactElement, ReactNode } from 'react';
import { X, iconDefaults } from '@wesflo/ui/icons';

import styles from './popover.module.css';

export type PopoverProps = {
    title: string;
    trigger: ReactElement;
    children: ReactNode;
};

export const Popover = ({ title, trigger, children }: PopoverProps) => (
    <BasePopover.Root>
        <BasePopover.Trigger render={trigger} />
        <BasePopover.Portal>
            <BasePopover.Positioner sideOffset={10}>
                <BasePopover.Popup className={styles.popup}>
                    <BasePopover.Title className={styles.title}>{title}</BasePopover.Title>
                    <BasePopover.Close aria-label="Close popover" className={styles.close}>
                        <X {...iconDefaults} />
                    </BasePopover.Close>
                    <div className={styles.content}>{children}</div>
                </BasePopover.Popup>
            </BasePopover.Positioner>
        </BasePopover.Portal>
    </BasePopover.Root>
);
