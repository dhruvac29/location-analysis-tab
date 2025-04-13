'use client';

import React from 'react';
import Image from 'next/image';

const DealOverviewTab: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Property Image and Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-in">
        {/* Property Image */}
        <div className="card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
          <div className="relative h-64 w-full group cursor-pointer">
            <Image 
              src="/placeholder.svg" 
              alt="280 Richards, Brooklyn, NY"
              fill
              style={{objectFit: 'cover'}}
              priority
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
              <span className="text-white font-medium">280 Richards, Brooklyn</span>
            </div>
          </div>
          <div className="p-3 text-center text-sm text-primary border-t border-gray-100 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200 cursor-pointer flex items-center justify-center">
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            View in Google Street View
          </div>
        </div>
        
        {/* Property Details */}
        <div className="md:col-span-2 card bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="mb-5">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-bold text-gray-900">280 Richards, Brooklyn, NY</h2>
                <div className="flex items-center mt-1">
                  <span className="badge badge-primary mr-2">Warehouse</span>
                  <p className="text-xs text-gray-500">Date Uploaded: 11/06/2024</p>
                </div>
              </div>
              <span className="badge badge-success px-3 py-1">Active</span>
            </div>
          </div>
          
          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 text-sm">
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Seller</p>
              <p className="font-medium text-gray-900">Thor Equities</p>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Guidance Price</p>
              <p className="font-medium text-gray-900">$143,000,000</p>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Guidance Price PSF</p>
              <p className="font-medium text-gray-900">$23.92</p>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Cap Rate</p>
              <p className="font-medium text-gray-900">5.0%</p>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Property Size</p>
              <p className="font-medium text-gray-900">312,000 sqft</p>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Land Area</p>
              <p className="font-medium text-gray-900">16 acres</p>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Zoning</p>
              <p className="font-medium text-gray-900">M-2</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Deal Summary and Asset-Level Data */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-slide-in" style={{animationDelay: '0.1s'}}>
        {/* Deal Summary + Insights */}
        <div className="md:col-span-2 card bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-800">
            <svg className="mr-2 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Deal Summary
          </h3>
          <div className="bg-gray-50 p-4 rounded-lg mb-6 border-l-4 border-primary">
            <p className="text-sm text-gray-700 leading-relaxed">
              280 Richards, fully leased to Amazon, aligns with HUSPP's strategy of acquiring prime logistics assets in Brooklyn's high-demand Red Hook submarket. With 13 years remaining on the lease and 3% annual rent escalations, it offers stable, long-term cash flow. While single-tenant exposure is a risk, Amazon's investment-grade rating and renewal options enhance its resilience, making it a strong addition to HUSPP's portfolio.
            </p>
          </div>
          
          <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-800">
            <svg className="mr-2 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Personalized Insights
          </h3>
          <ul className="text-sm text-gray-700 space-y-3">
            <li className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <svg className="h-5 w-5 text-warning mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Jake Klein viewed this deal in 2019, but decided not to proceed due to lack of potential upside.</span>
            </li>
            <li className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>On 10/19/2021, your firm bid on 55 Bay St, Brooklyn, NY 11231, a larger site also occupied by Amazon 0.5 miles away. Brookfield won the deal for $45M, cap rates in the area have compressed 45bps since then.</span>
            </li>
            <li className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <svg className="h-5 w-5 text-success mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>On 01/19/2025, Tom, VP of Research, noted in the Investment Committee meeting that congestion pricing has driven renewed demand for infill industrial in Brooklyn.</span>
            </li>
          </ul>
        </div>
        
        {/* Asset-Level Data */}
        <div className="card bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
            <svg className="mr-2 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Asset-Level Data
          </h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200 flex items-center">
              <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Clear Heights</p>
                <p className="font-medium text-gray-900">36'</p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200 flex items-center">
              <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Tenant</p>
                <p className="font-medium text-gray-900">Amazon</p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200 flex items-center">
              <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Column Spacing</p>
                <p className="font-medium text-gray-900">63' X 54'</p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200 flex items-center">
              <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Seaward Area</p>
                <p className="font-medium text-gray-900">357,151 sqft</p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200 flex items-center">
              <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Parking Spaces</p>
                <p className="font-medium text-gray-900">393</p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200 flex items-center">
              <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Year Built</p>
                <p className="font-medium text-gray-900">2021</p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200 flex items-center">
              <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider"># of Dock Doors</p>
                <p className="font-medium text-gray-900">28</p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200 flex items-center">
              <svg className="h-5 w-5 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="text-gray-500 text-xs uppercase tracking-wider">Occupancy Rate</p>
                <p className="font-medium text-gray-900">100%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Financial Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-slide-in" style={{animationDelay: '0.2s'}}>
        <div className="card bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
            <svg className="mr-2 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Projected Financial Metrics
          </h3>
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-xs uppercase tracking-wider">IRR</p>
                <span className="badge badge-success text-xs">Above Target</span>
              </div>
              <div className="flex items-end mt-1">
                <p className="font-medium text-gray-900 text-xl">13.9%</p>
                <span className="text-xs text-success ml-2 flex items-center">
                  <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  +1.2%
                </span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-xs uppercase tracking-wider">Equity Multiple</p>
                <span className="badge badge-success text-xs">Strong</span>
              </div>
              <div className="flex items-end mt-1">
                <p className="font-medium text-gray-900 text-xl">2.3x</p>
                <span className="text-xs text-success ml-2 flex items-center">
                  <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  +0.3x
                </span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-xs uppercase tracking-wider">Return on Equity</p>
                <span className="badge badge-success text-xs">Excellent</span>
              </div>
              <div className="flex items-end mt-1">
                <p className="font-medium text-gray-900 text-xl">18.5%</p>
                <span className="text-xs text-success ml-2 flex items-center">
                  <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  +2.1%
                </span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-xs uppercase tracking-wider">Return on Cost</p>
                <span className="badge badge-success text-xs">Strong</span>
              </div>
              <div className="flex items-end mt-1">
                <p className="font-medium text-gray-900 text-xl">19.2%</p>
                <span className="text-xs text-success ml-2 flex items-center">
                  <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  +1.5%
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
            <svg className="mr-2 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Key Assumptions
          </h3>
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-xs uppercase tracking-wider">Exit Price</p>
                <span className="badge badge-primary text-xs">Projected</span>
              </div>
              <p className="font-medium text-gray-900 text-lg mt-1">$195,000,000</p>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-xs uppercase tracking-wider">Exit Cap Rate</p>
                <span className="badge badge-primary text-xs">Conservative</span>
              </div>
              <p className="font-medium text-gray-900 text-lg mt-1">5.0%</p>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-xs uppercase tracking-wider">Rental Growth</p>
                <span className="badge badge-primary text-xs">Annual</span>
              </div>
              <p className="font-medium text-gray-900 text-lg mt-1">3.5%</p>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-xs uppercase tracking-wider">Hold Period</p>
                <span className="badge badge-primary text-xs">Long-term</span>
              </div>
              <p className="font-medium text-gray-900 text-lg mt-1">16 Years</p>
            </div>
          </div>
        </div>
        
        <div className="card bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
            <svg className="mr-2 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
            Market Analysis
          </h3>
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-xs uppercase tracking-wider">Nearest Urban Center</p>
                <span className="badge badge-primary text-xs">Prime Location</span>
              </div>
              <div className="flex items-center mt-1">
                <svg className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="font-medium text-gray-900 text-lg">Brooklyn, NY</p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-xs uppercase tracking-wider">Population Growth Rate</p>
                <span className="badge badge-success text-xs">Growing</span>
              </div>
              <div className="flex items-end mt-1">
                <p className="font-medium text-gray-900 text-lg">1.2%</p>
                <span className="text-xs text-success ml-2 flex items-center">
                  <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  vs 0.9% National Avg
                </span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-xs uppercase tracking-wider">Median Household Income</p>
                <span className="badge badge-success text-xs">Above Average</span>
              </div>
              <div className="flex items-end mt-1">
                <p className="font-medium text-gray-900 text-lg">$76,912</p>
                <span className="text-xs text-success ml-2 flex items-center">
                  <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  +12% vs County
                </span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-xs uppercase tracking-wider">Unemployment Rate</p>
                <span className="badge badge-warning text-xs">Moderate</span>
              </div>
              <div className="flex items-end mt-1">
                <p className="font-medium text-gray-900 text-lg">7.4%</p>
                <span className="text-xs text-warning ml-2 flex items-center">
                  <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4" />
                  </svg>
                  +0.8% vs National Avg
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
            <svg className="mr-2 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Lease Analysis
          </h3>
          <div className="space-y-3">
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-xs uppercase tracking-wider">Rent PSF</p>
                <span className="badge badge-success text-xs">Above Market</span>
              </div>
              <div className="flex items-end mt-1">
                <p className="font-medium text-gray-900 text-lg">$24.40</p>
                <span className="text-xs text-success ml-2 flex items-center">
                  <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  +8% vs Market
                </span>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-xs uppercase tracking-wider">WALT</p>
                <span className="badge badge-success text-xs">Long-Term</span>
              </div>
              <div className="flex items-center mt-1">
                <svg className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="font-medium text-gray-900 text-lg">13 Yrs (Sep 37)</p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-xs uppercase tracking-wider">Rent Escalations</p>
                <span className="badge badge-primary text-xs">Annual</span>
              </div>
              <div className="flex items-center mt-1">
                <svg className="h-4 w-4 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <p className="font-medium text-gray-900 text-lg">3%</p>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 hover:bg-primary hover:bg-opacity-5 transition-colors duration-200">
              <div className="flex justify-between items-center">
                <p className="text-gray-500 text-xs uppercase tracking-wider">Mark-to-Market Opportunity</p>
                <span className="badge badge-success text-xs">Significant</span>
              </div>
              <div className="flex items-end mt-1">
                <p className="font-medium text-gray-900 text-lg">30%+</p>
                <span className="text-xs text-success ml-2 flex items-center">
                  <svg className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  High Potential
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Supply Pipeline and Sale Comparables */}
      <div className="grid grid-cols-1 gap-6 animate-slide-in" style={{animationDelay: '0.3s'}}>
        <div className="card bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
            <svg className="mr-2 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Supply Pipeline
            <span className="ml-2 text-xs bg-primary bg-opacity-10 text-primary px-2 py-1 rounded-full">2 Properties</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex p-4 rounded-lg border border-gray-100 hover:border-primary hover:shadow-sm transition-all duration-300">
              <div className="w-24 h-24 relative mr-4 flex-shrink-0 rounded-lg overflow-hidden shadow-sm">
                <Image 
                  src="/building1.svg" 
                  alt="640 Columbia" 
                  fill 
                  style={{objectFit: 'cover'}} 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-80 text-white text-xs py-1 px-2 text-center">Coming Soon</div>
              </div>
              <div>
                <p className="font-medium text-gray-900 flex items-center">
                  <svg className="h-4 w-4 mr-1 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  640 Columbia
                </p>
                <div className="mt-1 space-y-1">
                  <p className="text-sm text-gray-600 flex items-center">
                    <span className="w-24 text-xs text-gray-500">Submarket:</span>
                    <span className="font-medium text-gray-700">Brooklyn</span>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <span className="w-24 text-xs text-gray-500">Delivery:</span>
                    <span className="font-medium text-gray-700">Jun-25</span>
                    <span className="ml-2 text-xs text-warning bg-warning bg-opacity-10 px-1.5 py-0.5 rounded">12 mo</span>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <span className="w-24 text-xs text-gray-500">Owner:</span>
                    <span className="font-medium text-gray-700">CBREI</span>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <span className="w-24 text-xs text-gray-500">Size:</span>
                    <span className="font-medium text-gray-700">336,350 SF</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex p-4 rounded-lg border border-gray-100 hover:border-primary hover:shadow-sm transition-all duration-300">
              <div className="w-24 h-24 relative mr-4 flex-shrink-0 rounded-lg overflow-hidden shadow-sm">
                <Image 
                  src="/building2.svg" 
                  alt="WB Mason" 
                  fill 
                  style={{objectFit: 'cover'}} 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-primary bg-opacity-80 text-white text-xs py-1 px-2 text-center">Coming Soon</div>
              </div>
              <div>
                <p className="font-medium text-gray-900 flex items-center">
                  <svg className="h-4 w-4 mr-1 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  WB Mason
                </p>
                <div className="mt-1 space-y-1">
                  <p className="text-sm text-gray-600 flex items-center">
                    <span className="w-24 text-xs text-gray-500">Submarket:</span>
                    <span className="font-medium text-gray-700">Bronx</span>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <span className="w-24 text-xs text-gray-500">Delivery:</span>
                    <span className="font-medium text-gray-700">May-25</span>
                    <span className="ml-2 text-xs text-warning bg-warning bg-opacity-10 px-1.5 py-0.5 rounded">11 mo</span>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <span className="w-24 text-xs text-gray-500">Owner:</span>
                    <span className="font-medium text-gray-700">Link Logistics</span>
                  </p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <span className="w-24 text-xs text-gray-500">Size:</span>
                    <span className="font-medium text-gray-700">150,000 SF</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="card bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-800">
            <svg className="mr-2 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Sale Comparables
            <span className="ml-2 text-xs bg-primary bg-opacity-10 text-primary px-2 py-1 rounded-full">Recent Transactions</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col p-4 rounded-lg border border-gray-100 hover:border-primary hover:shadow-sm transition-all duration-300">
              <div className="w-full h-32 relative mb-3 rounded-lg overflow-hidden shadow-sm">
                <Image 
                  src="/building3.svg" 
                  alt="1 Debaun Road" 
                  fill 
                  style={{objectFit: 'cover'}} 
                />
                <div className="absolute top-0 right-0 bg-success text-white text-xs py-1 px-2 rounded-bl-md">Recent Sale</div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent py-2 px-3">
                  <p className="text-white text-xs font-medium">Class A Industrial</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-900 flex items-center">
                  <svg className="h-4 w-4 mr-1 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  1 Debaun Road
                </p>
                <div className="mt-1 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Submarket:</span>
                    <span className="text-sm font-medium text-gray-700">Millstone, NJ</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Date:</span>
                    <span className="text-sm font-medium text-gray-700 flex items-center">
                      Jun-24
                      <span className="ml-1 text-xs text-success bg-success bg-opacity-10 px-1.5 py-0.5 rounded">Recent</span>
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Size:</span>
                    <span className="text-sm font-medium text-gray-700">132,930 SF</span>
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-100">
                    <span className="text-xs text-gray-500">Price:</span>
                    <span className="text-sm font-medium text-success">$41,903,580</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Price PSF:</span>
                    <span className="text-sm font-medium text-success">$315.23</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col p-4 rounded-lg border border-gray-100 hover:border-primary hover:shadow-sm transition-all duration-300">
              <div className="w-full h-32 relative mb-3 rounded-lg overflow-hidden shadow-sm">
                <Image 
                  src="/building4.svg" 
                  alt="Baylis 495 Business Park" 
                  fill 
                  style={{objectFit: 'cover'}} 
                />
                <div className="absolute top-0 right-0 bg-success text-white text-xs py-1 px-2 rounded-bl-md">Recent Sale</div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent py-2 px-3">
                  <p className="text-white text-xs font-medium">Class B Industrial</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-900 flex items-center">
                  <svg className="h-4 w-4 mr-1 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Baylis 495 Business Park
                </p>
                <div className="mt-1 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Submarket:</span>
                    <span className="text-sm font-medium text-gray-700">Melville, NY</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Date:</span>
                    <span className="text-sm font-medium text-gray-700 flex items-center">
                      May-24
                      <span className="ml-1 text-xs text-success bg-success bg-opacity-10 px-1.5 py-0.5 rounded">Recent</span>
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Size:</span>
                    <span className="text-sm font-medium text-gray-700">103,500 SF</span>
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-100">
                    <span className="text-xs text-gray-500">Price:</span>
                    <span className="text-sm font-medium text-success">$44,000,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Price PSF:</span>
                    <span className="text-sm font-medium text-success">$425.12</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col p-4 rounded-lg border border-gray-100 hover:border-primary hover:shadow-sm transition-all duration-300">
              <div className="w-full h-32 relative mb-3 rounded-lg overflow-hidden shadow-sm">
                <Image 
                  src="/building5.svg" 
                  alt="Terminal Logistics Center" 
                  fill 
                  style={{objectFit: 'cover'}} 
                />
                <div className="absolute top-0 right-0 bg-primary text-white text-xs py-1 px-2 rounded-bl-md">Landmark</div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent py-2 px-3">
                  <p className="text-white text-xs font-medium">Class A Industrial</p>
                </div>
              </div>
              <div>
                <p className="font-medium text-gray-900 flex items-center">
                  <svg className="h-4 w-4 mr-1 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Terminal Logistics Center
                </p>
                <div className="mt-1 space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Submarket:</span>
                    <span className="text-sm font-medium text-gray-700">Queens, NY</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Date:</span>
                    <span className="text-sm font-medium text-gray-700">Mar-23</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Size:</span>
                    <span className="text-sm font-medium text-gray-700">336,000 SF</span>
                  </div>
                  <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-100">
                    <span className="text-xs text-gray-500">Price:</span>
                    <span className="text-sm font-medium text-success">$136,000,000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">Price PSF:</span>
                    <span className="text-sm font-medium text-success">$404.76</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealOverviewTab;
