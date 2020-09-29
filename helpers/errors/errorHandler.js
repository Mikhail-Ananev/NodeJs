import { logger } from "../../config/logger";
import AuthenticationError from "./authenticationError";
import BadRequestError from "./badRequestError";
import DatabaseError from "./databaseError";
import NotFoundError from "./notFoundError";

const customErrors = [DatabaseError, NotFoundError, BadRequestError, AuthenticationError];

export const customErrorHandler = ({ error, method, params }, res) => {
    if (customErrors.includes(error.constructor)) {
        logger.log('error', JSON.stringify({ status: error.status, message: error.message, method: method, params: params }));

        return res.status(error.status).json({ status: error.status, message: error.message });
    }

    logger.log('error', JSON.stringify({ unhandledError: error.message, method: method, params: params }));
    throw new Error(error);
};
