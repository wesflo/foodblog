import { defineField, defineType } from 'sanity';
import type { PreviewValue } from 'sanity';

export const galleryImage = defineType({
    name: 'galleryImage',
    title: 'Gallery Image',
    description: 'An image with required alternative text and optional caption metadata.',
    type: 'object',
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
            description: 'Describe the meaningful content of the image.',
            type: 'string',
            validation: (rule) => rule.required().min(1).error('Enter alternative text.'),
        }),
        defineField({ name: 'caption', title: 'Caption', type: 'string' }),
        defineField({ name: 'copyright', title: 'Copyright', type: 'string' }),
    ],
    preview: {
        select: {
            title: 'caption',
            alt: 'alt',
            media: 'image',
        },
        prepare: ({
            title,
            alt,
            media,
        }: {
            title?: string;
            alt?: string;
            media?: PreviewValue['media'];
        }) => ({
            title: title ?? alt ?? 'Gallery Image',
            subtitle: alt ? `Alt: ${alt}` : 'No alternative text',
            media,
        }),
    },
});
