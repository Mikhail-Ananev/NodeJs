import winston from "winston";

const { combine, timestamp, printf } = winston.format;

const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${JSON.stringify(message)}`;
});

export const logger = winston.createLogger({
    level: 'info',
    format: combine(
            timestamp(),
            myFormat,
        ),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
});
