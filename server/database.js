var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Exercise = new Schema({
  name: String,
  description: String,
  tags: [String]
});

mongoose.model('exercises', Exercise);

mongoose.connect('mongodb://localhost/crud-exercises');
