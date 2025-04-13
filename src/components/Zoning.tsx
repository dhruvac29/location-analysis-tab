import React from 'react';

// Sample data
const zoningInfo = {
  currentZone: 'I-2',
  zoneDescription: 'General Industrial District',
  overlays: [
    { name: 'Transit Oriented Development (TOD)', codeSection: '12.34.A', link: '#' },
    { name: 'Airport Height Restriction Zone', codeSection: '15.10.B', link: '#' },
  ],
  municipalLink: '#',
};

const Zoning: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Zoning & Entitlements</h2>
      <p className="text-sm text-gray-600 mb-4">Summary of current zoning designations and applicable overlays.</p>

      <div className="space-y-4">
        <div>
          <h3 className="text-md font-semibold text-gray-700">Current Zoning</h3>
          <p className="text-sm text-gray-600">
            <span className="font-medium">{zoningInfo.currentZone}:</span> {zoningInfo.zoneDescription}
          </p>
        </div>

        {zoningInfo.overlays.length > 0 && (
          <div>
            <h3 className="text-md font-semibold text-gray-700">Overlays</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 pl-4">
              {zoningInfo.overlays.map((overlay) => (
                <li key={overlay.name}>
                  {overlay.name}
                  {overlay.codeSection && (
                    <a href={overlay.link || '#'} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-2 text-xs">(Code: {overlay.codeSection})</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div>
          <a href={zoningInfo.municipalLink || '#'} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline">
            View Full Municipal Zoning Code
            <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
          </a>
        </div>
      </div>

      {(!zoningInfo.currentZone && zoningInfo.overlays.length === 0) && (
         <p className="text-center text-gray-500 mt-4">Zoning information not available.</p>
      )}
    </div>
  );
};

export default Zoning;
