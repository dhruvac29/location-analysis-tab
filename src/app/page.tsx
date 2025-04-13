'use client'; // Need 'use client' for Radix Tabs

import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/image';
import LocationAnalysisTab from "@/components/LocationAnalysisTab";
import DealOverviewTab from "@/components/DealOverviewTab";
import TenantInsights from "@/components/TenantInsights";
import SupplyPipeline from "@/components/SupplyPipeline";
import { exportDealOverviewToPdf, getSampleDealOverviewData } from "@/utils/pdfExport";

export default function Home() {
  // Define styles for the top-level tabs
  const topTabStyle = "px-4 py-4 text-sm font-medium text-gray-700 border-b-2 border-transparent data-[state=active]:text-blue-600 data-[state=active]:border-blue-600 focus:outline-none transition-all";
  const topTabContentStyle = "pt-6 focus:outline-none"; // Added focus style
  
  // Handle PDF export
  const handleExportPdf = () => {
    const data = getSampleDealOverviewData();
    exportDealOverviewToPdf(data, 'thor-equities-deal-overview.pdf');
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Top navigation bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              {/* Back button */}
              <div className="flex-shrink-0 flex items-center">
                <button className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </button>
              </div>
              
              {/* Main navigation */}
              <nav className="ml-6 flex space-x-8">
                <a href="#" className="border-b-2 border-primary text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium transition-all duration-200">
                  Deal Overview
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium transition-all duration-200">
                  Workshop
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium transition-all duration-200">
                  Pipeline
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 inline-flex items-center px-1 pt-1 text-sm font-medium transition-all duration-200">
                  Settings
                </a>
              </nav>
            </div>
            
            {/* Search and profile */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleExportPdf}
                className="flex items-center px-3 py-1.5 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors text-xs font-medium"
              >
                <svg className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Export PDF
              </button>
              <div className="flex-shrink-0 relative">
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full text-sm placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary transition-all duration-200" placeholder="Ask me anything!" />
                </div>
              </div>
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-primary bg-opacity-10 flex items-center justify-center shadow-sm hover:shadow transition-all duration-200 cursor-pointer">
                  <span className="text-xs font-medium text-primary">SD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-start mb-8 animate-fade-in">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Deal Overview</h1>
            <p className="text-sm text-gray-500">Last updated: April 13, 2025</p>
          </div>
          <div>
            <div className="text-right mb-3">
              <span className="text-sm text-gray-600 font-medium">Underwriting Model</span>
              <div className="flex items-center justify-end text-sm text-gray-600 bg-white px-3 py-1.5 rounded-md shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-all duration-200 mt-1">
                <svg className="mr-2 h-4 w-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Industrial.Template.v2.4.xlsx</span>
                <svg className="ml-2 h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="btn btn-primary px-4 py-2 text-xs font-medium flex items-center">
                <svg className="mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Export to Excel
              </button>
              <button className="btn btn-secondary px-4 py-2 text-xs font-medium flex items-center">
                <svg className="mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Generate PowerPoint
              </button>
            </div>
          </div>
        </div>

        {/* Top-level Tabs for navigation */}
        <Tabs.Root defaultValue="overview" className="w-full">
          <Tabs.List className="border-b border-gray-200 flex overflow-x-auto no-scrollbar" aria-label="Deal sections">
            <Tabs.Trigger value="overview" className={`${topTabStyle} flex items-center`}>
              <svg className="mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Deal Overview
            </Tabs.Trigger>
            <Tabs.Trigger value="location" className={`${topTabStyle} flex items-center`}>
              <svg className="mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Location Analysis
            </Tabs.Trigger>
            <Tabs.Trigger value="keyAssumptions" className={`${topTabStyle} flex items-center`}>
              <svg className="mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Key Assumptions
            </Tabs.Trigger>
            <Tabs.Trigger value="marketAnalysis" className={`${topTabStyle} flex items-center`}>
              <svg className="mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
              Market Analysis
            </Tabs.Trigger>
            <Tabs.Trigger value="leaseAnalysis" className={`${topTabStyle} flex items-center`}>
              <svg className="mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Lease Analysis
            </Tabs.Trigger>
            <Tabs.Trigger value="tenantInsights" className={`${topTabStyle} flex items-center`}>
              <svg className="mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Tenant Insights
            </Tabs.Trigger>
            <Tabs.Trigger value="supplyPipeline" className={`${topTabStyle} flex items-center`}>
              <svg className="mr-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Supply Pipeline
            </Tabs.Trigger>
          </Tabs.List>

          {/* Content for Deal Overview */}
          <Tabs.Content value="overview" className={`${topTabContentStyle} animate-fade-in`}>
            <DealOverviewTab />
          </Tabs.Content>

          {/* Content for Location Analysis - This component already has its own internal tabs */}
          <Tabs.Content value="location" className={`${topTabContentStyle} animate-fade-in`}>
            <LocationAnalysisTab />
          </Tabs.Content>

          {/* Placeholder content for other tabs */}
          <Tabs.Content value="keyAssumptions" className={`${topTabContentStyle} animate-fade-in`}>
            <div className="p-6 bg-white rounded-lg shadow-md card">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <svg className="mr-2 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Key Assumptions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card p-4 hover:border-primary hover:border transition-all duration-200">
                  <h3 className="text-md font-semibold mb-2 text-gray-700">Financial Assumptions</h3>
                  <p className="text-gray-600 mb-4">Key financial assumptions and projections for this property.</p>
                  <span className="badge badge-primary">Coming Soon</span>
                </div>
                <div className="card p-4 hover:border-primary hover:border transition-all duration-200">
                  <h3 className="text-md font-semibold mb-2 text-gray-700">Market Assumptions</h3>
                  <p className="text-gray-600 mb-4">Market-related assumptions affecting the property value.</p>
                  <span className="badge badge-primary">Coming Soon</span>
                </div>
              </div>
            </div>
          </Tabs.Content>
          
          <Tabs.Content value="marketAnalysis" className={`${topTabContentStyle} animate-fade-in`}>
            <div className="p-6 bg-white rounded-lg shadow-md card">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <svg className="mr-2 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
                Market Analysis
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card p-4 hover:border-primary hover:border transition-all duration-200">
                  <h3 className="text-md font-semibold mb-2 text-gray-700">Market Trends</h3>
                  <p className="text-gray-600 mb-4">Analysis of current market trends affecting this property.</p>
                  <span className="badge badge-primary">Coming Soon</span>
                </div>
                <div className="card p-4 hover:border-primary hover:border transition-all duration-200">
                  <h3 className="text-md font-semibold mb-2 text-gray-700">Competitive Analysis</h3>
                  <p className="text-gray-600 mb-4">Comparison with similar properties in the market.</p>
                  <span className="badge badge-primary">Coming Soon</span>
                </div>
              </div>
            </div>
          </Tabs.Content>
          
          <Tabs.Content value="leaseAnalysis" className={`${topTabContentStyle} animate-fade-in`}>
            <div className="p-6 bg-white rounded-lg shadow-md card">
              <h2 className="text-xl font-semibold mb-4 text-gray-800 flex items-center">
                <svg className="mr-2 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Lease Analysis
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card p-4 hover:border-primary hover:border transition-all duration-200">
                  <h3 className="text-md font-semibold mb-2 text-gray-700">Lease Terms</h3>
                  <p className="text-gray-600 mb-4">Analysis of current lease terms and conditions.</p>
                  <span className="badge badge-primary">Coming Soon</span>
                </div>
                <div className="card p-4 hover:border-primary hover:border transition-all duration-200">
                  <h3 className="text-md font-semibold mb-2 text-gray-700">Tenant Analysis</h3>
                  <p className="text-gray-600 mb-4">Detailed analysis of current tenants and their financial stability.</p>
                  <span className="badge badge-primary">Coming Soon</span>
                </div>
              </div>
            </div>
          </Tabs.Content>

          <Tabs.Content value="tenantInsights" className={`${topTabContentStyle} animate-fade-in`}>
            <TenantInsights />
          </Tabs.Content>

          <Tabs.Content value="supplyPipeline" className={`${topTabContentStyle} animate-fade-in`}>
            <SupplyPipeline />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
}
