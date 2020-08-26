import Joi from "@hapi/joi";
import { createValidator } from "express-joi-validation";

const userSchema = Joi.object({
    login: Joi.string().required(),
    password: Joi.string().required().alphanum(),
    age: Joi.number().required().min(4).max(130)
});

export const userValidator = createValidator().body(userSchema, {
    joi: {
        allowUnknown: true
    }
});
