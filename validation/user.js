import Joi from "@hapi/joi";
import { createValidator } from "express-joi-validation";
import { uuidV4Pattern } from "../config";

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

export const userCreateValidator = createValidator().body(userCreateSchema);
export const userEditValidator = createValidator().body(userEditSchema);
