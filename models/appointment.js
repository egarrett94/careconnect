var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var appointmentSchema = new mongoose.Schema({
  helperId: {
    type: ObjectId,
    ref: 'Helper'
  },
  patientId: {
    type: ObjectId,
    ref: 'Patient'
  },
  services: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.Now
  },
  status: {
    type: Boolean,
    default: false
  }
})


var Appointment = mongoose.model('Appointment', appointmentSchema)

module.exports = Appointment;
