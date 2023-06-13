const { Schema, model } = require('mongoose');


const locationSchema = new Schema({
    name: {
        type: String,
    }
  });
  
  const Location = model('Location', locationSchema);
  
  module.exports = Location;