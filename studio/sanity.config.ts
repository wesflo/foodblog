import { structureTool } from 'sanity/structure';
import { defineConfig } from 'sanity';

import { schemaTypes } from './schemaTypes';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.SANITY_STUDIO_DATASET ?? 'production';

if (!projectId) {
    throw new Error('Missing SANITY_STUDIO_PROJECT_ID. Add it to your local CMS environment.');
}

export default defineConfig({
    name: 'foodblog',
    title: 'Food Blog',
    projectId,
    dataset,
    plugins: [structureTool()],
    schema: {
        types: schemaTypes,
    },
});
