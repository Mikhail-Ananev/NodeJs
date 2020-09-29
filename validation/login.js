import Joi from "@hapi/joi";
import { logger } from "../config/logger";

const loginSchema = Joi.object({
    login: Joi.string().required(),
    password: Joi.string().required().alphanum(),
});

export const loginValidator = async (req, res, next) => {
    const { error } = loginSchema.validate({
        login: req.body.login,
        password: req.body.password,
    });

    if (error) {
        logger.log('error', JSON.stringify(error.message));

        return res.status(400).json(error.details);
    }

    return next();
};
