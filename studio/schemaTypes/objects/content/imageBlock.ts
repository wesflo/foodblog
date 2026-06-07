import { defineField, defineType } from 'sanity';
import type { PreviewValue } from 'sanity';

import { createBottomSpaceField, horizontalAlignmentOptions } from '../../constants/contentOptions';

type ImageBlockParent = {
    width?: string;
};

export const imageBlock = defineType({
    name: 'imageBlock',
    title: 'Image',
    description: 'Standalone image content with controlled sizing and accessibility fields.',
    type: 'object',
    initialValue: {
        aspectRatio: 'auto',
        width: 'content',
        alignment: 'center',
        bottomSpace: 'm',
    },
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'alt',
            title: 'Alternative Text',
            description:
                'Describe the meaningful content of the image. Decorative images should use an intentional empty value only when the project has an established accessibility convention for that.',
            type: 'string',
            validation: (rule) =>
                rule.required().min(1).error('Enter meaningful alternative text.'),
        }),
        defineField({ name: 'caption', title: 'Caption', type: 'string' }),
        defineField({ name: 'copyright', title: 'Copyright', type: 'string' }),
        defineField({ name: 'link', title: 'Optional Link', type: 'link' }),
        defineField({
            name: 'aspectRatio',
            title: 'Aspect Ratio',
            type: 'string',
            initialValue: 'auto',
            options: {
                layout: 'dropdown',
                list: [
                    { title: 'Auto', value: 'auto' },
                    { title: 'Landscape', value: 'landscape' },
                    { title: 'Portrait', value: 'portrait' },
                    { title: 'Square', value: 'square' },
                    { title: 'Wide', value: 'wide' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'width',
            title: 'Width',
            type: 'string',
            initialValue: 'content',
            options: {
                layout: 'radio',
                list: [
                    { title: 'Content', value: 'content' },
                    { title: 'Wide', value: 'wide' },
                    { title: 'Full', value: 'full' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'alignment',
            title: 'Alignment',
            description: 'Only applies when width is not full.',
            type: 'string',
            initialValue: 'center',
            hidden: ({ parent }: { parent?: ImageBlockParent }) => parent?.width === 'full',
            options: {
                layout: 'radio',
                list: [...horizontalAlignmentOptions],
            },
        }),
        createBottomSpaceField(),
    ],
    preview: {
        select: {
            caption: 'caption',
            alt: 'alt',
            media: 'image',
            width: 'width',
            aspectRatio: 'aspectRatio',
        },
        prepare: ({
            caption,
            alt,
            media,
            width,
            aspectRatio,
        }: {
            caption?: string;
            alt?: string;
            media?: PreviewValue['media'];
            width?: string;
            aspectRatio?: string;
        }) => ({
            title: caption ?? alt ?? 'Image',
            subtitle: [width, aspectRatio].filter(Boolean).join(' · '),
            media,
        }),
    },
});
