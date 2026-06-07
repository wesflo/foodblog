import { defineArrayMember, defineField, defineType } from 'sanity';

type GridColumnPreviewSelection = {
    items?: Array<{ _type?: string }>;
};

export const gridColumn = defineType({
    name: 'gridColumn',
    title: 'Grid Column',
    description: 'A column containing simple content items.',
    type: 'object',
    fields: [
        defineField({
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [
                defineArrayMember({ type: 'richText' }),
                defineArrayMember({ type: 'imageBlock' }),
                defineArrayMember({ type: 'teaser' }),
                defineArrayMember({ type: 'button' }),
            ],
            validation: (rule) => rule.required().min(1).error('Add at least one column item.'),
        }),
    ],
    preview: {
        select: {
            items: 'items',
        },
        prepare: ({ items }: GridColumnPreviewSelection) => {
            const count = items?.length ?? 0;
            const firstType = items?.[0]?._type;

            return {
                title: 'Column',
                subtitle: [firstType, `${count} item${count === 1 ? '' : 's'}`]
                    .filter(Boolean)
                    .join(' · '),
            };
        },
    },
});
