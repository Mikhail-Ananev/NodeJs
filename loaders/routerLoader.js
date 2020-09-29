import { json } from "express";
import { API_PREFIX } from "../config";
import { customErrorHandler } from "../helpers/errors/errorHandler";
import NotFoundError from "../helpers/errors/notFoundError";
import { initLogger } from "../helpers/initLogger";
import { apiRouter } from "../routers/index";

export const routerLoader = (app) => {
    app.use(json());

    initLogger(app);

    app.use(API_PREFIX, apiRouter());

    app.use((req, res, next) => {
        const error = new NotFoundError();
        next({ error });
    });
      
    app.use((error, req, res, next) => {
        customErrorHandler(error, res);
        next();
    });
};
