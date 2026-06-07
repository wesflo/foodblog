import { defineField, defineType } from 'sanity';

import { createBottomSpaceField, horizontalAlignmentOptions } from '../../constants/contentOptions';

export const button = defineType({
    name: 'button',
    title: 'Button',
    description: 'Standalone button content element.',
    type: 'object',
    initialValue: {
        alignment: 'left',
        bottomSpace: 'm',
    },
    fields: [
        defineField({
            name: 'button',
            title: 'Button',
            type: 'buttonConfig',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'alignment',
            title: 'Alignment',
            type: 'string',
            initialValue: 'left',
            options: {
                layout: 'radio',
                list: [...horizontalAlignmentOptions],
            },
            validation: (rule) => rule.required(),
        }),
        createBottomSpaceField(),
    ],
    preview: {
        select: {
            title: 'button.label',
            variant: 'button.variant',
            targetType: 'button.link.type',
        },
        prepare: ({
            title,
            variant,
            targetType,
        }: {
            title?: string;
            variant?: string;
            targetType?: string;
        }) => ({
            title: title ?? 'Button',
            subtitle: [variant, targetType ? `${targetType} target` : undefined]
                .filter(Boolean)
                .join(' · '),
        }),
    },
});
