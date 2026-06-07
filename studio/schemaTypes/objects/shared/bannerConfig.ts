import { defineField, defineType } from 'sanity';
import type { PreviewValue } from 'sanity';

type BannerConfigValue = {
    image?: unknown;
    alt?: string;
};

export const bannerConfig = defineType({
    name: 'bannerConfig',
    title: 'Banner',
    description: 'Reusable linked banner content used by standalone banners and stages.',
    type: 'object',
    fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({
            name: 'headline',
            title: 'Headline',
            type: 'string',
            validation: (rule) => rule.required().min(1).error('Enter a banner headline.'),
        }),
        defineField({ name: 'text', title: 'Text', type: 'text', rows: 3 }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'alt',
            title: 'Alternative Text',
            description:
                'Required when an image is selected. Describe the meaningful content of the image.',
            type: 'string',
            hidden: ({ parent }: { parent?: BannerConfigValue }) => !parent?.image,
            validation: (rule) =>
                rule.custom((value, context) => {
                    const parent = context.parent as BannerConfigValue | undefined;

                    if (!parent?.image) {
                        return true;
                    }

                    return value ? true : 'Enter alternative text for the banner image.';
                }),
        }),
        defineField({
            name: 'link',
            title: 'Shared Link',
            description:
                'Optional target for the banner. If a button label is present, use the same target.',
            type: 'link',
        }),
        defineField({
            name: 'buttonLabel',
            title: 'Button Label',
            description: 'Optional button text that uses the shared banner link.',
            type: 'string',
            hidden: ({ parent }: { parent?: { link?: unknown } }) => !parent?.link,
        }),
        defineField({
            name: 'format',
            title: 'Format',
            type: 'string',
            initialValue: 'landscape',
            options: {
                layout: 'dropdown',
                list: [
                    { title: 'Landscape', value: 'landscape' },
                    { title: 'Portrait', value: 'portrait' },
                    { title: 'Square', value: 'square' },
                    { title: 'Wide', value: 'wide' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'textPosition',
            title: 'Text Position',
            type: 'string',
            initialValue: 'bottom-left',
            options: {
                layout: 'dropdown',
                list: [
                    { title: 'Top Left', value: 'top-left' },
                    { title: 'Top Center', value: 'top-center' },
                    { title: 'Top Right', value: 'top-right' },
                    { title: 'Center Left', value: 'center-left' },
                    { title: 'Center', value: 'center' },
                    { title: 'Center Right', value: 'center-right' },
                    { title: 'Bottom Left', value: 'bottom-left' },
                    { title: 'Bottom Center', value: 'bottom-center' },
                    { title: 'Bottom Right', value: 'bottom-right' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'overlay',
            title: 'Overlay',
            description: 'Image readability setting, not a generic background color.',
            type: 'string',
            initialValue: 'dark',
            hidden: ({ parent }: { parent?: BannerConfigValue }) => !parent?.image,
            options: {
                layout: 'radio',
                list: [
                    { title: 'None', value: 'none' },
                    { title: 'Light', value: 'light' },
                    { title: 'Dark', value: 'dark' },
                ],
            },
        }),
    ],
    validation: (rule) =>
        rule.custom((value) => {
            const banner = value as BannerConfigValue | undefined;

            if (banner?.image && !banner.alt) {
                return 'Enter alternative text for the banner image.';
            }

            return true;
        }),
    preview: {
        select: {
            title: 'headline',
            media: 'image',
            format: 'format',
            textPosition: 'textPosition',
        },
        prepare: ({
            title,
            media,
            format,
            textPosition,
        }: {
            title?: string;
            media?: PreviewValue['media'];
            format?: string;
            textPosition?: string;
        }) => ({
            title: title ?? 'Banner',
            subtitle: [format, textPosition].filter(Boolean).join(' · '),
            media,
        }),
    },
});
