import { defineArrayMember, defineField, defineType } from 'sanity';

import { createBottomSpaceField } from '../../constants/contentOptions';

type ContentGridValue = {
    layout?: keyof typeof contentGridColumnCounts;
    columns?: Array<unknown>;
};

type ContentGridPreviewSelection = ContentGridValue & {
    gap?: string;
};

const contentGridColumnCounts = {
    '1-1': 2,
    '1-2': 2,
    '2-1': 2,
    '1-1-1': 3,
    '1-2-1': 3,
} as const;

export const contentGrid = defineType({
    name: 'contentGrid',
    title: 'Content Grid',
    description: 'Controlled column layout for simple content items.',
    type: 'object',
    initialValue: {
        layout: '1-1',
        gap: 'm',
        verticalAlignment: 'start',
        collapseBehavior: 'stack',
        bottomSpace: 'm',
    },
    fields: [
        defineField({
            name: 'layout',
            title: 'Layout',
            type: 'string',
            initialValue: '1-1',
            options: {
                layout: 'dropdown',
                list: [
                    { title: '1 / 1', value: '1-1' },
                    { title: '1 / 2', value: '1-2' },
                    { title: '2 / 1', value: '2-1' },
                    { title: '1 / 1 / 1', value: '1-1-1' },
                    { title: '1 / 2 / 1', value: '1-2-1' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'columns',
            title: 'Columns',
            type: 'array',
            of: [defineArrayMember({ type: 'gridColumn' })],
            validation: (rule) => rule.required().min(2).max(3),
        }),
        defineField({
            name: 'gap',
            title: 'Gap',
            type: 'string',
            initialValue: 'm',
            options: {
                layout: 'radio',
                list: [
                    { title: 'Small', value: 's' },
                    { title: 'Medium', value: 'm' },
                    { title: 'Large', value: 'l' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'verticalAlignment',
            title: 'Vertical Alignment',
            type: 'string',
            initialValue: 'start',
            options: {
                layout: 'radio',
                list: [
                    { title: 'Start', value: 'start' },
                    { title: 'Center', value: 'center' },
                    { title: 'End', value: 'end' },
                    { title: 'Stretch', value: 'stretch' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'collapseBehavior',
            title: 'Collapse Behavior',
            type: 'string',
            initialValue: 'stack',
            options: {
                layout: 'radio',
                list: [{ title: 'Stack', value: 'stack' }],
            },
            validation: (rule) => rule.required(),
        }),
        createBottomSpaceField(),
    ],
    validation: (rule) =>
        rule.custom((value) => {
            const grid = value as ContentGridValue | undefined;
            const layout = grid?.layout;

            if (!layout) {
                return 'Select a grid layout.';
            }

            const expectedCount = contentGridColumnCounts[layout];
            const actualCount = grid.columns?.length ?? 0;

            return actualCount === expectedCount
                ? true
                : `The selected layout requires exactly ${expectedCount} columns.`;
        }),
    preview: {
        select: {
            layout: 'layout',
            columns: 'columns',
            gap: 'gap',
        },
        prepare: ({ layout, columns, gap }: ContentGridPreviewSelection) => {
            const count = columns?.length ?? 0;

            return {
                title: 'Content Grid',
                subtitle: [layout, `${count} columns`, gap ? `Gap: ${gap}` : undefined]
                    .filter(Boolean)
                    .join(' · '),
            };
        },
    },
});
