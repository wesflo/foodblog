import { defineArrayMember, defineField, defineType } from 'sanity';

import { createBottomSpaceField } from '../../constants/contentOptions';

type RelatedContentParent = {
    layout?: string;
};

type PageReference = {
    _ref?: string;
};

type RelatedContentPreviewSelection = {
    headline?: string;
    layout?: string;
    items?: PageReference[];
};

const hasDuplicateReferences = (references: PageReference[] | undefined): boolean => {
    const refs = references?.map((reference) => reference._ref).filter(Boolean) ?? [];
    return new Set(refs).size !== refs.length;
};

export const relatedContent = defineType({
    name: 'relatedContent',
    title: 'Related Content',
    description: 'Manually curated references to related pages.',
    type: 'object',
    initialValue: {
        layout: 'grid',
        columns: 3,
        bottomSpace: 'm',
    },
    fields: [
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({
            name: 'items',
            title: 'Pages',
            type: 'array',
            of: [defineArrayMember({ type: 'reference', to: [{ type: 'page' }] })],
            validation: (rule) =>
                rule
                    .required()
                    .min(1)
                    .max(8)
                    .custom((value) =>
                        hasDuplicateReferences(value as PageReference[] | undefined)
                            ? 'Remove duplicate page references.'
                            : true,
                    ),
        }),
        defineField({
            name: 'layout',
            title: 'Layout',
            type: 'string',
            initialValue: 'grid',
            options: {
                layout: 'radio',
                list: [
                    { title: 'Grid', value: 'grid' },
                    { title: 'List', value: 'list' },
                    { title: 'Compact', value: 'compact' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'columns',
            title: 'Columns',
            type: 'number',
            initialValue: 3,
            hidden: ({ parent }: { parent?: RelatedContentParent }) => parent?.layout !== 'grid',
            options: {
                layout: 'radio',
                list: [
                    { title: '2 Columns', value: 2 },
                    { title: '3 Columns', value: 3 },
                    { title: '4 Columns', value: 4 },
                ],
            },
        }),
        createBottomSpaceField(),
    ],
    preview: {
        select: {
            headline: 'headline',
            layout: 'layout',
            items: 'items',
        },
        prepare: ({ headline, layout, items }: RelatedContentPreviewSelection) => {
            const count = items?.length ?? 0;

            return {
                title: headline ?? 'Related Content',
                subtitle: [layout, `${count} reference${count === 1 ? '' : 's'}`]
                    .filter(Boolean)
                    .join(' · '),
            };
        },
    },
});
