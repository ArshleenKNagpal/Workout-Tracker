const router = require("express").Router();
const Workout = require("../models/workout.js");

    //create workout post
router.post("/api/workouts", ( req, res) => {
  Workout.create()
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})

      .then(dbworkout => {
          res.json(dbworkout);
      })
      .catch(err => {
          res.status(400).json(err);
      });
});



// router.post("/api/workout/bulk", ({ body }, res) => {
//   Workout.insertMany(body)
//     .then(dbworkout => {
//       res.json(dbworkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

    //get workout posts
router.get("/api/workouts", (req, res) => {
  Workout.find({})
    // .sort({ date: -1 })
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



// add workout put
router.put("/api/workouts/:id", (req, res) => {
  Workout.findByIdAndUpdate(req.params.id,
    {
      $push: { exercises: req.body },
    })
    // .sort({ date: -1 })
    .then(dbworkout => {
      res.json(dbworkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


module.exports = router;






