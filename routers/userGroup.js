import { Router } from "express";
import { addUserGroup, getUserGroups } from "../controllers/userGroup.js";
import { userGroupAddValidator } from "../validation/userGroup";

const router = Router();

export const userGroup = (apiRouter) => {
    apiRouter.use('/userGroup', router);

    router.get('/', getUserGroups);
    router.post('/', userGroupAddValidator, addUserGroup);
}
