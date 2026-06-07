import { defineField, defineType } from 'sanity';
import type { PreviewValue } from 'sanity';

import { createBottomSpaceField } from '../../constants/contentOptions';

type MediaTextValue = {
    layout?: string;
    image?: unknown;
    alt?: string;
    text?: Array<unknown>;
};

const columnLayouts = ['media-left', 'media-right'] as const;
const inlineLayouts = ['media-inline-left', 'media-inline-right'] as const;

export const mediaText = defineType({
    name: 'mediaText',
    title: 'Media Text',
    description: 'Image and text composition with controlled layout variants.',
    type: 'object',
    initialValue: {
        layout: 'media-left',
        columnRatio: '1-1',
        verticalAlignment: 'center',
        mobileMediaPosition: 'before',
        inlineMediaWidth: 'm',
        bottomSpace: 'm',
    },
    fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({
            name: 'text',
            title: 'Text',
            type: 'portableText',
            validation: (rule) => rule.required().min(1).error('Add meaningful text content.'),
        }),
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
            type: 'string',
            validation: (rule) => rule.required().min(1).error('Enter image alternative text.'),
        }),
        defineField({ name: 'caption', title: 'Caption', type: 'string' }),
        defineField({ name: 'button', title: 'Button', type: 'buttonConfig' }),
        defineField({
            name: 'layout',
            title: 'Layout',
            type: 'string',
            initialValue: 'media-left',
            options: {
                layout: 'dropdown',
                list: [
                    { title: 'Media Left', value: 'media-left' },
                    { title: 'Media Right', value: 'media-right' },
                    { title: 'Media Top', value: 'media-top' },
                    { title: 'Media Bottom', value: 'media-bottom' },
                    { title: 'Inline Media Left', value: 'media-inline-left' },
                    { title: 'Inline Media Right', value: 'media-inline-right' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'columnRatio',
            title: 'Column Ratio',
            type: 'string',
            initialValue: '1-1',
            hidden: ({ parent }: { parent?: MediaTextValue }) =>
                !columnLayouts.includes(parent?.layout as (typeof columnLayouts)[number]),
            options: {
                layout: 'radio',
                list: [
                    { title: '1 / 1', value: '1-1' },
                    { title: '1 / 2', value: '1-2' },
                    { title: '2 / 1', value: '2-1' },
                    { title: '2 / 3', value: '2-3' },
                    { title: '3 / 2', value: '3-2' },
                ],
            },
        }),
        defineField({
            name: 'verticalAlignment',
            title: 'Vertical Alignment',
            type: 'string',
            initialValue: 'center',
            hidden: ({ parent }: { parent?: MediaTextValue }) =>
                !columnLayouts.includes(parent?.layout as (typeof columnLayouts)[number]),
            options: {
                layout: 'radio',
                list: [
                    { title: 'Start', value: 'start' },
                    { title: 'Center', value: 'center' },
                    { title: 'End', value: 'end' },
                ],
            },
        }),
        defineField({
            name: 'mobileMediaPosition',
            title: 'Mobile Media Position',
            type: 'string',
            initialValue: 'before',
            options: {
                layout: 'radio',
                list: [
                    { title: 'Before Text', value: 'before' },
                    { title: 'After Text', value: 'after' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'inlineMediaWidth',
            title: 'Inline Media Width',
            type: 'string',
            initialValue: 'm',
            hidden: ({ parent }: { parent?: MediaTextValue }) =>
                !inlineLayouts.includes(parent?.layout as (typeof inlineLayouts)[number]),
            options: {
                layout: 'radio',
                list: [
                    { title: 'Small', value: 's' },
                    { title: 'Medium', value: 'm' },
                    { title: 'Large', value: 'l' },
                ],
            },
        }),
        createBottomSpaceField(),
    ],
    validation: (rule) =>
        rule.custom((value) => {
            const mediaTextValue = value as MediaTextValue | undefined;

            if (!mediaTextValue?.image) {
                return 'Select an image.';
            }

            if (!mediaTextValue.alt) {
                return 'Enter image alternative text.';
            }

            if (!mediaTextValue.text?.length) {
                return 'Add meaningful text content.';
            }

            return true;
        }),
    preview: {
        select: {
            headline: 'headline',
            layout: 'layout',
            media: 'image',
        },
        prepare: ({
            headline,
            layout,
            media,
        }: {
            headline?: string;
            layout?: string;
            media?: PreviewValue['media'];
        }) => ({
            title: headline ?? 'Media Text',
            subtitle: layout ?? 'media-left',
            media,
        }),
    },
});
