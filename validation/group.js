import Joi from "@hapi/joi";
import { createValidator } from "express-joi-validation";
import { uuidV4Pattern } from "../config";

const groupCreateSchema = Joi.object({
    name: Joi.string().required(),
    permissions: Joi.array().items(Joi.number()),
});

const groupEditSchema = Joi.object({
    name: Joi.string(),
    permissions: Joi.array().items(Joi.number()),
    id: Joi.string().pattern(uuidV4Pattern).required()
}).or('name', 'permissions');

export const groupCreateValidator = async (req, res, next) => {
    const { error } = groupCreateSchema.validate({
        name: req.body.name,
        permissions: req.body.permissions,
    });

    if (error) {
        logger.log('error', JSON.stringify(error.message));

        return res.status(400).json(error.details);
    }

    return next();
};

export const groupEditValidator = async (req, res, next) => {
    const { error } = groupEditSchema.validate({
        id: req.body.id,
        name: req.body.name,
        permissions: req.body.permissions,
    });

    if (error) {
        logger.log('error', JSON.stringify(error.message));

        return res.status(400).json(error.details);
    }

    return next();
};
