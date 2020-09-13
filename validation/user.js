import Joi from "@hapi/joi";
import { createValidator } from "express-joi-validation";

const userCreateSchema = Joi.object({
    login: Joi.string().required(),
    password: Joi.string().required().alphanum(),
    age: Joi.number().required().min(4).max(130)
});

const userEditSchema = Joi.object({
    login: Joi.string(),
    password: Joi.string().alphanum(),
    age: Joi.number().min(4).max(130),
    id: Joi.string()
        .pattern(/^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-4[a-fA-F0-9]{3}-[8|9|aA|bB][a-fA-F0-9]{3}-[a-fA-F0-9]{12}$/) //uuidV4
        .required()
}).or('login', 'password', 'age');

export const userCreateValidator = createValidator().body(userCreateSchema);
export const userEditValidator = createValidator().body(userEditSchema);
