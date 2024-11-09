// WorkoutLogForm.jsx
import React, { useState } from 'react';

const url ="https://fitness-tracker-ocb6.onrender.com"
const WorkoutLogForm = () => {
  const [workoutData, setWorkoutData] = useState({
    name: '', // Change from exercise to name
    duration: '',
    calories: '', // Add calories field
    date: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkoutData({ ...workoutData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/workouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(workoutData),
      });
      const data = await response.json();
      console.log(data);
      // Handle success (e.g., reset form, show message)
      setWorkoutData({ name: '', duration: '', calories: '', date: '' }); // Reset form
    } catch (error) {
      console.error('Error submitting workout log:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name" // Change to name
        value={workoutData.name}
        onChange={handleChange}
        placeholder="Exercise"
        required
      />
      <input
        type="text"
        name="duration"
        value={workoutData.duration}
        onChange={handleChange}
        placeholder="Duration (in minutes)"
        required
      />
      <input
        type="text"
        name="calories" // Add calories input
        value={workoutData.calories}
        onChange={handleChange}
        placeholder="Calories burned"
        required
      />
      <input
        type="date"
        name="date"
        value={workoutData.date}
        onChange={handleChange}
        required
      />
      <button type="submit">Log Workout</button>
    </form>
  );
};

export default WorkoutLogForm;
