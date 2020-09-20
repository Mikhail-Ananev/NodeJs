import ExtendError from './errorExtention';

export default class DatabaseError extends ExtendError {
    constructor(message) {
        super(500, message || 'Database Error')
    }
}
