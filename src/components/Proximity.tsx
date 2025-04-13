import React from 'react';

// Sample data
const proximityData = [
  { id: 1, label: 'Interstate I-95', value: '2 miles', detail: 'Eastbound Access Ramp' },
  { id: 2, label: 'Port XYZ', value: '15 miles', detail: 'Major Container Terminal' },
  { id: 3, label: 'Major Tenant HQ (ABC Corp)', value: '0.5 miles', detail: 'Potential Synergy/Competition' },
  { id: 4, label: 'Regional Airport (XYZ Int\')', value: '8 miles', detail: 'Cargo & Passenger' },
  { id: 5, label: 'Rail Spur Access', value: 'Adjacent', detail: 'Direct Line Access' },
  { id: 6, label: 'Downtown Core', value: '5 miles', detail: 'Business & Amenities Hub' },
];

const Proximity: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Proximity Insights</h2>
      <p className="text-sm text-gray-600 mb-4">Key distances to relevant infrastructure, tenants, and hubs.</p>

      <dl className="divide-y divide-gray-200">
        {proximityData.map((item) => (
          <div key={item.id} className="py-3 flex justify-between items-center">
            <dt className="text-sm font-medium text-gray-700">
              {item.label}
              {item.detail && <span className="block text-xs text-gray-500 font-normal">({item.detail})</span>}
            </dt>
            <dd className="text-sm font-semibold text-gray-900">{item.value}</dd>
          </div>
        ))}
      </dl>

      {proximityData.length === 0 && (
         <p className="text-center text-gray-500 mt-4">Proximity data not available.</p>
      )}
    </div>
  );
};

export default Proximity;
