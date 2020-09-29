import { Router } from "express";
import { getUser, getUsers, createUser, editUser, deleteUser } from "../controllers/user";
import { checkToken } from "../helpers/checkToken";
import { userCreateValidator, userEditValidator } from "../validation/user";

const router = Router();

export function user(apiRouter) {
    apiRouter.use('/user', router);

    router.get('/:id', checkToken, getUser);
    router.get('/', checkToken, getUsers);
    router.post('/', checkToken, userCreateValidator, createUser);
    router.put('/', checkToken, userEditValidator, editUser);
    router.delete('/:id', checkToken, deleteUser);
}
