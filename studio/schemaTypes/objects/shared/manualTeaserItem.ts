import { defineField, defineType } from 'sanity';
import type { PreviewValue } from 'sanity';

type ManualTeaserItemValue = {
    variant?: string;
    image?: unknown;
    alt?: string;
};

export const manualTeaserItem = defineType({
    name: 'manualTeaserItem',
    title: 'Manual Teaser',
    description: 'Manually authored teaser item for teaser grids.',
    type: 'object',
    fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({
            name: 'headline',
            title: 'Headline',
            type: 'string',
            validation: (rule) => rule.required().min(1).error('Enter a teaser headline.'),
        }),
        defineField({ name: 'text', title: 'Text', type: 'text', rows: 3 }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
            hidden: ({ parent }: { parent?: ManualTeaserItemValue }) => parent?.variant === 'text',
        }),
        defineField({
            name: 'alt',
            title: 'Alternative Text',
            type: 'string',
            hidden: ({ parent }: { parent?: ManualTeaserItemValue }) =>
                parent?.variant === 'text' || !parent?.image,
            validation: (rule) =>
                rule.custom((value, context) => {
                    const parent = context.parent as ManualTeaserItemValue | undefined;

                    if (parent?.variant === 'text' || !parent?.image) {
                        return true;
                    }

                    return value ? true : 'Enter alternative text for the teaser image.';
                }),
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'link',
            validation: (rule) => rule.required(),
        }),
        defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
        defineField({
            name: 'variant',
            title: 'Variant',
            type: 'string',
            initialValue: 'card',
            options: {
                layout: 'dropdown',
                list: [
                    { title: 'Card', value: 'card' },
                    { title: 'Horizontal', value: 'horizontal' },
                    { title: 'Compact', value: 'compact' },
                    { title: 'Image', value: 'image' },
                    { title: 'Text', value: 'text' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
    ],
    validation: (rule) =>
        rule.custom((value) => {
            const teaser = value as ManualTeaserItemValue | undefined;

            if (teaser?.variant === 'image' && !teaser.image) {
                return 'Select an image for the image teaser variant.';
            }

            if (teaser?.image && !teaser.alt) {
                return 'Enter alternative text for the teaser image.';
            }

            return true;
        }),
    preview: {
        select: {
            title: 'headline',
            variant: 'variant',
            media: 'image',
        },
        prepare: ({
            title,
            variant,
            media,
        }: {
            title?: string;
            variant?: string;
            media?: PreviewValue['media'];
        }) => ({
            title: title ?? 'Manual Teaser',
            subtitle: variant ?? 'card',
            media,
        }),
    },
});
