var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var helperSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  },
  services: {
    type: String,
    required: true
  },
  zipcode: {
    type: Number,
    required: true
  },
  bio: {
    type: String,
    required: true
  },
  availability: {
    type: String,
    required: true
  },
  appointments: [{
    type: ObjectId,
    ref: 'Appointment'
  }]
})


var Helper = mongoose.model('Helper', helperSchema)

module.exports = Helper;
