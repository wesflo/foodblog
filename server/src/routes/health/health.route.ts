import type { FastifyPluginCallback } from 'fastify';

export const healthRoute: FastifyPluginCallback = (app, _options, done) => {
    app.get('/health', () => ({
        status: 'ok' as const,
    }));

    done();
};
