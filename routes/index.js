var express = require('express');
var router = express.Router();
var model = require('../models/game');


function validate(data){
  var errors = {};
  if(data.title === '') errors.title = "Can't be empty";
  if(data.cover === '') errors.cover = "Can't be empty";
  var isValid = Object.keys(errors).length === 0;
  return {errors, isValid};
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/games', function(req, res, next){
  model.Game.find({}, function(err, games){
    res.json({games});
  })
});

router.post('/api/games', function(req, res, next){
  // var { errors, isValid } = validation(req.body);
  // if(isValid) {
    model.Game.create({
      title: req.body.title,
      image: req.body.cover
    }).then(function(game){
      res.json({game: game});
    })
  // } else {
    // res.status(404).json({errors});
  // }
});

module.exports = router;
