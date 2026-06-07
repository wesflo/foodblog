import { defineField, defineType } from 'sanity';
import type { PreviewValue } from 'sanity';

import { createBottomSpaceField } from '../../constants/contentOptions';

type TeaserValue = {
    variant?: string;
    image?: unknown;
    alt?: string;
};

export const teaserVariantOptions = [
    { title: 'Card', value: 'card' },
    { title: 'Horizontal', value: 'horizontal' },
    { title: 'Compact', value: 'compact' },
    { title: 'Image', value: 'image' },
    { title: 'Text', value: 'text' },
] as const;

export const teaser = defineType({
    name: 'teaser',
    title: 'Teaser',
    description: 'Linked content preview or navigation card.',
    type: 'object',
    initialValue: {
        variant: 'card',
        bottomSpace: 'm',
    },
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
            hidden: ({ parent }: { parent?: TeaserValue }) => parent?.variant === 'text',
        }),
        defineField({
            name: 'alt',
            title: 'Alternative Text',
            type: 'string',
            hidden: ({ parent }: { parent?: TeaserValue }) =>
                parent?.variant === 'text' || !parent?.image,
            validation: (rule) =>
                rule.custom((value, context) => {
                    const parent = context.parent as TeaserValue | undefined;

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
                list: [...teaserVariantOptions],
            },
            validation: (rule) => rule.required(),
        }),
        createBottomSpaceField(),
    ],
    validation: (rule) =>
        rule.custom((value) => {
            const teaserValue = value as TeaserValue | undefined;

            if (teaserValue?.variant === 'image' && !teaserValue.image) {
                return 'Select an image for the image teaser variant.';
            }

            if (teaserValue?.image && !teaserValue.alt) {
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
            title: title ?? 'Teaser',
            subtitle: variant ?? 'card',
            media,
        }),
    },
});
