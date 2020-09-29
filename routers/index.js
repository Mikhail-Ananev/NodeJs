import { Router } from "express";
import { user } from "./user";
import { group } from "./group";
import { auth } from "./login";
import { userGroup } from "./userGroup";

export const apiRouter = () => {
    const router = Router();
    auth(router);
    user(router);
    group(router);
    userGroup(router);
    return router;
}
