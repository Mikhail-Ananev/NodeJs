import { Router } from "express";
import { login } from "../controllers/login";
import { loginValidator } from "../validation/login";

const router = Router();

export const auth = (apiRouter) => {
    apiRouter.use('/login', router);

    router.post('/', loginValidator, login);
};
