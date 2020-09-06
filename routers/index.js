import { Router } from "express";
import { user } from "./user";
import { group } from "./group";
import { userGroup } from "./userGroup";

export const apiRouter = () => {
    const router = Router();
    user(router);
    group(router);
    userGroup(router);
    return router;
}
