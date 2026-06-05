import { describe, expect, it } from 'vitest';

import { formatPostDate } from './date-format';

describe('formatPostDate', () => {
    it('formats an ISO publication date', () => {
        expect(formatPostDate('2026-06-05T12:00:00.000Z')).toBe('Jun 5, 2026');
    });

    it('returns a clear fallback when no date exists', () => {
        expect(formatPostDate(null)).toBe('Unscheduled');
    });
});
