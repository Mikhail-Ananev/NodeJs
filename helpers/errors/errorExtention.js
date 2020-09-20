export default class ExtendError extends Error {
    constructor(status, message) {
      super(message);
      this.status = status;
    }

    getResponse() {
        return {
            status: 'Failed',
            message: this.message
        };
    }

    getStatus() {
        return this.status;
    }
}
