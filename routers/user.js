import { Router } from "express";
import { getUser, getUsers, createUser, editUser, deleteUser } from "../controllers/user";
import { userCreateValidator, userEditValidator } from "../validation/user";

const router = Router();

export function user(apiRouter) {
    apiRouter.use('/user', router);

    router.get('/:id', getUser);
    router.get('/', getUsers);
    router.post('/', userCreateValidator, createUser);
    router.put('/', userEditValidator, editUser);
    router.delete('/:id', deleteUser);
}
