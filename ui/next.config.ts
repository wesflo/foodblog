import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { NextConfig } from 'next';

const workspaceRoot = dirname(fileURLToPath(new URL('../package.json', import.meta.url)));

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
    },
    transpilePackages: ['@wesflo/ui'],
    turbopack: {
        root: workspaceRoot,
    },
};

export default nextConfig;
