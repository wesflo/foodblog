import type { PortableTextBlock } from '@portabletext/react';

export type Page = {
    _id: string;
    title: string;
    slug: string;
    content: PortableTextBlock[];
};

export type PageLinkMark = {
    _type: 'link';
    href?: string;
};
