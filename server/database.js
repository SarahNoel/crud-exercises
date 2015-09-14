var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Exercise = new Schema({
  name: String,
  description: String,
  tags: [String]
});

mongoose.model('exercises', Exercise);

mongoose.connect('mongodb://heroku_5sbnw7x2:6g6b2hl6gl4nq19dsdpmho3k8f@ds029638.mongolab.com:29638/heroku_5sbnw7x2wh' || 'mongodb://localhost/crud-exercises');



