import { Tooltip as BaseTooltip } from '@base-ui/react/tooltip';
import type { ReactElement, ReactNode } from 'react';

import styles from './tooltip.module.css';

export type TooltipProps = {
    trigger: ReactElement;
    children: ReactNode;
};

export const Tooltip = ({ trigger, children }: TooltipProps) => (
    <BaseTooltip.Provider>
        <BaseTooltip.Root>
            <BaseTooltip.Trigger render={trigger} />
            <BaseTooltip.Portal>
                <BaseTooltip.Positioner sideOffset={8}>
                    <BaseTooltip.Popup className={styles.popup}>
                        <BaseTooltip.Arrow className={styles.arrow} />
                        {children}
                    </BaseTooltip.Popup>
                </BaseTooltip.Positioner>
            </BaseTooltip.Portal>
        </BaseTooltip.Root>
    </BaseTooltip.Provider>
);
