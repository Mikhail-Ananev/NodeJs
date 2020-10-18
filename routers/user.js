import { Router } from "express";
import { UserController } from "../controllers/user";
import { checkToken } from "../helpers/checkToken";
import { userCreateValidator, userEditValidator } from "../validation/user";
import { userService } from "../services/user";

const router = Router();
const userController = new UserController(userService);

export function user(apiRouter) {
    apiRouter.use('/user', router);

    router.get('/:id', checkToken, userController.getUser);
    router.get('/', checkToken, userController.getUsers);
    router.post('/', checkToken, userCreateValidator, userController.createUser);
    router.put('/', checkToken, userEditValidator, userController.editUser);
    router.delete('/:id', checkToken, userController.deleteUser);
}
