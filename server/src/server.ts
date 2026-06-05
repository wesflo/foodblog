import { createApp } from './app.js';
import { loadEnv } from './config/env.js';

const env = loadEnv();
const app = await createApp();

const closeGracefully = async (signal: NodeJS.Signals): Promise<void> => {
    app.log.info({ signal }, 'Shutting down API server');
    await app.close();
};

process.once('SIGINT', (signal) => {
    void closeGracefully(signal);
});

process.once('SIGTERM', (signal) => {
    void closeGracefully(signal);
});

try {
    await app.listen({
        host: env.HOST,
        port: env.PORT,
    });
} catch (error) {
    app.log.error(error);
    process.exit(1);
}
