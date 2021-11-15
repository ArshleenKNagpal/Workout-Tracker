const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [
    {
      type: {
    type: String,
    trim: true,
    required: "Enter an exercise to do"
  },
  name: {
    type: String,
    trim: true,
    required: "Enter an exercise name"
  },
  duration: {
    type: Number,
    // trim: true,
    required: "Enter an exercise duration"
  },
  weight: {
    type: Number,
    // trim: true,
    // required: "Enter an exercise duration"
  },
  reps: {
    type: Number,
    // trim: true,
    // required: "Enter an exercise duration"
  },
  sets: {
    type: Number,
    // trim: true,
    // required: "Enter an exercise duration"
  },
  distance: {
    type: Number,
    // trim: true,
    // required: "Enter an exercise duration"
  }
}
  ],

  // value: {
  //   type: Number,
  //   required: "Enter an amount"
  // },

  day: {
    type: Date,
    default: Date.now
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
