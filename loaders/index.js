import { routerLoader } from "./routerLoader";
import { logger } from "../config/logger";

export const loaders = (app) => {
  process.on('uncaughtException', err => {
    logger.log('error', 'UncaughtException happens... System shut down' + JSON.stringify(err));
    process.exit(1);
  });
  process.on('unhandledRejection', err => {
    logger.log('error', 'UnhandledRejection happens... Please, stay on your place.' + JSON.stringify(err));
  });

  routerLoader(app);
};
