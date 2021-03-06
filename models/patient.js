var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var ObjectId = mongoose.Schema.Types.ObjectId;

var patientSchema = new mongoose.Schema({
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
    unique: true,
    minLength: 5,
    maxLength: 99
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    maxLength: 99
  },
  age: {
    type: Number,
    required: true
  },
  needs: {
    type: String,
    default: null
  },
  zipcode: {
    type: Number
  },
  bio: {
    type: String,
    default: 'No Bio'
  },
  availability: {
    type: String,
    default: 'N/A'
  },
  appointments: [{
    type: ObjectId,
    ref: 'Appointments'
  }]
})

patientSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    let returnJson = {
      _id: ret._id,
      email: ret.email,
      firstName: ret.firstName,
      lastName: ret.lastName,
      gender: ret.gender,
      bio: ret.bio,
      age: ret.age,
      availability: ret.availability,
      needs: ret.needs,
      appointments: ret.appointments,
      zipcode: ret.zipcode
    }
    return returnJson
  }
})

patientSchema.methods.authenticated = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, res) {
    if (err) {
      callback(err)
    } else {
      //checks to see if response is defined. 
      // ' this ' is the patient model
      callback(null, res ? this : false)
    };
  });
}

//like beforeCreate
patientSchema.pre('save', function(next) {
  console.log('we are in the pre save hook');
  var hash = bcrypt.hashSync(this.password, 10);
  this.password = hash;
  next();
})


var Patient = mongoose.model('Patient', patientSchema)

module.exports = Patient;
