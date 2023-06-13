const { Schema, model } = require('mongoose');


const locationSchema = new Schema({
    location: {
        type: String,
    }
});

const Location = model('location', locationSchema);

module.exports = Location;