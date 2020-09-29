import jwt from "jsonwebtoken";
import { SECRET } from "../config";
import { logger } from "../config/logger";
import BadRequestError from "./errors/badRequestError";
import AuthenticationError from "./errors/authenticationError";

export const checkToken = (req, res, next) => {
    const METHOD = 'checkToken';
    const token = req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, SECRET, function(error, decoded) {
            if (error) {
                const err = new BadRequestError('Failed to authenticate token');
                next({ error: err, method: METHOD, params: { token: token } });
            } else {
                logger.log('info', JSON.stringify({ method: METHOD }));
                next();
            }
        })
    } else {
        const err = new AuthenticationError('No token provided');
        next({ error: err, method: METHOD });
    }
};
