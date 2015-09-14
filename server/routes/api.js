var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Exercise = mongoose.model('exercises');

// GET all exercises
router.get('/exercises', function(req, res, next){
  Exercise.find(function(error, exercises){
  res.json(exercises);
  });
});


// GET one exercise
router.get('/exercise/:id', function(req, res, next){
  var query = {'_id':req.params.id};
  Exercise.findOne(query, function(error, exercise){
    res.json(exercise);
  });
});


// POST- make new exercise
router.post('/exercises', function(req, res, next){
  new Exercise(req.body)
  .save(function(err, exercise){
  res.json({"SUCCESS": exercise});
  });
});


// UPDATE one exercise
router.put('/exercise/:id', function(req, res, next){
  var query = {'_id':req.params.id};
  console.log(req.params);
  var update = req.body;
  var options = {new: true};
  console.log(update);
  Exercise.findOneAndUpdate(query, update, options, function(error, exercise){
    res.json({"UPDATED": exercise});
  });
});


// DELETE one exercise
router.delete('/exercise/:id', function(req, res, next){
  var query = {'_id': req.params.id};
  Exercise.findOneAndRemove(query, function(error, exercise){
    res.json({"REMOVED": exercise});
  });
});



module.exports = router;
