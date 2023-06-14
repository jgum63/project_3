const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const eventSchema = new Schema({
  location: {

    type: Schema.Types.ObjectId,
    ref: 'location',

  },
  eventType: {

    type: Schema.Types.ObjectId,
    ref: 'EventType',

  },
  date: {
    type: Date,
    get: (timestamp) => dateFormat(timestamp),
  },
  reviews: [
    {
      reviewText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280,
      },
      eventUser: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
      },
    },
  ],
});

const Event = model('Event', eventSchema);

module.exports = Event;
