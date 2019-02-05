var mongoose = require('mongoose');

var dataSchema = new mongoose.Schema( {
  timestamp: {
    type: Date,
    default: Date.now
  },
  temperature: {
    type: Number,
    required: 'Must record temperature'
  },
  humidity: {
    type: Number,
    required: 'Must record humidity'
  },
  brightness: {
    type: Number,
    required: 'Must record brightness'
  }
});

var Data = mongoose.model('Data', dataSchema);

module.exports = Data;