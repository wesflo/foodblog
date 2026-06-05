import { defineField, defineType } from 'sanity';

type PagePreviewSelection = {
    title?: string;
    slug?: string;
};

export const page = defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'richText',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            slug: 'slug.current',
        },
        prepare: ({ title, slug }: PagePreviewSelection) => ({
            title: title ?? 'Untitled page',
            subtitle: slug ? `/${slug}` : 'No slug',
        }),
    },
});
