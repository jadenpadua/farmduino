var mongoose = require('mongoose');

var statsSchema = new mongoose.Schema({

  avgTemperature: {
    type: Number
  },
  avgHumidity: {
    type: Number
  },
  avgBrightness: {
    type: Number
  },
  timeInHot: {
    type: Number
  },
  timeInCold: {
    type: Number
  },
  timeInDry: {
    type: Number
  },
  timeInHumid: {
    type: Number
  },
  timeOn: {
    type: Number
  },
  timeTotal: {
    type: Number,
    required: 'You must increment the number of readings'
  }
});

var Stats = mongoose.model('Stats', statsSchema);

module.exports = Stats;