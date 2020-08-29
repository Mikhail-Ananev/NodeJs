import { Router } from "express";
import { user } from "./user";
import { group } from "./group";

export function apiRouter() {
    const router = Router();
    user(router);
    group(router);
    return router;
}
