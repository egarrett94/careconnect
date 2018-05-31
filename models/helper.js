var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var bcrypt = require('bcrypt');

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
  services: {
    type: String,
    default: null
  },
  zipcode: {
    type: Number,
    default: null
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
    ref: 'Appointment'
  }],
  hours: {
    type: Number,
    default: 0
  }
})

helperSchema.set('toJSON', {
  transform: function(doc, ret, options) {
    let returnJson = {
      _id: ret._id,
      email: ret.email,
      name: ret.name,
    }
    return returnJson
  }
})

helperSchema.methods.authenticated = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, res) {
    if (err) {
      callback(err)
    } else {
      //checks to see if response is defined. 
      // ' this ' is the helper model
      callback(null, res ? this : false)
    };
  });
}

//like beforeCreate
helperSchema.pre('save', function(next) {
  console.log('we are in the pre save hook');
  var hash = bcrypt.hashSync(this.password, 10);
  this.password = hash;
  next();
})


var Helper = mongoose.model('Helper', helperSchema)

module.exports = Helper;
