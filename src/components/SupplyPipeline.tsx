import React from 'react';
import Image from 'next/image';

interface Development {
  id: number;
  name: string;
  submarket: string;
  deliveryDate: string;
  sf: number;
  owner: string;
  tenant: string | null;
  risk: string | null;
  image?: string;
  status?: 'Planned' | 'Under Construction' | 'Pre-Leasing' | 'Completed';
  distance?: number;
  completionPercentage?: number;
}

const SupplyPipeline: React.FC = () => {
  // Sample data - updated based on user input
  const developments: Development[] = [
    { 
      id: 1, 
      name: '640 Columbia', 
      submarket: 'Brooklyn', 
      deliveryDate: 'Jun-25', 
      sf: 336350, 
      owner: 'Betnal Green', 
      tenant: 'Dr. Pepper', 
      risk: null,
      image: '/images/buildings/building1.jpg',
      status: 'Under Construction',
      distance: 1.2,
      completionPercentage: 35
    },
    { 
      id: 2, 
      name: 'WB Mason', 
      submarket: 'Bronx', 
      deliveryDate: 'May-25', 
      sf: 150000, 
      owner: 'Goldman', 
      tenant: 'Do & Co', 
      risk: 'Increased competition in adjacent market',
      image: '/images/buildings/building2.jpg',
      status: 'Planned',
      distance: 2.5,
      completionPercentage: 10
    },
    { 
      id: 3, 
      name: 'Terminal Logistics Center', 
      submarket: 'Queens', 
      deliveryDate: 'Mar-26', 
      sf: 336000, 
      owner: 'Triangle Equities', 
      tenant: null, 
      risk: 'Potential oversupply in submarket',
      image: '/images/buildings/building5.jpg',
      status: 'Pre-Leasing',
      distance: 3.7,
      completionPercentage: 65
    },
  ];

  const getStatusColor = (status: string): string => {
    switch(status) {
      case 'Planned': return 'bg-blue-100 text-blue-800';
      case 'Under Construction': return 'bg-yellow-100 text-yellow-800';
      case 'Pre-Leasing': return 'bg-purple-100 text-purple-800';
      case 'Completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getMonthsAway = (deliveryDate: string): number => {
    const [month, year] = deliveryDate.split('-');
    const months = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };
    
    const targetDate = new Date(parseInt(`20${year}`), months[month as keyof typeof months], 1);
    const currentDate = new Date();
    
    return (targetDate.getFullYear() - currentDate.getFullYear()) * 12 + 
           (targetDate.getMonth() - currentDate.getMonth());
  };

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 flex items-center">
            <svg className="mr-2 h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Supply Pipeline
          </h2>
          <p className="text-sm text-gray-600">Overview of nearby developments impacting the local market supply.</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500">Filter by:</span>
          <select className="text-xs border border-gray-300 rounded-md px-2 py-1 bg-white">
            <option>All Submarkets</option>
            <option>Brooklyn</option>
            <option>Bronx</option>
            <option>Queens</option>
          </select>
          <select className="text-xs border border-gray-300 rounded-md px-2 py-1 bg-white">
            <option>All Statuses</option>
            <option>Planned</option>
            <option>Under Construction</option>
            <option>Pre-Leasing</option>
            <option>Completed</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {developments.map((dev) => (
          <div key={dev.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-40 bg-gray-100">
              <div className="w-full h-full">
                <Image 
                  src={dev.image || '/images/building-placeholder.jpg'} 
                  alt={dev.name} 
                  width={400}
                  height={160}
                  style={{objectFit: 'cover'}} 
                  className="w-full h-full"
                  priority
                />
              </div>
              <div className="absolute top-0 right-0 m-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(dev.status || '')}`}>
                  {dev.status}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
                <h3 className="text-white font-medium">{dev.name}</h3>
                <p className="text-white text-sm opacity-90">{dev.submarket}</p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <svg className="h-4 w-4 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">{dev.deliveryDate}</span>
                  <span className="ml-2 text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded">
                    {getMonthsAway(dev.deliveryDate)} mo
                  </span>
                </div>
                <div className="flex items-center">
                  <svg className="h-4 w-4 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm">{dev.distance} mi</span>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Construction Progress</span>
                  <span>{dev.completionPercentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div 
                    className="bg-primary h-1.5 rounded-full" 
                    style={{ width: `${dev.completionPercentage}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-3">
                <div>
                  <p className="text-xs text-gray-500">Size</p>
                  <p className="font-medium">{dev.sf.toLocaleString()} SF</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Owner</p>
                  <p className="font-medium">{dev.owner}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Tenant</p>
                  <p className="font-medium">{dev.tenant || 'Not Leased'}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Est. Completion</p>
                  <p className="font-medium">{dev.deliveryDate}</p>
                </div>
              </div>
              
              {dev.risk && (
                <div className="mt-3 p-2 bg-orange-50 border-l-2 border-orange-500 text-xs text-orange-700">
                  <p className="font-medium mb-1">Potential Risk:</p>
                  <p>{dev.risk}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
        <table className="w-full text-left text-sm text-gray-700">
          <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" className="px-4 py-3 font-medium">Project Name</th>
              <th scope="col" className="px-4 py-3 font-medium">Submarket</th>
              <th scope="col" className="px-4 py-3 font-medium">Status</th>
              <th scope="col" className="px-4 py-3 font-medium">Est. Delivery</th>
              <th scope="col" className="px-4 py-3 font-medium text-right">Size (SF)</th>
              <th scope="col" className="px-4 py-3 font-medium">Owner</th>
              <th scope="col" className="px-4 py-3 font-medium">Tenant</th>
              <th scope="col" className="px-4 py-3 font-medium">Potential Risk</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {developments.map((dev) => (
              <tr key={dev.id} className="bg-white hover:bg-gray-50 transition-colors duration-200">
                <td className="px-4 py-3 font-medium text-gray-900">{dev.name}</td>
                <td className="px-4 py-3">{dev.submarket}</td>
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(dev.status || '')}`}>
                    {dev.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    {dev.deliveryDate}
                    <span className="ml-2 text-xs bg-gray-100 text-gray-700 px-1.5 py-0.5 rounded">
                      {getMonthsAway(dev.deliveryDate)} mo
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3 text-right font-medium">{dev.sf ? dev.sf.toLocaleString() : '-'}</td>
                <td className="px-4 py-3">{dev.owner || '-'}</td>
                <td className="px-4 py-3">{dev.tenant || 'Not Leased'}</td>
                <td className={`px-4 py-3 ${dev.risk ? 'text-orange-600' : ''}`}>
                  {dev.risk || '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {developments.length === 0 && (
         <div className="text-center py-8 bg-gray-50 rounded-lg border border-gray-200 mt-4">
           <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
           </svg>
           <p className="mt-2 text-gray-500">No significant nearby developments identified.</p>
           <button className="mt-3 text-sm text-primary hover:text-primary-dark font-medium">Add New Development</button>
         </div>
      )}
    </div>
  );
};

export default SupplyPipeline;
