import app from './app';

import { createServer, Server } from 'http';

import logger from './utils/logger';
import Config from './utils/config';

const server: Server = createServer(app);

try {
  server.listen(Config.PORT, (): void => {
    logger.info(`Connected successfully on port ${Config.PORT}`);
  });
} catch (error) {
  logger.error(`Error occurred ${(error as any).message}`);
}
