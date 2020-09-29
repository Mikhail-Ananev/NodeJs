import { logger } from "../config/logger";
import DatabaseError from "../helpers/errors/databaseError";
import { userGroupService } from "../services/userGroup"

export const getUserGroups = async (req, res, next) => {
	const METHOD = 'getUserGroups';

	try {
		const userGroupsData = await userGroupService.getList();
		logger.log('info', JSON.stringify({ method: METHOD }));
		res.status(200).json(userGroupsData);
	}
	catch (error) {
		const err = new DatabaseError(error.message);
		next({ error: err, method: METHOD });
	}
};

export const addUserGroup = async (req, res, next) => {
	const METHOD = 'addUserGroup';

	try {
		const userGroupData = await userGroupService.create(req.body);
		logger.log('info', JSON.stringify({ method: METHOD, params: req.body }));
		res.status(200).json(userGroupData);
	}
	catch (error) {
		const err = new DatabaseError(error.message);
		next({ error: err, method: METHOD, params: req.body });
	}
};
