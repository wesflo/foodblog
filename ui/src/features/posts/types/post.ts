export type SanityImageReference = {
    _type: 'reference';
    _ref: string;
};

export type PostMainImage = {
    _type: 'image';
    asset: SanityImageReference;
    alt: string | null;
};

export type PostListItem = {
    title: string;
    slug: string;
    excerpt: string | null;
    publishedAt: string | null;
    mainImage: PostMainImage | null;
};
