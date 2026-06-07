import { defineField, defineType } from 'sanity';

export const referencedTeaserItem = defineType({
    name: 'referencedTeaserItem',
    title: 'Referenced Page',
    description: 'Reference an existing page for a teaser grid item.',
    type: 'object',
    fields: [
        defineField({
            name: 'page',
            title: 'Page',
            type: 'reference',
            to: [{ type: 'page' }],
            validation: (rule) => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'page.title',
            slug: 'page.slug.current',
        },
        prepare: ({ title, slug }: { title?: string; slug?: string }) => ({
            title: title ?? 'Referenced Page',
            subtitle: slug ? `/${slug}` : 'Page reference',
        }),
    },
});
