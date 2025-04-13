import React from 'react';

const LandSales: React.FC = () => {
  // Sample data - updated based on user input
  const sales = [
    { id: 1, address: '1 Debaun Road', submarket: 'Millstone, NJ', date: 'Jun-24', sf: 132930, pp: 41903580, owner: 'CBREI', tenant: 'Berry Plastics' },
    { id: 2, address: 'Baylis 495 Business Park', submarket: 'Melville, NY', date: 'May-24', sf: 103500, pp: 44000000, owner: 'Cabot', tenant: null },
    { id: 3, address: '39 Edgeboro Road', submarket: 'Millstone, NJ', date: 'Oct-23', sf: 513240, pp: 165776520, owner: 'Link Logistics', tenant: 'FedEx' },
    { id: 4, address: 'Terminal Logistics Center', submarket: 'Queens, NY', date: 'Mar-23', sf: 336000, pp: 136000000, owner: 'Blackstone', tenant: null },
    // Add more examples if available or needed
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Sale Comparables</h2>
      <p className="text-sm text-gray-600 mb-4">Recent nearby property sales to benchmark potential value.</p>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-gray-700">
          <thead className="bg-gray-50 text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" className="px-4 py-2">Address</th>
              <th scope="col" className="px-4 py-2">Submarket</th>
              <th scope="col" className="px-4 py-2">Sale Date</th>
              <th scope="col" className="px-4 py-2 text-right">Size (SF)</th>
              <th scope="col" className="px-4 py-2 text-right">Sale Price ($)</th>
              <th scope="col" className="px-4 py-2 text-right">Price PSF ($)</th>
              <th scope="col" className="px-4 py-2">Owner</th>
              <th scope="col" className="px-4 py-2">Tenant</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => {
              const pricePSF = (sale.pp && sale.sf) ? (sale.pp / sale.sf).toFixed(2) : '-';
              return (
                <tr key={sale.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium text-gray-900">{sale.address}</td>
                  <td className="px-4 py-2">{sale.submarket}</td>
                  <td className="px-4 py-2">{sale.date}</td>
                  <td className="px-4 py-2 text-right">{sale.sf ? sale.sf.toLocaleString() : '-'}</td>
                  <td className="px-4 py-2 text-right">{sale.pp ? sale.pp.toLocaleString() : '-'}</td>
                  <td className="px-4 py-2 text-right">{pricePSF}</td>
                  <td className="px-4 py-2">{sale.owner || '-'}</td>
                  <td className="px-4 py-2">{sale.tenant || '-'}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {sales.length === 0 && (
         <p className="text-center text-gray-500 mt-4">No recent comparable sales found.</p>
      )}
    </div>
  );
};

export default LandSales;
