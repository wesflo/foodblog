import { Tabs as BaseTabs } from '@base-ui/react/tabs';

import styles from './tabs.module.css';

export type TabItem = {
    value: string;
    label: string;
    content: string;
};

export type TabsProps = {
    items: TabItem[];
    defaultValue?: string;
};

export const Tabs = ({ items, defaultValue }: TabsProps) => (
    <BaseTabs.Root className={styles.root} defaultValue={defaultValue ?? items[0]?.value}>
        <BaseTabs.List className={styles.list}>
            {items.map((item) => (
                <BaseTabs.Tab className={styles.tab} key={item.value} value={item.value}>
                    {item.label}
                </BaseTabs.Tab>
            ))}
        </BaseTabs.List>
        {items.map((item) => (
            <BaseTabs.Panel className={styles.panel} key={item.value} value={item.value}>
                {item.content}
            </BaseTabs.Panel>
        ))}
    </BaseTabs.Root>
);
