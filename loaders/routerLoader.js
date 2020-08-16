import { json } from "express";
import { API_PREFIX } from "../config"
import { apiRouter } from "../routers/index"

export default function routerLoader(app) {
    app.use(json());
    app.use(API_PREFIX, apiRouter());
}
