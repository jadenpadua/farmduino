var mongoose = require('mongoose'),
  dotenv = require('dotenv');

dotenv.load(); 

mongoose.set('debug', true);
mongoose.connect(process.env.DATABASE);
mongoose.promise = Promise;

module.exports.Settings = require('./settings');
module.exports.Stats = require('./statistics');
module.exports.Data = require('./data');