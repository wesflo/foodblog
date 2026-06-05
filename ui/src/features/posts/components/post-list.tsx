import { formatPostDate } from './date-format';
import Image from 'next/image';
import type { PostListItem } from '../types/post';
import { urlForImage } from '@/lib/sanity/image';

type PostListProps = {
    posts: PostListItem[];
};

export const PostList = ({ posts }: PostListProps) => {
    if (posts.length === 0) {
        return (
            <p className="empty-state">
                No published posts are available yet. Check back soon for recipes and kitchen notes.
            </p>
        );
    }

    return (
        <ul className="post-list">
            {posts.map((post) => {
                const imageUrl = post.mainImage?.asset
                    ? urlForImage(post.mainImage).width(960).height(640).fit('crop').url()
                    : null;

                return (
                    <li className="post-card" key={post.slug}>
                        {imageUrl ? (
                            <Image
                                alt={post.mainImage?.alt ?? ''}
                                className="post-card__image"
                                height={640}
                                src={imageUrl}
                                width={960}
                            />
                        ) : null}
                        <div className="post-card__body">
                            <p className="post-card__date">{formatPostDate(post.publishedAt)}</p>
                            <h2>{post.title}</h2>
                            {post.excerpt ? <p>{post.excerpt}</p> : null}
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};
