import { defineArrayMember, defineType } from 'sanity';

export const portableText = defineType({
    name: 'portableText',
    title: 'Portable Text',
    type: 'array',
    of: [
        defineArrayMember({
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'Heading 2', value: 'h2' },
                { title: 'Heading 3', value: 'h3' },
                { title: 'Quote', value: 'blockquote' },
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
                    {
                        name: 'link',
                        title: 'Link',
                        type: 'object',
                        fields: [
                            {
                                name: 'href',
                                title: 'URL',
                                type: 'url',
                                validation: (rule) =>
                                    rule.uri({
                                        scheme: ['http', 'https', 'mailto'],
                                    }),
                            },
                        ],
                    },
                ],
            },
        }),
        defineArrayMember({
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alternative text',
                    type: 'string',
                    validation: (rule) => rule.required(),
                },
            ],
        }),
    ],
});
