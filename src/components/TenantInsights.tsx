import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface TenantData {
  name: string;
  logo: string;
  stockSymbol?: string;
  creditRating?: string;
  recentNews: {
    title: string;
    date: string;
    source: string;
    url: string;
    sentiment: 'positive' | 'negative' | 'neutral';
  }[];
  financialHealth: {
    status: 'strong' | 'stable' | 'concerning' | 'unknown';
    revenue?: string;
    revenueGrowth?: string;
    marketCap?: string;
    employees?: number;
  };
  leaseDetails: {
    expiryDate: string;
    monthsRemaining: number;
    currentRent: string;
    marketRent: string;
    rentGap: number;
    renewalProbability: number;
    rollRisk: 'high' | 'medium' | 'low';
  };
}

const TenantInsights: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [tenantData, setTenantData] = useState<TenantData | null>(null);
  const [stockData, setStockData] = useState<any>(null);

  // Simulate API call to get tenant data
  useEffect(() => {
    // In a real application, this would be an API call to a service like S&P Global, 
    // CompStak for lease comps, or Bloomberg for financial data
    const fetchTenantData = async () => {
      setLoading(true);
      
      // Simulating API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data that would come from external APIs
      const data: TenantData = {
        name: 'Amazon',
        logo: '/images/amazon-logo.png',
        stockSymbol: 'AMZN',
        creditRating: 'AA',
        recentNews: [
          {
            title: 'Amazon Expands Logistics Network with 20 New Facilities',
            date: '2025-03-28',
            source: 'Wall Street Journal',
            url: 'https://wsj.com/articles/amazon-expands-logistics',
            sentiment: 'positive'
          },
          {
            title: 'Amazon Reports Strong Q1 Earnings, Beats Expectations',
            date: '2025-04-02',
            source: 'CNBC',
            url: 'https://cnbc.com/amazon-q1-earnings',
            sentiment: 'positive'
          },
          {
            title: 'Amazon Announces Restructuring of Warehouse Operations',
            date: '2025-04-10',
            source: 'Bloomberg',
            url: 'https://bloomberg.com/news/amazon-restructuring',
            sentiment: 'neutral'
          }
        ],
        financialHealth: {
          status: 'strong',
          revenue: '$513.98B',
          revenueGrowth: '12.3%',
          marketCap: '$1.85T',
          employees: 1540000
        },
        leaseDetails: {
          expiryDate: 'Sep 2037',
          monthsRemaining: 148,
          currentRent: '$24.40/SF',
          marketRent: '$32.50/SF',
          rentGap: 33.2,
          renewalProbability: 85,
          rollRisk: 'low'
        }
      };
      
      setTenantData(data);
      
      // Simulate fetching stock data
      const mockStockData = {
        currentPrice: 182.75,
        priceChange: 3.42,
        percentChange: 1.91,
        weekHigh: 186.57,
        weekLow: 142.32,
        volume: '23.4M',
        peRatio: 62.8,
        marketCap: '$1.85T',
        chart: [
          { date: '2025-01', price: 155.42 },
          { date: '2025-02', price: 162.18 },
          { date: '2025-03', price: 170.35 },
          { date: '2025-04', price: 182.75 }
        ]
      };
      
      setStockData(mockStockData);
      setLoading(false);
    };

    fetchTenantData();
  }, []);

  const getSentimentColor = (sentiment: 'positive' | 'negative' | 'neutral') => {
    switch(sentiment) {
      case 'positive': return 'bg-green-100 text-green-800';
      case 'negative': return 'bg-red-100 text-red-800';
      case 'neutral': 
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const getHealthStatusColor = (status: 'strong' | 'stable' | 'concerning' | 'unknown') => {
    switch(status) {
      case 'strong': return 'text-green-600';
      case 'stable': return 'text-blue-600';
      case 'concerning': return 'text-orange-600';
      default: 
      case 'unknown': return 'text-gray-600';
    }
  };

  const getRiskColor = (risk: 'high' | 'medium' | 'low') => {
    switch(risk) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
    }
  };

  const getMonthsLabel = (months: number) => {
    if (months < 12) {
      return `${months} months`;
    } else {
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;
      return remainingMonths > 0 
        ? `${years} years, ${remainingMonths} months` 
        : `${years} years`;
    }
  };

  if (loading) {
    return (
      <div className="animate-pulse p-6 bg-white rounded-lg shadow-md">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3 mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="h-40 bg-gray-200 rounded"></div>
          <div className="h-40 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!tenantData) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <p className="text-gray-500">No tenant data available.</p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 flex items-center">
            <svg className="mr-2 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Tenant Insights
          </h2>
          <p className="text-sm text-gray-600">Comprehensive analysis of tenant financial health and lease risk.</p>
        </div>
        <div className="flex space-x-2">
          <button className="text-xs bg-primary text-white px-3 py-1.5 rounded-md hover:bg-primary-dark transition-colors flex items-center">
            <svg className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Export PDF
          </button>
          <button className="text-xs border border-gray-300 px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors flex items-center">
            <svg className="h-3.5 w-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            View Source
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Tenant Profile */}
        <div className="col-span-1 bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-medium text-gray-800">Tenant Profile</h3>
          </div>
          <div className="p-4">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 relative mr-3 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
                <div className="w-full h-full flex items-center justify-center">
                  <Image 
                    src={tenantData.logo}
                    alt={tenantData.name}
                    width={48}
                    height={48}
                    style={{objectFit: 'contain'}}
                    priority
                  />
                </div>
              </div>
              <div>
                <h4 className="text-lg font-medium">{tenantData.name}</h4>
                <div className="flex items-center">
                  {tenantData.stockSymbol && (
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded mr-2">
                      {tenantData.stockSymbol}
                    </span>
                  )}
                  {tenantData.creditRating && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded">
                      Credit: {tenantData.creditRating}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500">Financial Health</p>
                <p className={`font-medium ${getHealthStatusColor(tenantData.financialHealth.status)}`}>
                  {tenantData.financialHealth.status.charAt(0).toUpperCase() + tenantData.financialHealth.status.slice(1)}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-gray-500">Annual Revenue</p>
                  <p className="font-medium">{tenantData.financialHealth.revenue}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Growth</p>
                  <p className="font-medium text-green-600">+{tenantData.financialHealth.revenueGrowth}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Market Cap</p>
                  <p className="font-medium">{tenantData.financialHealth.marketCap}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Employees</p>
                  <p className="font-medium">{tenantData.financialHealth.employees?.toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lease Risk Analysis */}
        <div className="col-span-1 bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-medium text-gray-800">Lease Risk Analysis</h3>
          </div>
          <div className="p-4">
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-gray-500">Renewal Probability</span>
                <span className="text-xs font-medium">{tenantData.leaseDetails.renewalProbability}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div 
                  className="bg-green-500 h-1.5 rounded-full" 
                  style={{ width: `${tenantData.leaseDetails.renewalProbability}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 rounded-lg bg-gray-50">
                <div>
                  <p className="text-xs text-gray-500">Lease Expiry</p>
                  <p className="font-medium">{tenantData.leaseDetails.expiryDate}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Time Remaining</p>
                  <p className="font-medium">{getMonthsLabel(tenantData.leaseDetails.monthsRemaining)}</p>
                </div>
              </div>

              <div className="flex justify-between items-center p-2 rounded-lg bg-gray-50">
                <div>
                  <p className="text-xs text-gray-500">Current Rent</p>
                  <p className="font-medium">{tenantData.leaseDetails.currentRent}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Market Rent</p>
                  <p className="font-medium">{tenantData.leaseDetails.marketRent}</p>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-green-50 border-l-2 border-green-500">
                <p className="text-xs text-gray-700">Mark-to-Market Opportunity</p>
                <p className="font-medium text-green-700">+{tenantData.leaseDetails.rentGap}% upside potential</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-xs text-gray-500">Roll Risk</p>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getRiskColor(tenantData.leaseDetails.rollRisk)}`}>
                  {tenantData.leaseDetails.rollRisk.toUpperCase()}
                </span>
              </div>

              {tenantData.leaseDetails.monthsRemaining <= 12 && (
                <div className="p-2 rounded-lg bg-yellow-50 border-l-2 border-yellow-500">
                  <p className="text-xs font-medium text-yellow-700">⚠️ Lease expires within 12 months</p>
                  <p className="text-xs text-yellow-700">Proactive renewal discussions recommended</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Recent News */}
        <div className="col-span-1 bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-medium text-gray-800">Recent Tenant News</h3>
          </div>
          <div className="p-4">
            <div className="space-y-3">
              {tenantData.recentNews.map((news, index) => (
                <div key={index} className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-medium">{news.title}</h4>
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${getSentimentColor(news.sentiment)}`}>
                      {news.sentiment}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{news.source}</span>
                    <span>{news.date}</span>
                  </div>
                  <a 
                    href={news.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs text-primary hover:underline mt-1 inline-block"
                  >
                    Read more →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stock Performance */}
      {stockData && tenantData.stockSymbol && (
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-medium text-gray-800">Stock Performance ({tenantData.stockSymbol})</h3>
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-2xl font-bold">${stockData.currentPrice}</p>
                <div className={`flex items-center ${stockData.priceChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {stockData.priceChange >= 0 ? (
                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                  )}
                  <span className="text-sm font-medium">
                    {stockData.priceChange >= 0 ? '+' : ''}{stockData.priceChange} ({stockData.percentChange}%)
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
                <div>
                  <p className="text-xs text-gray-500">52-Week High</p>
                  <p className="font-medium">${stockData.weekHigh}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">52-Week Low</p>
                  <p className="font-medium">${stockData.weekLow}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Volume</p>
                  <p className="font-medium">{stockData.volume}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">P/E Ratio</p>
                  <p className="font-medium">{stockData.peRatio}</p>
                </div>
              </div>
            </div>
            <div className="h-40 bg-gray-50 rounded-lg p-2 flex items-end">
              {/* This would be a real chart in production */}
              <div className="w-full h-full flex items-end space-x-1">
                {stockData.chart.map((point: any, index: number) => {
                  const height = (point.price - 150) / (190 - 150) * 100;
                  return (
                    <div key={index} className="flex-1 flex flex-col items-center">
                      <div 
                        className="w-full bg-primary rounded-t" 
                        style={{ height: `${height}%` }}
                      ></div>
                      <span className="text-xs text-gray-500 mt-1">{point.date}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <p className="text-xs text-gray-500 text-center mt-2">
              Data sourced from Yahoo Finance. Last updated: April 13, 2025
            </p>
          </div>
        </div>
      )}

      {/* Market Rent Comparison */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h3 className="font-medium text-gray-800">Market Rent Benchmarking</h3>
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-600">
              Current lease rate compared to similar properties in the submarket
            </p>
            <p className="text-xs text-gray-500">
              Data sourced from CompStak, CoStar
            </p>
          </div>
          
          <div className="relative h-12 bg-gray-100 rounded-lg mb-4">
            <div className="absolute inset-y-0 left-0 bg-blue-500 rounded-l-lg" style={{ width: '25%' }}></div>
            <div className="absolute inset-y-0 bg-green-500" style={{ left: '25%', width: '50%' }}></div>
            <div className="absolute inset-y-0 right-0 bg-red-500 rounded-r-lg" style={{ width: '25%' }}></div>
            
            <div className="absolute inset-0 flex items-center justify-between px-3 text-xs text-white font-medium">
              <span>Below Market</span>
              <span>Market Rate</span>
              <span>Above Market</span>
            </div>
            
            {/* Current rent marker */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-black" 
              style={{ left: '40%' }}
            >
              <div className="absolute -top-6 -translate-x-1/2 whitespace-nowrap">
                <span className="text-xs font-medium bg-black text-white px-1.5 py-0.5 rounded">
                  Current: $24.40
                </span>
              </div>
            </div>
            
            {/* Market average marker */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-gray-800" 
              style={{ left: '60%' }}
            >
              <div className="absolute -bottom-6 -translate-x-1/2 whitespace-nowrap">
                <span className="text-xs font-medium bg-gray-800 text-white px-1.5 py-0.5 rounded">
                  Market Avg: $32.50
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500">Submarket Low</p>
              <p className="font-medium">$19.75/SF</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500">Submarket Average</p>
              <p className="font-medium">$32.50/SF</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-500">Submarket High</p>
              <p className="font-medium">$45.20/SF</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantInsights;
