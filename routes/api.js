const router = require("express").Router();
const Workout = require("../models/workout.js");

    //create workout post
router.post("/api/workouts", ( req, res) => {
  Workout.create()
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.post("/api/workout/bulk", ({ body }, res) => {
//   Workout.insertMany(body)
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

    //get workout posts
router.get("/api/workout", (req, res) => {
  Workout.find({})
    // .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


// add workout put
router.put("/api/workout/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id,
    {
      $push: { exercises: req.body },
    })
    // .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


module.exports = router;
