import { logger } from "../config/logger";
import DatabaseError from "../helpers/errors/databaseError";

export class GroupController {
	constructor(groupService) {
		this.getGroup = async (req, res, next) => {
			const METHOD = 'getGroup';
		
			try {
				const groupData = await groupService.getById(req.params.id);
				logger.log('info', JSON.stringify({ method: METHOD, id: req.params.id }));
				res.status(200).json(groupData);
			}
			catch (error) {
				const err = new DatabaseError(error.message);
				next({ error: err, method: METHOD, params: { id: req.params.id } });
			}
		};
		
		this.getGroups = async (req, res, next) => {
			const METHOD = 'getGroups';
		
			try {
				const groupData = await groupService.getList();
				logger.log('info', JSON.stringify({ method: METHOD }));
				res.status(200).json(groupData);
			}
			catch (error) {
				const err = new DatabaseError(error.message);
				next({ error: err, method: METHOD });
			}
		};
		
		this.createGroup = async (req, res, next) => {
			const METHOD = 'createGroup';
		
			try {
				const groupData = await groupService.create(req.body);
				logger.log('info', JSON.stringify({ method: METHOD, params: req.body }));
				res.status(200).json(groupData);
			}
			catch (error) {
				const err = new DatabaseError(error.message);
				next({ error: err, method: METHOD, params: req.body });
			}
		};
		
		this.editGroup = async (req, res, next) => {
			const METHOD = 'editGroup';
		
			try {
				const groupData = await groupService.edit(req.body);
				logger.log('info', JSON.stringify({ method: METHOD, params: req.body }));
				res.status(200).json(groupData);
			}
			catch (error) {
				const err = new DatabaseError(error.message);
				next({ error: err, method: METHOD, params: req.body });
			}
		};
		
		this.deleteGroup = async (req, res, next) => {
			const METHOD = 'deleteGroup';
		
			try {
				await groupService.delete(req.params.id);
				logger.log('info', JSON.stringify({ method: METHOD, id: req.params.id }));
				res.status(200).send();
			}
			catch (error) {
				const err = new DatabaseError(error.message);
				next({ error: err, method: METHOD, params: { id: req.params.id } });
			}
		};
	}
};
