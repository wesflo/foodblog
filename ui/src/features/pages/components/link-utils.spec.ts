import { describe, expect, it } from 'vitest';

import { isExternalHref } from './link-utils';

describe('isExternalHref', () => {
    it('detects external http links', () => {
        expect(isExternalHref('https://example.com/page')).toBe(true);
    });

    it('keeps internal and relative links in the same tab', () => {
        expect(isExternalHref('/test-page')).toBe(false);
        expect(isExternalHref('#section')).toBe(false);
    });
});
