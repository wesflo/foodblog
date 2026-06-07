import { defineField, defineType } from 'sanity';

import { createBottomSpaceField, textAlignmentOptions } from '../../constants/contentOptions';

type RichTextPreviewSelection = {
    content?: Array<{ children?: Array<{ text?: string }> }>;
    alignment?: string;
};

const getPlainTextExcerpt = (content: RichTextPreviewSelection['content']): string | undefined => {
    const text = content
        ?.flatMap((block) => block.children?.map((child) => child.text ?? '') ?? [])
        .join(' ')
        .trim();

    if (!text) {
        return undefined;
    }

    return text.length > 80 ? `${text.slice(0, 77)}...` : text;
};

export const richText = defineType({
    name: 'richText',
    title: 'Rich Text',
    description: 'Editorial text with controlled headings, lists, and links.',
    type: 'object',
    initialValue: {
        alignment: 'left',
        bottomSpace: 'm',
    },
    fields: [
        defineField({
            name: 'content',
            title: 'Content',
            type: 'portableText',
            validation: (rule) => rule.required().min(1).error('Add rich text content.'),
        }),
        defineField({
            name: 'alignment',
            title: 'Alignment',
            type: 'string',
            initialValue: 'left',
            options: {
                layout: 'radio',
                list: [...textAlignmentOptions],
            },
            validation: (rule) => rule.required(),
        }),
        createBottomSpaceField(),
    ],
    preview: {
        select: {
            content: 'content',
            alignment: 'alignment',
        },
        prepare: ({ content, alignment }: RichTextPreviewSelection) => ({
            title: 'Rich Text',
            subtitle: getPlainTextExcerpt(content) ?? `Alignment: ${alignment ?? 'left'}`,
        }),
    },
});
