import { routerLoader } from "./routerLoader";
import { logger } from "../config/logger";

export const loaders = (app) => {
  process.on('uncaughtException', err => {
    logger.log('error', 'UncaughtException happens... System shut down' + JSON.stringify(err));
    process.exit(1);
  })

  routerLoader(app);
};
