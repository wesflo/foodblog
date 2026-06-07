import { defineField, defineType } from 'sanity';

type LinkParent = {
    type?: 'internal' | 'external';
};

type LinkValue = LinkParent & {
    internalReference?: { _ref?: string };
    externalUrl?: string;
};

export const link = defineType({
    name: 'link',
    title: 'Link',
    description: 'A controlled internal or external link target.',
    type: 'object',
    fields: [
        defineField({
            name: 'type',
            title: 'Type',
            type: 'string',
            initialValue: 'internal',
            options: {
                layout: 'radio',
                list: [
                    { title: 'Internal Page', value: 'internal' },
                    { title: 'External URL', value: 'external' },
                ],
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'internalReference',
            title: 'Internal Page',
            type: 'reference',
            to: [{ type: 'page' }],
            hidden: ({ parent }: { parent?: LinkParent }) => parent?.type !== 'internal',
            validation: (rule) =>
                rule.custom((value, context) => {
                    const parent = context.parent as LinkParent | undefined;

                    if (parent?.type !== 'internal') {
                        return true;
                    }

                    return value ? true : 'Select an internal page.';
                }),
        }),
        defineField({
            name: 'externalUrl',
            title: 'External URL',
            type: 'url',
            hidden: ({ parent }: { parent?: LinkParent }) => parent?.type !== 'external',
            validation: (rule) =>
                rule.uri({ scheme: ['http', 'https', 'mailto'] }).custom((value, context) => {
                    const parent = context.parent as LinkParent | undefined;

                    if (parent?.type !== 'external') {
                        return true;
                    }

                    return value ? true : 'Enter an external URL.';
                }),
        }),
        defineField({
            name: 'openInNewTab',
            title: 'Open in New Tab',
            type: 'boolean',
            initialValue: false,
            hidden: ({ parent }: { parent?: LinkParent }) => parent?.type !== 'external',
        }),
    ],
    validation: (rule) =>
        rule.custom((value) => {
            const linkValue = value as LinkValue | undefined;

            if (!linkValue?.type) {
                return 'Choose a link type.';
            }

            if (linkValue.type === 'internal' && !linkValue.internalReference?._ref) {
                return 'Select an internal page.';
            }

            if (linkValue.type === 'external' && !linkValue.externalUrl) {
                return 'Enter an external URL.';
            }

            return true;
        }),
    preview: {
        select: {
            type: 'type',
            internalTitle: 'internalReference.title',
            externalUrl: 'externalUrl',
        },
        prepare: ({
            type,
            internalTitle,
            externalUrl,
        }: {
            type?: string;
            internalTitle?: string;
            externalUrl?: string;
        }) => ({
            title:
                type === 'internal'
                    ? (internalTitle ?? 'Internal page')
                    : (externalUrl ?? 'External URL'),
            subtitle: type === 'internal' ? 'Internal link' : 'External link',
        }),
    },
});
