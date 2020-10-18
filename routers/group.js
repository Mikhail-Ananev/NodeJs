import { Router } from "express";
import { GroupController } from "../controllers/group";
import { checkToken } from "../helpers/checkToken";
import { groupCreateValidator, groupEditValidator } from "../validation/group";
import { groupService } from "../services/group";

const router = Router();
const groupController = new GroupController(groupService);

export const group = (apiRouter) => {
    apiRouter.use('/group', router);

    router.get('/:id', checkToken, groupController.getGroup);
    router.get('/', checkToken, groupController.getGroups);
    router.post('/', checkToken, groupCreateValidator, groupController.createGroup);
    router.put('/', checkToken, groupEditValidator, groupController.editGroup);
    router.delete('/:id', checkToken, groupController.deleteGroup);
}
