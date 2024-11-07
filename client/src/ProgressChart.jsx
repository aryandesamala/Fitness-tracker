// src/components/ProgressChart.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const progressData = [
  { month: 'January', steps: 15000 },
  { month: 'February', steps: 20000 },
  { month: 'March', steps: 18000 },
  { month: 'April', steps: 25000 },
  { month: 'May', steps: 22000 },
  { month: 'June', steps: 28000 },  
];

const ProgressChart = () => {
  return (
    <div className="card">
      <h2>Monthly Progress</h2>
      <div className="chart-container">
        <ResponsiveContainer width="300%" height={300}>
          <BarChart data={progressData}>
            <Bar dataKey="steps" fill="#2a9d8f" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProgressChart;
