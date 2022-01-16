const Event = require('./http_logget_event');

const httpLogger = {
    log: (data) => {
        let event = new Event();
        Object.assign(event, data);
        
        console.log(event.toString());
    }
};

module.exports = httpLogger;