import { defineArrayMember, defineField, defineType } from 'sanity';

import { createBottomSpaceField } from '../../constants/contentOptions';
import { teaserVariantOptions } from './teaser';

type TeaserGridPreviewSelection = {
    headline?: string;
    columns?: number;
    variant?: string;
    items?: Array<unknown>;
};

export const teaserGrid = defineType({
    name: 'teaserGrid',
    title: 'Teaser Grid',
    description: 'Curated grid of manually authored or referenced teaser items.',
    type: 'object',
    initialValue: {
        columns: 3,
        variant: 'card',
        bottomSpace: 'm',
    },
    fields: [
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
        defineField({
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [
                defineArrayMember({ type: 'manualTeaserItem' }),
                defineArrayMember({ type: 'referencedTeaserItem' }),
            ],
            validation: (rule) =>
                rule.required().min(2).max(12).error('Add between two and twelve teaser items.'),
        }),
        defineField({
            name: 'columns',
            title: 'Columns',
            type: 'number',
            initialValue: 3,
            options: {
                layout: 'radio',
                list: [
                    { title: '2 Columns', value: 2 },
                    { title: '3 Columns', value: 3 },
                    { title: '4 Columns', value: 4 },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'variant',
            title: 'Variant',
            type: 'string',
            initialValue: 'card',
            options: {
                layout: 'dropdown',
                list: [...teaserVariantOptions],
            },
            validation: (rule) => rule.required(),
        }),
        createBottomSpaceField(),
    ],
    preview: {
        select: {
            headline: 'headline',
            columns: 'columns',
            variant: 'variant',
            items: 'items',
        },
        prepare: ({ headline, columns, variant, items }: TeaserGridPreviewSelection) => {
            const count = items?.length ?? 0;

            return {
                title: headline ?? 'Teaser Grid',
                subtitle: [
                    columns ? `${columns} columns` : undefined,
                    variant,
                    `${count} item${count === 1 ? '' : 's'}`,
                ]
                    .filter(Boolean)
                    .join(' · '),
            };
        },
    },
});
