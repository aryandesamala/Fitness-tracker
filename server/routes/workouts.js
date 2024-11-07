// routes/workouts.js
const express = require('express');
const Workout = require('../models/Workout');

const router = express.Router();

// Endpoint to create a new workout
router.post('/', async (req, res) => {
  const { name, duration, calories, date } = req.body; // Expecting these fields

  const workout = new Workout({
    name,
    duration,
    calories,
    date,
  });

  try {
    const savedWorkout = await workout.save();
    res.status(201).json(savedWorkout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;