import Joi from "@hapi/joi";
import { createValidator } from "express-joi-validation";

const groupCreateSchema = Joi.object({
    name: Joi.string().required(),
    permissions: Joi.array().items(Joi.number()),
});

const groupEditSchema = Joi.object({
    name: Joi.string(),
    permissions: Joi.array().items(Joi.number()),
    id: Joi.string()
        .pattern(/^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-4[a-fA-F0-9]{3}-[8|9|aA|bB][a-fA-F0-9]{3}-[a-fA-F0-9]{12}$/) //uuidV4
        .required()
}).or('name', 'permissions');

export const groupCreateValidator = createValidator().body(groupCreateSchema);
export const groupEditValidator = createValidator().body(groupEditSchema);
