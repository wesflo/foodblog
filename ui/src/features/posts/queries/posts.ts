import { groq } from 'next-sanity';

export const postsQuery = groq`
    *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
        title,
        "slug": slug.current,
        excerpt,
        publishedAt,
        mainImage {
            _type,
            asset,
            alt
        }
    }
`;
