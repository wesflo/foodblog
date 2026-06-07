import { Accordion as BaseAccordion } from '@base-ui/react/accordion';

import { ChevronDownIcon } from '../../utilities/icons';
import styles from './accordion.module.css';

export type AccordionItem = {
    title: string;
    content: string;
};

export type AccordionProps = {
    items: AccordionItem[];
};

export const Accordion = ({ items }: AccordionProps) => (
    <BaseAccordion.Root className={styles.root}>
        {items.map((item, index) => (
            <BaseAccordion.Item className={styles.item} key={item.title} value={String(index)}>
                <BaseAccordion.Header>
                    <BaseAccordion.Trigger className={styles.trigger}>
                        {item.title}
                        <ChevronDownIcon className={styles.chevron} />
                    </BaseAccordion.Trigger>
                </BaseAccordion.Header>
                <BaseAccordion.Panel className={styles.panel}>
                    <p>{item.content}</p>
                </BaseAccordion.Panel>
            </BaseAccordion.Item>
        ))}
    </BaseAccordion.Root>
);
