import { defineField } from 'sanity';

export const bottomSpaceOptions = [
    { title: 'None', value: 'none' },
    { title: 'Small', value: 's' },
    { title: 'Medium', value: 'm' },
    { title: 'Large', value: 'l' },
    { title: 'Extra Large', value: 'xl' },
] as const;

export const horizontalAlignmentOptions = [
    { title: 'Left', value: 'left' },
    { title: 'Center', value: 'center' },
    { title: 'Right', value: 'right' },
] as const;

export const textAlignmentOptions = [
    { title: 'Left', value: 'left' },
    { title: 'Center', value: 'center' },
] as const;

export const createBottomSpaceField = () =>
    defineField({
        name: 'bottomSpace',
        title: 'Bottom Space',
        description: 'Controls the vertical spacing after this content element.',
        type: 'string',
        initialValue: 'm',
        options: {
            layout: 'radio',
            list: [...bottomSpaceOptions],
        },
        validation: (rule) => rule.required(),
    });

export const formatOptionTitle = (value: string | undefined): string =>
    value
        ? value
              .split('-')
              .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
              .join(' ')
        : 'Not selected';
