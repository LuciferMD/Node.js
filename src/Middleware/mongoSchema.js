const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventScheme = new Schema({
    path: { type: String, default: 'Unknown path' },
    method: { type: String, default: 'Unknown method' },
    level: { type: Number, default: 'Unknown level' },
    message: { type: String, default: 'Unknown message' },
    date: { type: Date, default: new Date() },
});

const Event = mongoose.model('Event', eventScheme);

module.exports = Event;