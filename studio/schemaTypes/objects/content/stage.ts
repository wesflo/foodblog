import { defineArrayMember, defineField, defineType } from 'sanity';
import type { PreviewValue } from 'sanity';

import { createBottomSpaceField } from '../../constants/contentOptions';

type StageValue = {
    layout?: keyof typeof stageItemCounts;
    items?: Array<{ headline?: string; image?: PreviewValue['media'] }>;
};

const stageItemCounts = {
    single: 1,
    'featured-with-two': 3,
    'featured-with-three': 4,
    'two-equal': 2,
    'three-equal': 3,
    'asymmetric-grid': 4,
} as const;

export const stage = defineType({
    name: 'stage',
    title: 'Stage',
    description: 'Composed entry area made from banners. No carousel or slider behavior.',
    type: 'object',
    initialValue: {
        layout: 'single',
        bottomSpace: 'm',
    },
    fields: [
        defineField({
            name: 'items',
            title: 'Items',
            description: 'Stage items use reusable banner data.',
            type: 'array',
            of: [defineArrayMember({ type: 'bannerConfig' })],
            validation: (rule) => rule.required().min(1).max(4),
        }),
        defineField({
            name: 'layout',
            title: 'Layout',
            type: 'string',
            initialValue: 'single',
            options: {
                layout: 'dropdown',
                list: [
                    { title: 'Single - exactly 1 item', value: 'single' },
                    { title: 'Featured with Two - exactly 3 items', value: 'featured-with-two' },
                    {
                        title: 'Featured with Three - exactly 4 items',
                        value: 'featured-with-three',
                    },
                    { title: 'Two Equal - exactly 2 items', value: 'two-equal' },
                    { title: 'Three Equal - exactly 3 items', value: 'three-equal' },
                    {
                        title: 'Asymmetric Grid - exactly 4 items',
                        value: 'asymmetric-grid',
                    },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        createBottomSpaceField(),
    ],
    validation: (rule) =>
        rule.custom((value) => {
            const stageValue = value as StageValue | undefined;
            const layout = stageValue?.layout;

            if (!layout) {
                return 'Select a stage layout.';
            }

            const expectedCount = stageItemCounts[layout];
            const actualCount = stageValue.items?.length ?? 0;

            return actualCount === expectedCount
                ? true
                : `The selected layout requires exactly ${expectedCount} item${expectedCount === 1 ? '' : 's'}.`;
        }),
    preview: {
        select: {
            items: 'items',
            layout: 'layout',
        },
        prepare: ({ items, layout }: StageValue) => {
            const count = items?.length ?? 0;

            return {
                title: items?.[0]?.headline ?? 'Stage',
                subtitle: [layout, `${count} item${count === 1 ? '' : 's'}`]
                    .filter(Boolean)
                    .join(' · '),
                media: items?.[0]?.image,
            };
        },
    },
});
