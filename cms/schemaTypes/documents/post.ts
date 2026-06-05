import { defineField, defineType } from 'sanity';
import type { PreviewValue } from 'sanity';

const excerptMaxLength = 220;

type PostPreviewSelection = {
    title?: string;
    publishedAt?: string;
    media?: PreviewValue['media'];
};

export const post = defineType({
    name: 'post',
    title: 'Post',
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
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
            rows: 3,
            validation: (rule) => rule.max(excerptMaxLength),
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            name: 'mainImage',
            title: 'Main image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alternative text',
                    type: 'string',
                    validation: (rule) => rule.required(),
                }),
            ],
        }),
        defineField({
            name: 'body',
            title: 'Body',
            type: 'portableText',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            publishedAt: 'publishedAt',
            media: 'mainImage',
        },
        prepare: ({ title, publishedAt, media }: PostPreviewSelection) => ({
            title: title ?? 'Untitled post',
            subtitle: publishedAt ? new Date(publishedAt).toLocaleDateString('en') : 'Unpublished',
            media,
        }),
    },
});
