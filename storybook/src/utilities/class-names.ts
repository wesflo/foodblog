export const classNames = (...values: Array<string | false | null | undefined>) =>
    values.filter((value): value is string => Boolean(value)).join(' ');
