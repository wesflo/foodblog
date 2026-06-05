export const isExternalHref = (href: string): boolean => {
    if (href.startsWith('/') || href.startsWith('#')) {
        return false;
    }

    try {
        const url = new URL(href);
        return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
        return false;
    }
};
