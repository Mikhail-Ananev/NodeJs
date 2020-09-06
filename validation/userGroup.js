import Joi from "@hapi/joi";
import { createValidator } from "express-joi-validation";
import { uuidV4Pattern } from "../config";

const userGroupAddSchema = Joi.object({
    groupId: Joi.string().pattern(uuidV4Pattern).required(),
    userIds: Joi.array().items(Joi.string().pattern(uuidV4Pattern).required()),
});

export const userGroupAddValidator = createValidator().body(userGroupAddSchema);
