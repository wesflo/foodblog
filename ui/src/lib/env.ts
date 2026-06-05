import 'server-only';

type PublicEnv = {
    NEXT_PUBLIC_SANITY_PROJECT_ID: string;
    NEXT_PUBLIC_SANITY_DATASET: string;
    SANITY_API_VERSION: string;
};

const required = (name: keyof PublicEnv, value: string | undefined): string => {
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }

    return value;
};

export const env: PublicEnv = {
    NEXT_PUBLIC_SANITY_PROJECT_ID: required(
        'NEXT_PUBLIC_SANITY_PROJECT_ID',
        process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    ),
    NEXT_PUBLIC_SANITY_DATASET: required(
        'NEXT_PUBLIC_SANITY_DATASET',
        process.env.NEXT_PUBLIC_SANITY_DATASET,
    ),
    SANITY_API_VERSION: required('SANITY_API_VERSION', process.env.SANITY_API_VERSION),
};
