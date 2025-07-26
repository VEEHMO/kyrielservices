'use client';

import { motion } from 'framer-motion';

const AnalyticsDashboard = () => {
  return (
    <div className="analytics-dashboard-container w-full h-full flex flex-col">
      <div className="analytics-header flex justify-between items-center mb-6">
        <h3 className="analytics-title text-lg font-semibold text-gray-800">Analytics Overview</h3>
        <div className="analytics-dots flex gap-2">
          <div className="dot w-3 h-3 rounded-full bg-green-500"></div>
          <div className="dot w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="dot w-3 h-3 rounded-full bg-red-500"></div>
        </div>
      </div>
      
      <div className="analytics-metrics flex gap-6 mb-8 flex-1">
        <div className="metric-item flex-1">
          <div className="metric-label text-sm text-gray-600 mb-2">Total Visits</div>
          <div className="metric-value text-2xl font-bold text-gray-800 mb-3">86.4K</div>
          <div className="metric-chart h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="chart-line h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>
        </div>
        
        <div className="metric-item flex-1">
          <div className="metric-label text-sm text-gray-600 mb-2">Conversion Rate</div>
          <div className="metric-value text-2xl font-bold text-gray-800 mb-3">24.8%</div>
          <div className="metric-chart h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="chart-line h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "75%" }}
              transition={{ duration: 1.5, delay: 0.7 }}
            />
          </div>
        </div>
      </div>
      
      <div className="analytics-distribution flex-1 flex flex-col gap-6">
        <div className="distribution-section">
          <h4 className="distribution-title text-sm font-semibold text-gray-700 mb-4">Channel Distribution</h4>
          <div className="distribution-items space-y-3">
            <div className="distribution-item flex items-center gap-3">
              <div className="distribution-color w-4 h-4 rounded-full bg-blue-500"></div>
              <span className="text-sm text-gray-600 flex-1">Direct</span>
              <div className="distribution-toggle w-6 h-4 bg-gray-300 rounded-full relative">
                <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 left-0.5"></div>
              </div>
            </div>
            <div className="distribution-item flex items-center gap-3">
              <div className="distribution-color w-4 h-4 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-600 flex-1">Organic</span>
              <div className="distribution-toggle w-6 h-4 bg-gray-300 rounded-full relative">
                <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 left-0.5"></div>
              </div>
            </div>
            <div className="distribution-item flex items-center gap-3">
              <div className="distribution-color w-4 h-4 rounded-full bg-orange-500"></div>
              <span className="text-sm text-gray-600 flex-1">Social</span>
              <div className="distribution-toggle w-6 h-4 bg-gray-300 rounded-full relative">
                <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 left-0.5"></div>
              </div>
            </div>
            <div className="distribution-item flex items-center gap-3">
              <div className="distribution-color w-4 h-4 rounded-full bg-purple-500"></div>
              <span className="text-sm text-gray-600 flex-1">Referral</span>
              <div className="distribution-toggle w-6 h-4 bg-gray-300 rounded-full relative">
                <div className="w-3 h-3 bg-white rounded-full absolute top-0.5 left-0.5"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="distribution-section">
          <h4 className="distribution-title text-sm font-semibold text-gray-700 mb-4">Device Usage</h4>
          <div className="device-chart flex items-center gap-6">
            <div className="pie-chart w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 relative">
              <div className="absolute inset-2 bg-white rounded-full"></div>
            </div>
            <div className="device-bars flex gap-2 items-end h-16">
              <motion.div
                className="device-bar w-3 bg-blue-500 rounded-t"
                initial={{ height: 0 }}
                animate={{ height: "60%" }}
                transition={{ duration: 1, delay: 0.3 }}
              />
              <motion.div
                className="device-bar w-3 bg-green-500 rounded-t"
                initial={{ height: 0 }}
                animate={{ height: "40%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.div
                className="device-bar w-3 bg-orange-500 rounded-t"
                initial={{ height: 0 }}
                animate={{ height: "80%" }}
                transition={{ duration: 1, delay: 0.7 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard; 