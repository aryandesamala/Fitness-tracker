// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import ProgressChart from './ProgressChart';
import WorkoutLogForm from './components/WorkoutLogForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Fitness-tracker" element={<Dashboard />} />
          <Route path="/Fitness-tracker/log" element={<WorkoutLogForm />} />
          <Route path="/Fitness-tracker/progress" element={<ProgressChart />} />
          <Route path="/log" element={<WorkoutLogForm />} />
          <Route path="/progress" element={<ProgressChart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;