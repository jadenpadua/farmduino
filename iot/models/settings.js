var mongoose = require('mongoose');

var settingsSchema = new mongoose.Schema( {
  defaultColor: {
    type: String
  },
  lightColor: {
    type: String
  },
  lightIsOn: {
    type: Boolean
  },
  hot : {
    type: Number
  },
  cold : {
    type: Number
  },
  humid : {
    type: Number
  },
  dry : {
    type: Number
  },
  dark : {
    type: Number
  }
});

var Settings = mongoose.model('Settings', settingsSchema);

module.exports = Settings;