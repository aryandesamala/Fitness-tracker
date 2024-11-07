// src/components/Dashboard.jsx
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', steps: 4000 },
  { name: 'Tue', steps: 5000 },
  { name: 'Wed', steps: 6000 },
  { name: 'Thu', steps: 7000 },
  { name: 'Fri', steps: 8000 },
];

const Dashboard = () => {
  return (
    <div className="card">
      <h2>Steps Taken This Week</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="steps" stroke="#2a9d8f" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
