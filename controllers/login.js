import { logger } from "../config/logger";
import { loginService } from "../services/login";

export const login = async (req, res, next) => {
	const METHOD = 'login';

    try {
		const token = await loginService.login(req.body);
		logger.log('info', JSON.stringify({ method: METHOD, params: req.body }));
		res.status(200).json(token);
	}
	catch (error) {
		const err = error;

		if (error.constructor === Error) {
			err = new DatabaseError(error.message);
		}

		next({ error: err, method: METHOD, params: req.body });
	}
};
