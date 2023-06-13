const { Schema, model } = require('mongoose');


const eventTypeSchema = new Schema({
    name: {
        type: String,
    }
  });
  
  const EventType = model('EventType', eventTypeSchema);
  
  module.exports = EventType;