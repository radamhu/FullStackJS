const { init } = require('./web/server');
const logger = require('./logger');
const { connect } = require('./db');
// indít egy webszervert
// minde app-hoz szükséges erőforrsát elindítsunk
// web szervert és a db-t is pl

process.env.NODE_ENV

async function startup() {
    try {
        await init();
        logger.info('Server is ready!');
        await connect();
        logger.info('Database is ready');
    } catch (err) {
        logger.error(err);
        process.exit(1);
    }
}

startup();
