import Joi from "@hapi/joi";
import { createValidator } from "express-joi-validation";
import { uuidV4Pattern } from "../config";

const userGroupAddSchema = Joi.object({
    group_id: Joi.string().pattern(uuidV4Pattern),
    user_id: Joi.array().items(Joi.string().pattern(uuidV4Pattern)).required(),
});

export const userGroupAddValidator = createValidator().body(userGroupAddSchema);
