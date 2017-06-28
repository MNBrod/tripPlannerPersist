var router = require('express').Router();
var Hotel = require('../models').Hotel;
var Restaurant = require('../models').Restaurant;
var Activity = require('../models').Activity;
var Day = require('../models').Day;

router.get('/hotels', function (req, res, next) {
  Hotel.findAll({})
    .then(function (data) {
      console.log('Served Hotel');
      res.status(200).json(data);
    })
    .catch(next);
})
router.get('/activities', function (req, res, next) {
  Activity.findAll({})
    .then(function (data) {
      console.log('Served Actv.');
      res.status(200).json(data);
    })
    .catch(next);
});
router.get('/restaurants', function (req, res, next) {
  Restaurant.findAll({})
    .then(function (data) {
      console.log('Served Rest.');
      res.status(200).json(data);
    })
    .catch(next)
})

/**
 * get day
 * make days
 * delete days
 * update days
 *
 * add/remove specific attributes (i.e. rests, activs, hotels)
 */

router.get('/days', function (req, res, next) {
  Day.findAll({})
    .then((days) => {
      res.status(200).json(days);
    })
    .catch(next);
});
router.get('/days/:id', function (req, res, next) {
  Day.findOne({
    where: {
      number: req.params.id
    }
  })
    .then((day) => {
      res.status(200).json(day);
    })
    .catch(next);
});

module.exports = router;
