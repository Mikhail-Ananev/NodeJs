import Joi from "@hapi/joi";
import { uuidV4Pattern } from "../config";

const userGroupAddSchema = Joi.object({
    groupId: Joi.string().pattern(uuidV4Pattern).required(),
    userIds: Joi.array().items(Joi.string().pattern(uuidV4Pattern).required()),
});

export const userGroupAddValidator = async (req, res, next) => {
    const { error } = userGroupAddSchema.validate({
        groupId: req.body.groupId,
        userIds: req.body.userIds
    });

    if (error) {
        logger.log('error', JSON.stringify(error.message));

        return res.status(400).json(error.details);
    }

    return next();
};
