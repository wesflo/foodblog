import { Accordion as BaseAccordion } from '@base-ui/react/accordion';
import { ChevronDown, iconDefaults } from '@wesflo/ui/icons';

import styles from './accordion.module.css';

export type AccordionItem = {
    title: string;
    content: string;
    disabled?: boolean;
};

export type AccordionProps = {
    items: AccordionItem[];
    defaultValue?: string[];
};

export const Accordion = ({ items, defaultValue }: AccordionProps) => (
    <BaseAccordion.Root className={styles.root} defaultValue={defaultValue}>
        {items.map((item, index) => (
            <BaseAccordion.Item
                className={styles.item}
                key={item.title}
                value={String(index)}
                {...(item.disabled ? { disabled: true } : {})}
            >
                <BaseAccordion.Header>
                    <BaseAccordion.Trigger className={styles.trigger}>
                        {item.title}
                        <ChevronDown {...iconDefaults} className={styles.chevron} size={18} />
                    </BaseAccordion.Trigger>
                </BaseAccordion.Header>
                <BaseAccordion.Panel className={styles.panel}>
                    <p>{item.content}</p>
                </BaseAccordion.Panel>
            </BaseAccordion.Item>
        ))}
    </BaseAccordion.Root>
);
