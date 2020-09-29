import ExtendError from './errorExtention';

export default class BadRequestError extends ExtendError {
    constructor(message) {
        super(400, message || 'Bad request')
    }
}
