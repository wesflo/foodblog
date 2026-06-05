export const formatPostDate = (value: string | null): string => {
    if (!value) {
        return 'Unscheduled';
    }

    return new Intl.DateTimeFormat('en', {
        dateStyle: 'medium',
        timeZone: 'UTC',
    }).format(new Date(value));
};
