import { groq } from 'next-sanity';

import { sanityClient } from '@/lib/sanity/client';
import type { Page } from '../types/Page';

export const getPageBySlugQuery = groq`
    *[_type == "page" && slug.current == $slug][0] {
        _id,
        title,
        "slug": slug.current,
        content
    }
`;

export const getPageBySlug = async (slug: string, revalidate: number): Promise<Page | null> =>
    sanityClient.fetch<Page | null>(getPageBySlugQuery, { slug }, { next: { revalidate } });
