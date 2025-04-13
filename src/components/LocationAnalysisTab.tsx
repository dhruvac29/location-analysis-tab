'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample demographic data for the chart
const demographicData = [
  { name: '2020', 'Population Growth %': 1.0, 'Income Growth %': 2.8 },
  { name: '2021', 'Population Growth %': 1.1, 'Income Growth %': 3.2 },
  { name: '2022', 'Population Growth %': 1.2, 'Income Growth %': 3.5 },
  { name: '2023', 'Population Growth %': 1.3, 'Income Growth %': 3.8 },
  { name: '2024', 'Population Growth %': 1.2, 'Income Growth %': 4.0 },
];

const LocationAnalysisTab: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Demographics Section */}
      <div className="card bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
          <svg className="mr-2 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Demographics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200 flex items-center">
            <svg className="h-8 w-8 text-primary mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider">Population Growth Rate</p>
              <p className="font-medium text-gray-900 text-lg">1.2%</p>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200 flex items-center">
            <svg className="h-8 w-8 text-success mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider">Median Household Income</p>
              <p className="font-medium text-gray-900 text-lg">$76,912</p>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200 flex items-center">
            <svg className="h-8 w-8 text-warning mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider">Unemployment Rate</p>
              <p className="font-medium text-gray-900 text-lg">7.4%</p>
            </div>
          </div>
        </div>
        
        {/* Chart */}
        <div className="h-64 w-full p-2 bg-gray-50 rounded-lg border border-gray-100">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={demographicData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="name" tick={{fill: '#4b5563'}} />
              <YAxis unit="%" tick={{fill: '#4b5563'}} />
              <Tooltip 
                formatter={(value: number) => `${value}%`} 
                contentStyle={{backgroundColor: 'white', borderRadius: '0.375rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', border: 'none'}}
              />
              <Legend wrapperStyle={{paddingTop: '10px'}} />
              <Bar dataKey="Population Growth %" fill="var(--primary)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Income Growth %" fill="var(--success)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      {/* Proximity Insights */}
      <div className="card bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: '0.1s'}}>
        <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
          <svg className="mr-2 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Proximity Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
            <h3 className="text-md font-semibold mb-3 flex items-center text-gray-700">
              <svg className="mr-2 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Transportation
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center p-2 hover:bg-primary hover:bg-opacity-5 rounded-md transition-colors duration-200">
                <span className="text-gray-700 flex items-center">
                  <svg className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Interstate I-95
                </span>
                <span className="font-medium text-gray-900 bg-gray-100 px-2 py-1 rounded-full text-xs">2 miles</span>
              </li>
              <li className="flex justify-between items-center p-2 hover:bg-primary hover:bg-opacity-5 rounded-md transition-colors duration-200">
                <span className="text-gray-700 flex items-center">
                  <svg className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Port of NY/NJ
                </span>
                <span className="font-medium text-gray-900 bg-gray-100 px-2 py-1 rounded-full text-xs">15 miles</span>
              </li>
              <li className="flex justify-between items-center p-2 hover:bg-primary hover:bg-opacity-5 rounded-md transition-colors duration-200">
                <span className="text-gray-700 flex items-center">
                  <svg className="h-4 w-4 mr-2 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Rail Spur Access
                </span>
                <span className="font-medium text-success bg-success bg-opacity-10 px-2 py-1 rounded-full text-xs">Adjacent</span>
              </li>
              <li className="flex justify-between items-center p-2 hover:bg-primary hover:bg-opacity-5 rounded-md transition-colors duration-200">
                <span className="text-gray-700 flex items-center">
                  <svg className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  JFK Airport
                </span>
                <span className="font-medium text-gray-900 bg-gray-100 px-2 py-1 rounded-full text-xs">8 miles</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-success">
            <h3 className="text-md font-semibold mb-3 flex items-center text-gray-700">
              <svg className="mr-2 h-5 w-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Key Tenants & Amenities
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between items-center p-2 hover:bg-success hover:bg-opacity-5 rounded-md transition-colors duration-200">
                <span className="text-gray-700 flex items-center">
                  <svg className="h-4 w-4 mr-2 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Amazon HQ
                </span>
                <span className="font-medium text-success bg-success bg-opacity-10 px-2 py-1 rounded-full text-xs">0.5 miles</span>
              </li>
              <li className="flex justify-between items-center p-2 hover:bg-success hover:bg-opacity-5 rounded-md transition-colors duration-200">
                <span className="text-gray-700 flex items-center">
                  <svg className="h-4 w-4 mr-2 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Downtown Brooklyn
                </span>
                <span className="font-medium text-gray-900 bg-gray-100 px-2 py-1 rounded-full text-xs">5 miles</span>
              </li>
              <li className="flex justify-between items-center p-2 hover:bg-success hover:bg-opacity-5 rounded-md transition-colors duration-200">
                <span className="text-gray-700 flex items-center">
                  <svg className="h-4 w-4 mr-2 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  FedEx Distribution
                </span>
                <span className="font-medium text-success bg-success bg-opacity-10 px-2 py-1 rounded-full text-xs">1.2 miles</span>
              </li>
              <li className="flex justify-between items-center p-2 hover:bg-success hover:bg-opacity-5 rounded-md transition-colors duration-200">
                <span className="text-gray-700 flex items-center">
                  <svg className="h-4 w-4 mr-2 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  IKEA Brooklyn
                </span>
                <span className="font-medium text-success bg-success bg-opacity-10 px-2 py-1 rounded-full text-xs">0.8 miles</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Zoning Information */}
      <div className="card bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
        <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
          <svg className="mr-2 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          Zoning Information
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-primary">
            <h3 className="text-md font-semibold mb-3 flex items-center text-gray-700">
              <svg className="mr-2 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Current Zoning
            </h3>
            <div className="p-3 bg-white rounded-lg shadow-sm mb-4">
              <p className="text-gray-700"><span className="font-medium text-primary">M-2:</span> General Industrial District</p>
            </div>
            
            <h3 className="text-md font-semibold mb-3 flex items-center text-gray-700">
              <svg className="mr-2 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Permitted Uses
            </h3>
            <ul className="space-y-2">
              <li className="p-2 bg-white rounded-lg shadow-sm flex items-center hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
                <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Manufacturing</span>
              </li>
              <li className="p-2 bg-white rounded-lg shadow-sm flex items-center hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
                <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Warehousing & Distribution</span>
              </li>
              <li className="p-2 bg-white rounded-lg shadow-sm flex items-center hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
                <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Research & Development</span>
              </li>
              <li className="p-2 bg-white rounded-lg shadow-sm flex items-center hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
                <svg className="h-4 w-4 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Limited Retail</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-warning">
            <h3 className="text-md font-semibold mb-3 flex items-center text-gray-700">
              <svg className="mr-2 h-5 w-5 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              Overlay Districts
            </h3>
            <ul className="space-y-2 mb-6">
              <li className="p-2 bg-white rounded-lg shadow-sm flex items-center hover:bg-warning hover:bg-opacity-5 transition-colors duration-200">
                <svg className="h-4 w-4 text-warning mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Transit Oriented Development (TOD)</span>
              </li>
              <li className="p-2 bg-white rounded-lg shadow-sm flex items-center hover:bg-warning hover:bg-opacity-5 transition-colors duration-200">
                <svg className="h-4 w-4 text-warning mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">Waterfront Access Plan</span>
              </li>
            </ul>
            
            <h3 className="text-md font-semibold mb-3 flex items-center text-gray-700">
              <svg className="mr-2 h-5 w-5 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
              Municipal Resources
            </h3>
            <div className="p-3 bg-white rounded-lg shadow-sm hover:shadow transition-all duration-200">
              <a href="#" className="text-primary hover:text-primary-dark flex items-center transition-colors duration-200">
                <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                View NYC Zoning Resolution
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Supply Pipeline */}
      <div className="card bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: '0.3s'}}>
        <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
          <svg className="mr-2 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          Supply Pipeline
        </h2>
        <p className="text-gray-600 mb-4 bg-gray-50 p-3 rounded-lg border-l-4 border-primary">
          Nearby developments that may impact the local market supply over the next 24 months.
        </p>
        <div className="overflow-x-auto bg-gray-50 p-2 rounded-lg">
          <table className="w-full text-left text-sm bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Project</th>
                <th className="px-4 py-3 font-semibold">Submarket</th>
                <th className="px-4 py-3 font-semibold">Delivery</th>
                <th className="px-4 py-3 text-right font-semibold">Size (SF)</th>
                <th className="px-4 py-3 font-semibold">Owner/Developer</th>
                <th className="px-4 py-3 font-semibold">Tenant</th>
                <th className="px-4 py-3 font-semibold">Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-3 font-medium text-primary">640 Columbia</td>
                <td className="px-4 py-3">Brooklyn</td>
                <td className="px-4 py-3">
                  <span className="bg-primary bg-opacity-10 text-primary px-2 py-1 rounded-full text-xs font-medium">Jun-25</span>
                </td>
                <td className="px-4 py-3 text-right font-medium">336,350</td>
                <td className="px-4 py-3">CBREI</td>
                <td className="px-4 py-3">Dr. Pepper</td>
                <td className="px-4 py-3">
                  <span className="bg-warning bg-opacity-10 text-warning px-2 py-1 rounded-full text-xs font-medium">Moderate</span>
                </td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-3 font-medium text-primary">WB Mason</td>
                <td className="px-4 py-3">Bronx</td>
                <td className="px-4 py-3">
                  <span className="bg-primary bg-opacity-10 text-primary px-2 py-1 rounded-full text-xs font-medium">May-25</span>
                </td>
                <td className="px-4 py-3 text-right font-medium">150,000</td>
                <td className="px-4 py-3">Link Logistics</td>
                <td className="px-4 py-3">Do & Co</td>
                <td className="px-4 py-3">
                  <span className="bg-success bg-opacity-10 text-success px-2 py-1 rounded-full text-xs font-medium">Low</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mt-4">
          <button className="btn btn-secondary text-sm flex items-center">
            <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            View All Developments
          </button>
        </div>
      </div>
      
      {/* Land Sale Comparables */}
      <div className="card bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: '0.4s'}}>
        <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
          <svg className="mr-2 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Land Sale Comparables
        </h2>
        <p className="text-gray-600 mb-4 bg-gray-50 p-3 rounded-lg border-l-4 border-success">
          Recent land sales in the area that provide pricing benchmarks for valuation purposes.
        </p>
        <div className="overflow-x-auto bg-gray-50 p-2 rounded-lg">
          <table className="w-full text-left text-sm bg-white rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Address</th>
                <th className="px-4 py-3 font-semibold">Submarket</th>
                <th className="px-4 py-3 font-semibold">Date</th>
                <th className="px-4 py-3 text-right font-semibold">Size (SF)</th>
                <th className="px-4 py-3 text-right font-semibold">Price</th>
                <th className="px-4 py-3 text-right font-semibold">Price PSF</th>
                <th className="px-4 py-3 font-semibold">Buyer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-3 font-medium text-primary">1 Debaun Road</td>
                <td className="px-4 py-3">Millstone, NJ</td>
                <td className="px-4 py-3">
                  <span className="bg-success bg-opacity-10 text-success px-2 py-1 rounded-full text-xs font-medium">Jun-24</span>
                </td>
                <td className="px-4 py-3 text-right font-medium">132,930</td>
                <td className="px-4 py-3 text-right font-medium">$41,903,580</td>
                <td className="px-4 py-3 text-right">
                  <span className="bg-primary bg-opacity-10 text-primary px-2 py-1 rounded-full text-xs font-medium">$315.23</span>
                </td>
                <td className="px-4 py-3">CBREI</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-3 font-medium text-primary">Baylis 495 Business Park</td>
                <td className="px-4 py-3">Melville, NY</td>
                <td className="px-4 py-3">
                  <span className="bg-success bg-opacity-10 text-success px-2 py-1 rounded-full text-xs font-medium">May-24</span>
                </td>
                <td className="px-4 py-3 text-right font-medium">103,500</td>
                <td className="px-4 py-3 text-right font-medium">$44,000,000</td>
                <td className="px-4 py-3 text-right">
                  <span className="bg-warning bg-opacity-10 text-warning px-2 py-1 rounded-full text-xs font-medium">$425.12</span>
                </td>
                <td className="px-4 py-3">Cabot</td>
              </tr>
              <tr className="border-b hover:bg-gray-50 transition-colors duration-150">
                <td className="px-4 py-3 font-medium text-primary">Terminal Logistics Center</td>
                <td className="px-4 py-3">Queens, NY</td>
                <td className="px-4 py-3">
                  <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-xs font-medium">Mar-23</span>
                </td>
                <td className="px-4 py-3 text-right font-medium">336,000</td>
                <td className="px-4 py-3 text-right font-medium">$136,000,000</td>
                <td className="px-4 py-3 text-right">
                  <span className="bg-warning bg-opacity-10 text-warning px-2 py-1 rounded-full text-xs font-medium">$404.76</span>
                </td>
                <td className="px-4 py-3">Blackstone</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between mt-4">
          <div className="text-sm text-gray-600">
            <span className="font-medium">Average Price PSF:</span> <span className="text-primary font-bold">$381.70</span>
          </div>
          <button className="btn btn-secondary text-sm flex items-center">
            <svg className="mr-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export Comparables
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationAnalysisTab;
