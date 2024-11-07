// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Fitness Tracker</h1>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/log">Workout Log</Link>
        <Link to="/progress">Progress</Link>
      </nav>
    </header>
  );
};

export default Header;
