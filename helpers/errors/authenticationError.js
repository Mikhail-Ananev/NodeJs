import ExtendError from './errorExtention';

export default class AuthenticationError extends ExtendError {
    constructor(message) {
        super(401, message || 'No token provided')
    }
}
