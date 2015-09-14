var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'g11 Exercises' });
});

module.exports = router;
