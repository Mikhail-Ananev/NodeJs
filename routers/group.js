import { Router } from "express";
import { getGroup, getGroups, createGroup, editGroup, deleteGroup } from "../controllers/group";
import { checkToken } from "../helpers/checkToken";
import { groupCreateValidator, groupEditValidator } from "../validation/group";

const router = Router();

export const group = (apiRouter) => {
    apiRouter.use('/group', router);

    router.get('/:id', checkToken, getGroup);
    router.get('/', checkToken, getGroups);
    router.post('/', checkToken, groupCreateValidator, createGroup);
    router.put('/', checkToken, groupEditValidator, editGroup);
    router.delete('/:id', checkToken, deleteGroup);
}
