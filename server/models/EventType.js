const { Schema, model } = require('mongoose');

const eventTypeSchema = new Schema({
    eventType: {
        type: String,
    }
});

const EventType = model('EventType', eventTypeSchema);

module.exports = EventType;