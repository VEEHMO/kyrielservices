'use client';

import { motion } from 'framer-motion';

const DataAnalyticsDashboard = () => {
  return (
    <div className="data-analytics-dashboard-container w-full h-full flex flex-col">
      <div className="dashboard-header flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Data Analytics</h3>
        <div className="dashboard-controls flex gap-2">
          <div className="control-dot w-3 h-3 rounded-full bg-green-500" />
          <div className="control-dot w-3 h-3 rounded-full bg-yellow-500" />
          <div className="control-dot w-3 h-3 rounded-full bg-red-500" />
        </div>
      </div>
      
      <div className="dashboard-content flex-1 flex flex-col gap-6">
        <div className="heat-map flex-1 bg-white rounded-lg p-4 border border-gray-200">
          <div className="map-header mb-4">
            <h4 className="text-sm font-semibold text-gray-700">User Engagement by Region</h4>
          </div>
          
          <div className="map-container flex justify-center items-center h-32">
            <div className="france-map relative">
              <svg viewBox="0 0 200 200" className="map-svg w-32 h-32">
                <path 
                  d="M80,40 C100,20 140,30 160,50 C180,70 190,100 170,140 C150,180 110,190 80,160 C50,130 40,90 60,60 C65,50 70,45 80,40Z" 
                  className="map-path fill-gray-200 stroke-gray-400 stroke-1" 
                />
                <motion.circle 
                  cx="90" cy="60" r="6" 
                  className="hotspot high fill-red-500" 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  transition={{ delay: 0.5 }} 
                />
                <motion.circle 
                  cx="130" cy="80" r="4" 
                  className="hotspot medium fill-orange-500" 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  transition={{ delay: 0.7 }} 
                />
                <motion.circle 
                  cx="100" cy="120" r="5" 
                  className="hotspot high fill-red-500" 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  transition={{ delay: 0.9 }} 
                />
                <motion.circle 
                  cx="70" cy="100" r="3" 
                  className="hotspot low fill-green-500" 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  transition={{ delay: 1.1 }} 
                />
                <motion.circle 
                  cx="150" cy="110" r="4" 
                  className="hotspot medium fill-orange-500" 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  transition={{ delay: 1.3 }} 
                />
              </svg>
            </div>
          </div>
          
          <div className="map-legend flex justify-center gap-6 mt-4">
            <div className="legend-item flex items-center gap-2">
              <div className="legend-color w-3 h-3 rounded-full bg-red-500" />
              <div className="legend-label text-xs text-gray-600">High</div>
            </div>
            <div className="legend-item flex items-center gap-2">
              <div className="legend-color w-3 h-3 rounded-full bg-orange-500" />
              <div className="legend-label text-xs text-gray-600">Medium</div>
            </div>
            <div className="legend-item flex items-center gap-2">
              <div className="legend-color w-3 h-3 rounded-full bg-green-500" />
              <div className="legend-label text-xs text-gray-600">Low</div>
            </div>
          </div>
        </div>
        
        <div className="data-table flex-1 bg-white rounded-lg p-4 border border-gray-200">
          <div className="table-header mb-4">
            <h4 className="text-sm font-semibold text-gray-700">Top Performing Metrics</h4>
          </div>
          
          <table className="analytics-table w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 text-gray-600 font-medium">Metric</th>
                <th className="text-left py-2 text-gray-600 font-medium">Value</th>
                <th className="text-left py-2 text-gray-600 font-medium">Change</th>
                <th className="text-left py-2 text-gray-600 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <motion.tr initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                <td className="py-3 text-gray-800">Page Views</td>
                <td className="py-3 text-gray-800 font-medium">24,586</td>
                <td className="py-3 text-green-600 font-medium">+18.7%</td>
                <td className="py-3"><span className="status-badge px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Good</span></td>
              </motion.tr>
              <motion.tr initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                <td className="py-3 text-gray-800">Conversion Rate</td>
                <td className="py-3 text-gray-800 font-medium">3.8%</td>
                <td className="py-3 text-green-600 font-medium">+2.1%</td>
                <td className="py-3"><span className="status-badge px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Good</span></td>
              </motion.tr>
              <motion.tr initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <td className="py-3 text-gray-800">Bounce Rate</td>
                <td className="py-3 text-gray-800 font-medium">42.3%</td>
                <td className="py-3 text-red-600 font-medium">+5.4%</td>
                <td className="py-3"><span className="status-badge px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Warning</span></td>
              </motion.tr>
              <motion.tr initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                <td className="py-3 text-gray-800">Avg. Time on Page</td>
                <td className="py-3 text-gray-800 font-medium">2:45</td>
                <td className="py-3 text-green-600 font-medium">+0:22</td>
                <td className="py-3"><span className="status-badge px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Good</span></td>
              </motion.tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataAnalyticsDashboard; 