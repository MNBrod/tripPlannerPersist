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

router.post('/days', function (req, res, next) {
  console.log(req.body);
  Day.create(req.body)
    .then((day) => {
      res.status(201).json(day);
    })
    .catch(next);
})

router.put('/days/:id', function (req, res, next) {
  Day.findOne({ where: { number: req.params.id } })
    .then((day) => {
      return day.update(req.body)
    })
    .then((updated) => {
      res.status(204).json(updated);
    })
    .catch(next);
})

router.delete('/days/:id', (req, res, next) => {
  Day.destroy({ where: { number: req.params.id } })
    .then(deleted => {
      res.status(202).json(deleted);
    })
    .catch(next);
})

router.get('/days/:id/activities', function (req, res, next) {
  Day.findOne({
    where: {
      number: req.params.id
    }
  })
  .then((day)=> {
    day.getActivities()
    .then((results) => {
      res.status(200).json(results);
    })
  })
  .catch(next);
})

router.get('/days/:id/restaurants', function (req, res, next) {
  Day.findOne({
    where: {
      number: req.params.id
    }
  })
  .then((day)=> {
    day.getRestaurants()
    .then((results) => {
      res.status(200).json(results);
    })
  })
  .catch(next);
})

router.put('/days/:id/restaurants', (req, res, next) => {
  Day.findOne({ where: { number: req.params.id } })
    .then((day) => {
      if (req.body.delete) {
        day.getRestaurants({
          where: {
            id: {
              $ne: req.body.restaurantId
            }
          }
        })
        .then((rests) => {
          day.setRestaurants(rests)
          .then(()=>{
            res.sendStatus(204);
          })
        })
      } else {
        day.addRestaurant(req.body.restaurantId)
          .then(() => {
            res.sendStatus(202);
          })
      }
    })
})

router.put('/days/:id/hotels', (req, res, next) => {
  Day.findOne({ where: { number: req.params.id } })
    .then((day) => {
      if (req.body.delete) {
          day.setHotel(null)
          .then(()=>{
            res.sendStatus(204);
          })
      } else {
        day.setHotel(req.body.hotelId)
          .then(() => {
            res.sendStatus(202);
          })
      }
    })
})

router.put('/days/:id/activities', (req, res, next) => {
  Day.findOne({ where: { number: req.params.id } })
    .then((day) => {
      if (req.body.delete) {
        day.getActivities({
          where: {
            id: {
              $ne: req.body.activityId
            }
          }
        })
        .then((rests) => {
          day.setActivities(rests)
          .then(()=>{
            res.sendStatus(204);
          })
        })
      } else {
        day.addActivity(req.body.activityId)
          .then(() => {
            res.sendStatus(202);
          })
      }
    })
})


// router.post('/days/:id/hotels', (req, res, next) => {
//   Day.findOne({ where: { number: req.params.id } })
//     .then((day) => {
//       console.log(day)
//       day.setHotel({ id: 1 });
//       res.sendStatus(200);
//       // hotel.update()
//     })
// })


module.exports = router;
