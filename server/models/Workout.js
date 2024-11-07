// models/Workout.js
const mongoose = require('mongoose');

// Define the schema for the Workout model
const workoutSchema = new mongoose.Schema({
  name: { type: String, required: true }, // The name of the workout (e.g., "Running")
  duration: { type: Number, required: true }, // The duration of the workout in minutes
  calories: { type: Number, required: true }, // The number of calories burned during the workout
  date: { type: Date, default: Date.now } // The date of the workout, defaults to the current date
});

// Check if the model already exists, if not, create it
const Workout = mongoose.models.Workout || mongoose.model('Workout', workoutSchema);

// Export the Workout model for use in other parts of the application
module.exports = Workout;