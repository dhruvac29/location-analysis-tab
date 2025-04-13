'use client';

import React from 'react';
import Image from 'next/image';

const DealOverviewTab: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Property Image and Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Property Image */}
        <div className="bg-white rounded-lg overflow-hidden shadow">
          <div className="relative h-64 w-full">
            <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Property Image</span>
            </div>
          </div>
          <div className="p-2 text-center text-sm text-gray-600">
            Click for Google Street View
          </div>
        </div>
        
        {/* Property Details */}
        <div className="md:col-span-2 bg-white rounded-lg p-6 shadow">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-gray-900">280 Richards, Brooklyn, NY</h2>
            <p className="text-sm text-gray-600">Date Uploaded: 11/06/2024</p>
            <p className="text-sm text-gray-600">Warehouse</p>
          </div>
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Seller</p>
              <p className="font-medium">Thor Equities</p>
            </div>
            <div>
              <p className="text-gray-500">Guidance Price</p>
              <p className="font-medium">$143,000,000</p>
            </div>
            <div>
              <p className="text-gray-500">Guidance Price PSF</p>
              <p className="font-medium">$23.92</p>
            </div>
            <div>
              <p className="text-gray-500">Cap Rate</p>
              <p className="font-medium">5.0%</p>
            </div>
            <div>
              <p className="text-gray-500">Property Size</p>
              <p className="font-medium">312,000 sqft</p>
            </div>
            <div>
              <p className="text-gray-500">Land Area</p>
              <p className="font-medium">16 acres</p>
            </div>
            <div>
              <p className="text-gray-500">Zoning</p>
              <p className="font-medium">M-2</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Deal Summary and Asset-Level Data */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Deal Summary + Insights */}
        <div className="md:col-span-2 bg-white rounded-lg p-6 shadow">
          <h3 className="text-lg font-semibold mb-3">Deal Summary</h3>
          <p className="text-sm text-gray-600 mb-6">
            280 Richards, fully leased to Amazon, aligns with HUSPP's strategy of acquiring prime logistics assets in Brooklyn's high-demand Red Hook submarket. With 13 years remaining on the lease and 3% annual rent escalations, it offers stable, long-term cash flow. While single-tenant exposure is a risk, Amazon's investment-grade rating and renewal options enhance its resilience, making it a strong addition to HUSPP's portfolio.
          </p>
          
          <h3 className="text-lg font-semibold mb-3">Personalized Insights</h3>
          <ul className="text-sm text-gray-600 space-y-2 list-disc pl-5">
            <li>Jake Klein viewed this deal in 2019, but decided not to proceed due to lack of potential upside.</li>
            <li>On 10/19/2021, your firm bid on 55 Bay St, Brooklyn, NY 11231, a larger site also occupied by Amazon 0.5 miles away. Brookfield won the deal for $45M, cap rates in the area have compressed 45bps since then.</li>
            <li>On 01/19/2025, Tom, VP of Research, noted in the Investment Committee meeting that congestion pricing has driven renewed demand for infill industrial in Brooklyn.</li>
          </ul>
        </div>
        
        {/* Asset-Level Data */}
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="text-lg font-semibold mb-4">Asset-Level Data</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500">Clear Heights</p>
              <p className="font-medium">36'</p>
            </div>
            <div>
              <p className="text-gray-500">Tenant</p>
              <p className="font-medium">Amazon</p>
            </div>
            <div>
              <p className="text-gray-500">Column Spacing</p>
              <p className="font-medium">63' X 54'</p>
            </div>
            <div>
              <p className="text-gray-500">Seaward Area</p>
              <p className="font-medium">357,151 sqft</p>
            </div>
            <div>
              <p className="text-gray-500">Parking Spaces</p>
              <p className="font-medium">393</p>
            </div>
            <div>
              <p className="text-gray-500">Year Built</p>
              <p className="font-medium">2021</p>
            </div>
            <div>
              <p className="text-gray-500"># of Dock Doors</p>
              <p className="font-medium">28</p>
            </div>
            <div>
              <p className="text-gray-500">Occupancy Rate</p>
              <p className="font-medium">100%</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Financial Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="text-lg font-semibold mb-4">Projected Financial Metrics</h3>
          <div className="space-y-3">
            <div>
              <p className="text-gray-500">IRR</p>
              <p className="font-medium text-lg">13.9%</p>
            </div>
            <div>
              <p className="text-gray-500">Equity Multiple</p>
              <p className="font-medium text-lg">2.3x</p>
            </div>
            <div>
              <p className="text-gray-500">Return on Equity</p>
              <p className="font-medium text-lg">18.5%</p>
            </div>
            <div>
              <p className="text-gray-500">Return on Cost</p>
              <p className="font-medium text-lg">19.2%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="text-lg font-semibold mb-4">Key Assumptions</h3>
          <div className="space-y-3">
            <div>
              <p className="text-gray-500">Exit Price</p>
              <p className="font-medium text-lg">$195,000,000</p>
            </div>
            <div>
              <p className="text-gray-500">Exit Cap Rate</p>
              <p className="font-medium text-lg">5.0%</p>
            </div>
            <div>
              <p className="text-gray-500">Rental Growth</p>
              <p className="font-medium text-lg">3.5%</p>
            </div>
            <div>
              <p className="text-gray-500">Hold Period</p>
              <p className="font-medium text-lg">16 Years</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="text-lg font-semibold mb-4">Market Analysis</h3>
          <div className="space-y-3">
            <div>
              <p className="text-gray-500">Nearest Urban Center</p>
              <p className="font-medium text-lg">Brooklyn, NY</p>
            </div>
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
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="text-lg font-semibold mb-4">Lease Analysis</h3>
          <div className="space-y-3">
            <div>
              <p className="text-gray-500">Rent PSF</p>
              <p className="font-medium text-lg">$24.40</p>
            </div>
            <div>
              <p className="text-gray-500">WALT</p>
              <p className="font-medium text-lg">13 Yrs (Sep 37)</p>
            </div>
            <div>
              <p className="text-gray-500">Rent Escalations</p>
              <p className="font-medium text-lg">3%</p>
            </div>
            <div>
              <p className="text-gray-500">Mark-to-Market Opportunity</p>
              <p className="font-medium text-lg">30%+</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Supply Pipeline and Sale Comparables */}
      <div className="grid grid-cols-1 gap-6">
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="text-lg font-semibold mb-4">Supply Pipeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex">
              <div className="w-24 h-24 bg-gray-200 rounded-lg mr-4 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Address: 640 Columbia</p>
                <p className="text-sm text-gray-600">Submarket: Brooklyn</p>
                <p className="text-sm text-gray-600">Delivery Date: Jun-25</p>
                <p className="text-sm text-gray-600">Owner: CBREI</p>
                <p className="text-sm text-gray-600">SF: 336,350</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-24 h-24 bg-gray-200 rounded-lg mr-4 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Address: WB Mason</p>
                <p className="text-sm text-gray-600">Submarket: Bronx</p>
                <p className="text-sm text-gray-600">Delivery Date: May-25</p>
                <p className="text-sm text-gray-600">Owner: Link Logistics</p>
                <p className="text-sm text-gray-600">SF: 150,000</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="text-lg font-semibold mb-4">Sale Comparables</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex">
              <div className="w-24 h-24 bg-gray-200 rounded-lg mr-4 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Address: 1 Debaun Road</p>
                <p className="text-sm text-gray-600">Submarket: Millstone, NJ</p>
                <p className="text-sm text-gray-600">Date: Jun-24</p>
                <p className="text-sm text-gray-600">SF: 132,930</p>
                <p className="text-sm text-gray-600">PP: $41,903,580</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-24 h-24 bg-gray-200 rounded-lg mr-4 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Address: Baylis 495 Business Park</p>
                <p className="text-sm text-gray-600">Submarket: Melville, NY</p>
                <p className="text-sm text-gray-600">Date: May-24</p>
                <p className="text-sm text-gray-600">SF: 103,500</p>
                <p className="text-sm text-gray-600">PP: $44,000,000</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-24 h-24 bg-gray-200 rounded-lg mr-4 flex-shrink-0"></div>
              <div>
                <p className="font-medium">Address: Terminal Logistics Center</p>
                <p className="text-sm text-gray-600">Submarket: Queens, NY</p>
                <p className="text-sm text-gray-600">Date: Mar-23</p>
                <p className="text-sm text-gray-600">SF: 336,000</p>
                <p className="text-sm text-gray-600">PP: $136,000,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOverviewTab;
