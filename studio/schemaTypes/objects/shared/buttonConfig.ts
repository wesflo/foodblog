import { defineField, defineType } from 'sanity';

type ButtonConfigParent = {
    icon?: string;
};

export const buttonIconOptions = [
    { title: 'Arrow Left', value: 'arrow-left' },
    { title: 'Arrow Right', value: 'arrow-right' },
    { title: 'External Link', value: 'external-link' },
    { title: 'Download', value: 'download' },
    { title: 'Mail', value: 'mail' },
    { title: 'Play', value: 'play' },
] as const;

export const buttonConfig = defineType({
    name: 'buttonConfig',
    title: 'Button',
    description: 'Reusable button configuration with controlled variants and link behavior.',
    type: 'object',
    fields: [
        defineField({
            name: 'label',
            title: 'Label',
            type: 'string',
            validation: (rule) => rule.required().min(1).error('Enter a button label.'),
        }),
        defineField({
            name: 'link',
            title: 'Link',
            type: 'link',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'variant',
            title: 'Variant',
            type: 'string',
            initialValue: 'filled',
            options: {
                layout: 'dropdown',
                list: [
                    { title: 'Filled', value: 'filled' },
                    { title: 'Secondary', value: 'secondary' },
                    { title: 'Outline', value: 'outline' },
                    { title: 'Ghost', value: 'ghost' },
                    { title: 'Link', value: 'link' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'size',
            title: 'Size',
            type: 'string',
            initialValue: 'm',
            options: {
                layout: 'radio',
                list: [
                    { title: 'Small', value: 's' },
                    { title: 'Medium', value: 'm' },
                    { title: 'Large', value: 'l' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'icon',
            title: 'Icon',
            type: 'string',
            options: {
                layout: 'dropdown',
                list: [...buttonIconOptions],
            },
        }),
        defineField({
            name: 'iconPosition',
            title: 'Icon Position',
            type: 'string',
            initialValue: 'right',
            hidden: ({ parent }: { parent?: ButtonConfigParent }) => !parent?.icon,
            options: {
                layout: 'radio',
                list: [
                    { title: 'Left', value: 'left' },
                    { title: 'Right', value: 'right' },
                ],
            },
        }),
    ],
    preview: {
        select: {
            title: 'label',
            variant: 'variant',
            type: 'link.type',
        },
        prepare: ({
            title,
            variant,
            type,
        }: {
            title?: string;
            variant?: string;
            type?: string;
        }) => ({
            title: title ?? 'Button',
            subtitle: [variant, type ? `${type} target` : undefined].filter(Boolean).join(' · '),
        }),
    },
});
