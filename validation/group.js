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

export const groupCreateValidator = createValidator().body(groupCreateSchema);
export const groupEditValidator = createValidator().body(groupEditSchema);
