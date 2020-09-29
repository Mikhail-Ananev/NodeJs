import ExtendError from './errorExtention';

export default class NotFoundError extends ExtendError {
    constructor(message) {
        super(404, message || 'Not Found')
    }
}
