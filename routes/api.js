const express = require("express");
const router = express.Router();
const Athlete = require("../models/athlete");

//GET list of athletes from db
router.get("/athletes", function(req, res, next) {
  Athlete.find({}).then(function(athlete) {
    res.send(athlete);
  });
});

//GET list of athletes from db
router.get("/athletes/:id", function(req, res, next) {
  Athlete.findOne({ _id: req.params.id }, req.body).then(function(athlete) {
    res.send(athlete);
  });
});

//POST list of athletes from db
router.post("/athletes", function(req, res, next) {
  Athlete.create(req.body)
    .then(function(athlete) {
      console.log(req.body);
      res.send(athlete);
    })
    .catch(next);
});

//update an athlete from db
router.put("/athletes/:id", function(req, res, next) {
  Athlete.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
    Athlete.findOne({ _id: req.params.id }, req.body).then(function(athlete) {
      res.send(athlete);
    });
  });
});

//DELETE list of athletes from db
router.delete("/athletes/:id", function(req, res, next) {
  Athlete.findByIdAndRemove({ _id: req.params.id }).then(function(athlete) {
    Athlete.find({}).then(function(athlete) {
      res.send(athlete);
    });
  });
});

module.exports = router;
