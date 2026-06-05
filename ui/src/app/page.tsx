import type { Metadata } from 'next';

import { PostList } from '@/features/posts/components/post-list';
import { postsQuery } from '@/features/posts/queries/posts';
import type { PostListItem } from '@/features/posts/types/post';
import { sanityClient } from '@/lib/sanity/client';

export const metadata: Metadata = {
    title: 'Recipes And Kitchen Notes',
};

export const revalidate = 300;

const getPosts = async (): Promise<PostListItem[]> =>
    sanityClient.fetch<PostListItem[]>(postsQuery, {}, { next: { revalidate } });

const HomePage = async () => {
    const posts = await getPosts();

    return (
        <main className="site-shell">
            <section className="intro" aria-labelledby="page-title">
                <p className="eyebrow">Public food journal</p>
                <h1 id="page-title">Recipes and kitchen notes</h1>
                <p>
                    Seasonal cooking, dependable techniques, and the small details that make
                    everyday meals better.
                </p>
            </section>
            <section aria-label="Published posts">
                <PostList posts={posts} />
            </section>
        </main>
    );
};

export default HomePage;
