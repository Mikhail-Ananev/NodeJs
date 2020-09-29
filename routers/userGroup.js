import { Router } from "express";
import { addUserGroup, getUserGroups } from "../controllers/userGroup.js";
import { checkToken } from "../helpers/checkToken.js";
import { userGroupAddValidator } from "../validation/userGroup";

const router = Router();

export const userGroup = (apiRouter) => {
    apiRouter.use('/userGroup', router);

    router.get('/', checkToken, getUserGroups);
    router.post('/', checkToken, userGroupAddValidator, addUserGroup);
}
