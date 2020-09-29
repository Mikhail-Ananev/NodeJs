import Joi from "@hapi/joi";
import { uuidV4Pattern } from "../config";
import { logger } from "../config/logger";

const userCreateSchema = Joi.object({
    login: Joi.string().required(),
    password: Joi.string().required().alphanum(),
    age: Joi.number().required().min(4).max(130)
});

const userEditSchema = Joi.object({
    login: Joi.string(),
    password: Joi.string().alphanum(),
    age: Joi.number().min(4).max(130),
    id: Joi.string().pattern(uuidV4Pattern).required()
}).or('login', 'password', 'age');

export const userCreateValidator = async (req, res, next) => {
    const { error } = userCreateSchema.validate({
        login: req.body.login,
        password: req.body.password,
        age: req.body.age
    });

    if (error) {
        logger.log('error', JSON.stringify(error.message));

        return res.status(400).json(error.details);
    }

    return next();
};

export const userEditValidator = async (req, res, next) => {
    const { error } = userEditSchema.validate({
        id: req.body.id,
        login: req.body.login,
        password: req.body.password,
        age: req.body.age
    });

    if (error) {
        logger.log('error', JSON.stringify(error.message));

        return res.status(400).json(error.details);
    }

    return next();
};
