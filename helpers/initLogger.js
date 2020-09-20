import { logger } from "../config/logger";

export const initLogger = app => {
    app.use((req, res, next) => {
        const dataMessage = [];

        dataMessage.push(JSON.stringify({ url: req.originalUrl }));

        if (!isObjEmpty(req.params)) {
            dataMessage.push(JSON.stringify({ params: req.params }));
        }

        if (!isObjEmpty(req.body)) {
            dataMessage.push(JSON.stringify({ body: req.body }));
        }

        logger.log('info', dataMessage.toString());
        next();
    });

    const isObjEmpty = obj => {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    }
}