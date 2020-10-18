import { logger } from "../config/logger";
import DatabaseError from "../helpers/errors/databaseError";

export class UserController {
	constructor(userService) {
		this.getUser = async (req, res, next) => {
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
			
		this.getUsers = async (req, res, next) => {
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

		this.createUser = async (req, res, next) => {
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

		this.editUser = async (req, res, next) => {
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

		this.deleteUser = async (req, res, next) => {
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
	}
}
