const mongoLogger = require('./mongoLogger');
const httpLogger = require('./httpLogger');

module.exports = async (req, res, done) => {
    
    // to avoid warnings
    if (!done) {
        done = () => {};
    }

    try {
        const eventData = {
            path: req.path || '',
            method: req.method || '',
            level: req.level || '',
            message: req.message || '""',
            date: req.date || '',
        }

        // loggers
        httpLogger.log(eventData);
        await mongoLogger.log(eventData);

        done();
    } catch (error) {
        done(error);
    }
} 