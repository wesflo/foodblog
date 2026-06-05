import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PageContent } from '@/features/pages/components/PageContent';
import { getPageBySlug } from '@/features/pages/queries/getPageBySlug';

export const revalidate = 300;

type PageRouteProps = {
    params: Promise<{
        slug: string;
    }>;
};

export const generateMetadata = async ({ params }: PageRouteProps): Promise<Metadata> => {
    const { slug } = await params;
    const page = await getPageBySlug(slug, revalidate);

    if (!page) {
        return {
            title: 'Page Not Found',
        };
    }

    return {
        title: page.title,
    };
};

const PageRoute = async ({ params }: PageRouteProps) => {
    const { slug } = await params;
    const page = await getPageBySlug(slug, revalidate);

    if (!page) {
        notFound();
    }

    return (
        <main className="page-shell">
            <article className="page-document">
                <h1>{page.title}</h1>
                <PageContent content={page.content} />
            </article>
        </main>
    );
};

export default PageRoute;
