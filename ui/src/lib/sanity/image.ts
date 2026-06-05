import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';

import { env } from '@/lib/env';

const builder = createImageUrlBuilder({
    projectId: env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: env.NEXT_PUBLIC_SANITY_DATASET,
});

export const urlForImage = (source: SanityImageSource) => builder.image(source);
