import { PortableText, type PortableTextComponents } from '@portabletext/react';
import type { ReactNode } from 'react';

import { isExternalHref } from './link-utils';
import type { PageLinkMark, Page } from '../types/Page';

type PageContentProps = {
    content: Page['content'];
};

type ChildrenProps = {
    children?: ReactNode;
};

const portableTextComponents: PortableTextComponents = {
    block: {
        normal: ({ children }: ChildrenProps) => <p>{children}</p>,
        h1: ({ children }: ChildrenProps) => <h1>{children}</h1>,
        h2: ({ children }: ChildrenProps) => <h2>{children}</h2>,
        h3: ({ children }: ChildrenProps) => <h3>{children}</h3>,
    },
    list: {
        bullet: ({ children }: ChildrenProps) => <ul>{children}</ul>,
        number: ({ children }: ChildrenProps) => <ol>{children}</ol>,
    },
    listItem: {
        bullet: ({ children }: ChildrenProps) => <li>{children}</li>,
        number: ({ children }: ChildrenProps) => <li>{children}</li>,
    },
    marks: {
        link: ({ children, value }) => {
            const link = value as PageLinkMark | undefined;
            const href = link?.href ?? '#';

            if (isExternalHref(href)) {
                return (
                    <a href={href} rel="noopener noreferrer" target="_blank">
                        {children}
                    </a>
                );
            }

            return <a href={href}>{children}</a>;
        },
    },
};

export const PageContent = ({ content }: PageContentProps) => (
    <div className="rich-text">
        <PortableText components={portableTextComponents} value={content} />
    </div>
);
