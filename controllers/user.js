import { logger } from "../config/logger";
import DatabaseError from "../helpers/errors/databaseError";
import { userService } from "../services/user";

export const getUser = async (req, res, next) => {
	const METHOD = 'getUser';

	try {
		const userData = await userService.getById(req.params.id);
		logger.log('info', JSON.stringify({ method: METHOD, id: req.params.id }));
		res.status(200).json(userData);
	}
	catch (error) {
		const err = new DatabaseError(error.message);
		next({ error: err, method: METHOD, params: { id: req.params.id }});
	}
};

export const getUsers = async (req, res, next) => {
	const METHOD = 'getUsers';

	try {
		const usersData = await userService.getList(req.query.loginSubstring, req.query.limit);
		logger.log('info', JSON.stringify({ method: METHOD, substring: req.query.loginSubstring, limit: req.query.limit }));
		res.status(200).json(usersData);
	}
	catch (error) {
		const err = new DatabaseError(error.message);
		next({ error: err, method: METHOD, params: { substring: req.query.loginSubstring, limit: req.query.limit } });
	}
};

export const createUser = async (req, res, next) => {
	const METHOD = 'createUser';

	try {
		const userData = await userService.create(req.body);
		logger.log('info', JSON.stringify({ method: METHOD, params: req.body }));
		res.status(200).json(userData);
	}
	catch (error) {
		const err = new DatabaseError(error.message);
		next({ error: err, method: METHOD, params: req.body });
	}
};

export const editUser = async (req, res, next) => {
	const METHOD = 'editUser';

	try {
		const userData = await userService.edit(req.body);
		logger.log('info', JSON.stringify({ method: METHOD, params: req.body }));
		res.status(200).json(userData);
	}
	catch (error) {
		const err = new DatabaseError(error.message);
		next({ error: err, method: METHOD, params: req.body });
	}
};

export const deleteUser = async (req, res, next) => {
	const METHOD = 'deleteUser';

	try {
		await userService.delete(req.params.id);
		logger.log('info', JSON.stringify({ method: METHOD, id: req.params.id }));
		res.status(200).send();
	}
	catch (error) {
		const err = new DatabaseError(error.message);
		next({ error: err, method: METHOD, params: { id: req.params.id } });
	}
};
