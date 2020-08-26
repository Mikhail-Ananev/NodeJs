import { Router } from "express";
import { getUser, getUsers, createUser, editUser, deleteUser } from "../controllers/user";
import { userValidator } from "../validation/user";

const router = Router();

export function user(apiRouter) {
    apiRouter.use('/user', router);

    router.get('/:id', getUser);
    router.get('/', getUsers);
    router.post('/', userValidator, createUser);
    router.put('/', userValidator, editUser);
    router.delete('/:id', deleteUser);
}
