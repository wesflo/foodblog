import { defineArrayMember, defineField, defineType } from 'sanity';

type PortableTextLinkParent = {
    linkType?: 'internal' | 'external';
};

export const portableText = defineType({
    name: 'portableText',
    title: 'Portable Text',
    description: 'Controlled editorial rich text for page content elements.',
    type: 'array',
    of: [
        defineArrayMember({
            type: 'block',
            styles: [
                { title: 'Paragraph', value: 'normal' },
                { title: 'Heading 2', value: 'h2' },
                { title: 'Heading 3', value: 'h3' },
            ],
            lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Numbered', value: 'number' },
            ],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                ],
                annotations: [
                    defineArrayMember({
                        name: 'textLink',
                        title: 'Link',
                        type: 'object',
                        fields: [
                            defineField({
                                name: 'linkType',
                                title: 'Link Type',
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
                                hidden: ({ parent }: { parent?: PortableTextLinkParent }) =>
                                    parent?.linkType !== 'internal',
                                validation: (rule) =>
                                    rule.custom((value, context) => {
                                        const parent = context.parent as
                                            | PortableTextLinkParent
                                            | undefined;

                                        if (parent?.linkType !== 'internal') {
                                            return true;
                                        }

                                        return value ? true : 'Select an internal page.';
                                    }),
                            }),
                            defineField({
                                name: 'externalUrl',
                                title: 'External URL',
                                type: 'url',
                                hidden: ({ parent }: { parent?: PortableTextLinkParent }) =>
                                    parent?.linkType !== 'external',
                                validation: (rule) =>
                                    rule
                                        .uri({ scheme: ['http', 'https', 'mailto'] })
                                        .custom((value, context) => {
                                            const parent = context.parent as
                                                | PortableTextLinkParent
                                                | undefined;

                                            if (parent?.linkType !== 'external') {
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
                                hidden: ({ parent }: { parent?: PortableTextLinkParent }) =>
                                    parent?.linkType !== 'external',
                            }),
                        ],
                    }),
                ],
            },
        }),
    ],
});
