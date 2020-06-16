const winston = require('winston');
const { logLevel } = require('./config');

// saját logger példány
const logger = winston.createLogger({
    level: logLevel,
    // kommunikációs csatorna, hol kövessük
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple(),
            ),
        }),
    ],
});

module.exports = logger;