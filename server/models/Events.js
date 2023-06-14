const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const eventSchema = new Schema({
  location: String,
  eventType: String,
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
      reviewAuthor: {
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
