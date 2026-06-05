import Fastify, { type FastifyInstance } from 'fastify';

import { healthRoute } from './routes/health/health.route.js';

type CreateAppOptions = {
    logger?: boolean;
};

export const createApp = async (options: CreateAppOptions = {}): Promise<FastifyInstance> => {
    const app = Fastify({
        logger: options.logger ?? true,
    });

    await app.register(healthRoute);

    return app;
};
