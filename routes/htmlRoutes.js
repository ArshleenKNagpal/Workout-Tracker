const router = require("express").Router();
const Workout = require("../models/workout.js");
const path = require("path");

// router.post("/api/workout", ({ body }, res) => {
//   Workout.create(body)
//     .then(dbworkout => {
//       res.json(dbworkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// router.post("/api/workout/bulk", ({ body }, res) => {
//   Workout.insertMany(body)
//     .then(dbworkout => {
//       res.json(dbworkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
})

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  })

router.get("/stats", (req, res) => {
      res.sendFile(path.join(__dirname, "../public/stats.html"));
  })


//   .sort({ date: -1 })
//     .then(dbworkout => {
//       res.json(dbworkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

module.exports = router;
