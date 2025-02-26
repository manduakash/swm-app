// components/regional-waste-map.jsx
import React from 'react';

const regions = [
    { id: 'north', name: 'North Region', wasteAmount: 1200, color: '#ff9999' },
    { id: 'south', name: 'South Region', wasteAmount: 1500, color: '#99ff99' },
    { id: 'east', name: 'East Region', wasteAmount: 1000, color: '#9999ff' },
    { id: 'west', name: 'West Region', wasteAmount: 1300, color: '#ffff99' },
];

export function RegionalWasteMap() {
    return (
        <div className="relative">
            <svg viewBox="0 0 400 400" className="w-full h-auto">
                {regions.map((region) => (
                    <g key={region.id}>
                        <rect
                            x={(regions.indexOf(region) % 2) * 200}
                            y={Math.floor(regions.indexOf(region) / 2) * 200}
                            width="200"
                            height="200"
                            fill={region.color}
                            stroke="#fff"
                            strokeWidth="2"
                        />
                        <text
                            x={(regions.indexOf(region) % 2) * 200 + 100}
                            y={Math.floor(regions.indexOf(region) / 2) * 200 + 100}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="#000"
                            fontSize="16"
                            fontWeight="bold"
                        >
                            {region.name}
                        </text>
                        <text
                            x={(regions.indexOf(region) % 2) * 200 + 100}
                            y={Math.floor(regions.indexOf(region) / 2) * 200 + 130}
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fill="#000"
                            fontSize="14"
                        >
                            {region.wasteAmount} tons
                        </text>
                    </g>
                ))}
            </svg>
            <div className="absolute top-2 right-2 bg-white p-2 rounded shadow">
                <h3 className="text-sm font-bold mb-1">Waste Amount (tons)</h3>
                {regions.map((region) => (
                    <div key={region.id} className="flex items-center text-xs mb-1">
                        <div className="w-3 h-3 mr-1" style={{ backgroundColor: region.color }}></div>
                        <span>{region.name}: {region.wasteAmount}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}