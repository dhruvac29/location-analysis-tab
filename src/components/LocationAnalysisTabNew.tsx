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
      <div className="bg-white rounded-lg p-6 shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Demographics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div>
            <p className="text-gray-500">Population Growth Rate</p>
            <p className="font-medium text-lg">1.2%</p>
          </div>
          <div>
            <p className="text-gray-500">Median Household Income</p>
            <p className="font-medium text-lg">$76,912</p>
          </div>
          <div>
            <p className="text-gray-500">Unemployment Rate</p>
            <p className="font-medium text-lg">7.4%</p>
          </div>
        </div>
        
        {/* Chart */}
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={demographicData}>
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
      
      {/* Proximity Insights */}
      <div className="bg-white rounded-lg p-6 shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Proximity Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-md font-semibold mb-2">Transportation</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-600">Interstate I-95</span>
                <span className="font-medium">2 miles</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Port of NY/NJ</span>
                <span className="font-medium">15 miles</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Rail Spur Access</span>
                <span className="font-medium">Adjacent</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">JFK Airport</span>
                <span className="font-medium">8 miles</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-2">Key Tenants & Amenities</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-600">Amazon HQ</span>
                <span className="font-medium">0.5 miles</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Downtown Brooklyn</span>
                <span className="font-medium">5 miles</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">FedEx Distribution</span>
                <span className="font-medium">1.2 miles</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">IKEA Brooklyn</span>
                <span className="font-medium">0.8 miles</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Zoning Information */}
      <div className="bg-white rounded-lg p-6 shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Zoning Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-md font-semibold mb-2">Current Zoning</h3>
            <p className="text-gray-600 mb-4"><span className="font-medium">M-2:</span> General Industrial District</p>
            
            <h3 className="text-md font-semibold mb-2">Permitted Uses</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Manufacturing</li>
              <li>Warehousing & Distribution</li>
              <li>Research & Development</li>
              <li>Limited Retail</li>
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-2">Overlay Districts</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Transit Oriented Development (TOD)</li>
              <li>Waterfront Access Plan</li>
            </ul>
            
            <h3 className="text-md font-semibold mt-4 mb-2">Municipal Resources</h3>
            <a href="#" className="text-blue-600 hover:underline flex items-center">
              View NYC Zoning Resolution
              <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Supply Pipeline */}
      <div className="bg-white rounded-lg p-6 shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Supply Pipeline</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs uppercase">
              <tr>
                <th className="px-4 py-2">Project</th>
                <th className="px-4 py-2">Submarket</th>
                <th className="px-4 py-2">Delivery</th>
                <th className="px-4 py-2 text-right">Size (SF)</th>
                <th className="px-4 py-2">Owner/Developer</th>
                <th className="px-4 py-2">Tenant</th>
                <th className="px-4 py-2">Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">640 Columbia</td>
                <td className="px-4 py-2">Brooklyn</td>
                <td className="px-4 py-2">Jun-25</td>
                <td className="px-4 py-2 text-right">336,350</td>
                <td className="px-4 py-2">CBREI</td>
                <td className="px-4 py-2">Dr. Pepper</td>
                <td className="px-4 py-2 text-orange-600">Moderate</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">WB Mason</td>
                <td className="px-4 py-2">Bronx</td>
                <td className="px-4 py-2">May-25</td>
                <td className="px-4 py-2 text-right">150,000</td>
                <td className="px-4 py-2">Link Logistics</td>
                <td className="px-4 py-2">Do & Co</td>
                <td className="px-4 py-2">Low</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Land Sale Comparables */}
      <div className="bg-white rounded-lg p-6 shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Land Sale Comparables</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs uppercase">
              <tr>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Submarket</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2 text-right">Size (SF)</th>
                <th className="px-4 py-2 text-right">Price</th>
                <th className="px-4 py-2 text-right">Price PSF</th>
                <th className="px-4 py-2">Buyer</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">1 Debaun Road</td>
                <td className="px-4 py-2">Millstone, NJ</td>
                <td className="px-4 py-2">Jun-24</td>
                <td className="px-4 py-2 text-right">132,930</td>
                <td className="px-4 py-2 text-right">$41,903,580</td>
                <td className="px-4 py-2 text-right">$315.23</td>
                <td className="px-4 py-2">CBREI</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Baylis 495 Business Park</td>
                <td className="px-4 py-2">Melville, NY</td>
                <td className="px-4 py-2">May-24</td>
                <td className="px-4 py-2 text-right">103,500</td>
                <td className="px-4 py-2 text-right">$44,000,000</td>
                <td className="px-4 py-2 text-right">$425.12</td>
                <td className="px-4 py-2">Cabot</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 font-medium">Terminal Logistics Center</td>
                <td className="px-4 py-2">Queens, NY</td>
                <td className="px-4 py-2">Mar-23</td>
                <td className="px-4 py-2 text-right">336,000</td>
                <td className="px-4 py-2 text-right">$136,000,000</td>
                <td className="px-4 py-2 text-right">$404.76</td>
                <td className="px-4 py-2">Blackstone</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LocationAnalysisTab;
