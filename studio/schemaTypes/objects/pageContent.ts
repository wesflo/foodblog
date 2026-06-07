import { defineArrayMember, defineType } from 'sanity';

export const pageContent = defineType({
    name: 'pageContent',
    title: 'Page Content',
    description: 'Controlled top-level content elements for static pages.',
    type: 'array',
    of: [
        defineArrayMember({ type: 'richText' }),
        defineArrayMember({ type: 'imageBlock' }),
        defineArrayMember({ type: 'mediaText' }),
        defineArrayMember({ type: 'button' }),
        defineArrayMember({ type: 'banner' }),
        defineArrayMember({ type: 'stage' }),
        defineArrayMember({ type: 'gallery' }),
        defineArrayMember({ type: 'teaser' }),
        defineArrayMember({ type: 'teaserGrid' }),
        defineArrayMember({ type: 'contentGrid' }),
        defineArrayMember({ type: 'relatedContent' }),
    ],
});
