import { Router } from "express";
import { user } from "./user";

export function apiRouter() {
    const router = Router();
    user(router);
    return router;
}
