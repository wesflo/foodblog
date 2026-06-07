import { Menu } from '@base-ui/react/menu';
import type { ReactElement } from 'react';

import styles from './dropdown-menu.module.css';

export type DropdownMenuItem = {
    label: string;
    onSelect?: () => void;
};

export type DropdownMenuProps = {
    trigger: ReactElement;
    items: DropdownMenuItem[];
};

export const DropdownMenu = ({ trigger, items }: DropdownMenuProps) => (
    <Menu.Root>
        <Menu.Trigger render={trigger} />
        <Menu.Portal>
            <Menu.Positioner sideOffset={8}>
                <Menu.Popup className={styles.popup}>
                    {items.map((item) => (
                        <Menu.Item className={styles.item} key={item.label} onClick={item.onSelect}>
                            {item.label}
                        </Menu.Item>
                    ))}
                </Menu.Popup>
            </Menu.Positioner>
        </Menu.Portal>
    </Menu.Root>
);
