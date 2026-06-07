import { defineArrayMember, defineField, defineType } from 'sanity';
import type { PreviewValue } from 'sanity';

import { createBottomSpaceField } from '../../constants/contentOptions';

type GalleryParent = {
    enableLightbox?: boolean;
};

type GalleryPreviewSelection = {
    headline?: string;
    layout?: string;
    images?: Array<{ image?: PreviewValue['media'] }>;
};

export const gallery = defineType({
    name: 'gallery',
    title: 'Gallery',
    description: 'Static image gallery with controlled layouts.',
    type: 'object',
    initialValue: {
        layout: 'grid',
        enableLightbox: true,
        showCaptionsInLightbox: true,
        bottomSpace: 'm',
    },
    fields: [
        defineField({ name: 'headline', title: 'Headline', type: 'string' }),
        defineField({
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [defineArrayMember({ type: 'galleryImage' })],
            validation: (rule) => rule.required().min(2).error('Add at least two gallery images.'),
        }),
        defineField({
            name: 'layout',
            title: 'Layout',
            type: 'string',
            initialValue: 'grid',
            options: {
                layout: 'dropdown',
                list: [
                    { title: 'Grid', value: 'grid' },
                    { title: 'Masonry', value: 'masonry' },
                    { title: 'Featured', value: 'featured' },
                    { title: 'Filmstrip', value: 'filmstrip' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'enableLightbox',
            title: 'Enable Lightbox',
            type: 'boolean',
            initialValue: true,
        }),
        defineField({
            name: 'showCaptionsInLightbox',
            title: 'Show Captions in Lightbox',
            type: 'boolean',
            initialValue: true,
            hidden: ({ parent }: { parent?: GalleryParent }) => parent?.enableLightbox === false,
        }),
        createBottomSpaceField(),
    ],
    preview: {
        select: {
            headline: 'headline',
            layout: 'layout',
            images: 'images',
        },
        prepare: ({ headline, layout, images }: GalleryPreviewSelection) => {
            const count = images?.length ?? 0;

            return {
                title: headline ?? 'Gallery',
                subtitle: [layout, `${count} image${count === 1 ? '' : 's'}`]
                    .filter(Boolean)
                    .join(' · '),
                media: images?.[0]?.image,
            };
        },
    },
});
