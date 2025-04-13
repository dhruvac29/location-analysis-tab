'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data for the chart
const data = [
  { name: '2020', 'Population Growth %': 1.8, 'Income Growth %': 3.0 },
  { name: '2021', 'Population Growth %': 2.1, 'Income Growth %': 3.5 },
  { name: '2022', 'Population Growth %': 2.5, 'Income Growth %': 4.1 },
  { name: '2023', 'Population Growth %': 2.3, 'Income Growth %': 3.9 },
  { name: '2024', 'Population Growth %': 2.6, 'Income Growth %': 4.5 },
];

const Demographics: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Demographic Trends</h2>
      {/* Placeholder Content - kept for context */}
      <p className="text-gray-600 mb-4">Population, income growth, workforce composition trends.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-gray-600">
        <div>
          <h3 className="font-medium">Population Growth (5yr Avg)</h3>
          <p className="text-lg font-semibold">+2.3%</p>
        </div>
        <div>
          <h3 className="font-medium">Median Income Growth (5yr Avg)</h3>
          <p className="text-lg font-semibold">+3.8%</p>
        </div>
        <div>
          <h3 className="font-medium">Key Workforce Sectors</h3>
          <p className="text-base">Tech, Healthcare, Logistics</p>
        </div>
      </div>

      {/* Recharts Bar Chart */}
      <h3 className="text-lg font-semibold mb-2 text-gray-700">Growth Trends (YoY)</h3>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis unit="%" />
            <Tooltip formatter={(value: number) => `${value}%`} />
            <Legend />
            <Bar dataKey="Population Growth %" fill="#8884d8" />
            <Bar dataKey="Income Growth %" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Demographics;
