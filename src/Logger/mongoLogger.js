const mongoose = require('mongoose');
const Event = require('../Middleware/mongoSchema')

const mongoLogger = {
    log: async (data) => {
        let event = new Event();
        Object.assign(event, data);
        await event.save();
    }
};

module.exports = mongoLogger;