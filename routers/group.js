import { Router } from "express";
import { getGroup, getGroups, createGroup, editGroup, deleteGroup } from "../controllers/group";
import { groupCreateValidator, groupEditValidator } from "../validation/group";

const router = Router();

export const group = (apiRouter) => {
    apiRouter.use('/group', router);

    router.get('/:id', getGroup);
    router.get('/', getGroups);
    router.post('/', groupCreateValidator, createGroup);
    router.put('/', groupEditValidator, editGroup);
    router.delete('/:id', deleteGroup);
}
