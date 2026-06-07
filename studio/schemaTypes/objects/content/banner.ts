import { defineField, defineType } from 'sanity';
import type { PreviewValue } from 'sanity';

import { createBottomSpaceField } from '../../constants/contentOptions';

export const banner = defineType({
    name: 'banner',
    title: 'Banner',
    description: 'Prominent linked content tile with one shared interaction target.',
    type: 'object',
    initialValue: {
        bottomSpace: 'm',
    },
    fields: [
        defineField({
            name: 'banner',
            title: 'Banner',
            type: 'bannerConfig',
            validation: (rule) => rule.required(),
        }),
        createBottomSpaceField(),
    ],
    preview: {
        select: {
            title: 'banner.headline',
            media: 'banner.image',
            format: 'banner.format',
            textPosition: 'banner.textPosition',
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
