'use client';

import { motion } from 'framer-motion';

const PerformanceDashboard = () => {
  return (
    <div className="performance-dashboard-container w-full h-full flex flex-col rounded-xl">
      <div className="dashboard-header flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-800">Performance Metrics</h3>
        <div className="dashboard-controls flex gap-2">
          <div className="control-dot w-3 h-3 rounded-full bg-green-500" />
          <div className="control-dot w-3 h-3 rounded-full bg-yellow-500" />
          <div className="control-dot w-3 h-3 rounded-full bg-red-500" />
        </div>
      </div>
      
      <div className="dashboard-content flex-1 flex flex-col">
        <div className="kpi-row flex gap-4 mb-8">
          <div className="kpi-card flex-1 bg-white rounded-lg p-4 border border-gray-200">
            <div className="kpi-icon text-2xl mb-2">📈</div>
            <div className="kpi-data">
              <div className="kpi-value text-xl font-bold text-gray-800">$12.8K</div>
              <div className="kpi-label text-sm text-gray-600">Revenue</div>
            </div>
            <div className="kpi-trend text-sm font-medium text-green-600 mt-2">+12.5%</div>
          </div>
          
          <div className="kpi-card flex-1 bg-white rounded-lg p-4 border border-gray-200">
            <div className="kpi-icon text-2xl mb-2">👥</div>
            <div className="kpi-data">
              <div className="kpi-value text-xl font-bold text-gray-800">542</div>
              <div className="kpi-label text-sm text-gray-600">New Users</div>
            </div>
            <div className="kpi-trend text-sm font-medium text-green-600 mt-2">+8.3%</div>
          </div>
          
          <div className="kpi-card flex-1 bg-white rounded-lg p-4 border border-gray-200">
            <div className="kpi-icon text-2xl mb-2">⏱️</div>
            <div className="kpi-data">
              <div className="kpi-value text-xl font-bold text-gray-800">4:32</div>
              <div className="kpi-label text-sm text-gray-600">Avg. Session</div>
            </div>
            <div className="kpi-trend text-sm font-medium text-red-600 mt-2">-2.1%</div>
          </div>
        </div>
        
        <div className="multi-chart flex-1 bg-white rounded-lg p-4 border border-gray-200">
          <div className="chart-header flex justify-between items-center mb-4">
            <h4 className="text-sm font-semibold text-gray-700">Monthly Performance</h4>
            <div className="chart-period text-xs text-gray-500">Last 6 months</div>
          </div>
          
          <div className="chart-body flex-1">
            <div className="combo-chart flex h-full">
              <div className="chart-y-axis flex flex-col justify-between text-xs text-gray-500 mr-4">
                <div className="y-label">5K</div>
                <div className="y-label">4K</div>
                <div className="y-label">3K</div>
                <div className="y-label">2K</div>
                <div className="y-label">1K</div>
                <div className="y-label">0</div>
              </div>
              
              <div className="chart-bars flex gap-3 items-end flex-1">
                <motion.div className="chart-bar flex flex-col items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <div className="bar-stack flex flex-col-reverse h-32">
                    <div className="bar-segment bg-blue-500 rounded-t" style={{ height: '60%' }} />
                    <div className="bar-segment bg-green-500 rounded-t" style={{ height: '20%' }} />
                  </div>
                  <div className="bar-label text-xs text-gray-600 mt-2">Jan</div>
                </motion.div>
                
                <motion.div className="chart-bar flex flex-col items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <div className="bar-stack flex flex-col-reverse h-32">
                    <div className="bar-segment bg-blue-500 rounded-t" style={{ height: '70%' }} />
                    <div className="bar-segment bg-green-500 rounded-t" style={{ height: '15%' }} />
                  </div>
                  <div className="bar-label text-xs text-gray-600 mt-2">Feb</div>
                </motion.div>
                
                <motion.div className="chart-bar flex flex-col items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                  <div className="bar-stack flex flex-col-reverse h-32">
                    <div className="bar-segment bg-blue-500 rounded-t" style={{ height: '65%' }} />
                    <div className="bar-segment bg-green-500 rounded-t" style={{ height: '25%' }} />
                  </div>
                  <div className="bar-label text-xs text-gray-600 mt-2">Mar</div>
                </motion.div>
                
                <motion.div className="chart-bar flex flex-col items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                  <div className="bar-stack flex flex-col-reverse h-32">
                    <div className="bar-segment bg-blue-500 rounded-t" style={{ height: '80%' }} />
                    <div className="bar-segment bg-green-500 rounded-t" style={{ height: '10%' }} />
                  </div>
                  <div className="bar-label text-xs text-gray-600 mt-2">Apr</div>
                </motion.div>
                
                <motion.div className="chart-bar flex flex-col items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                  <div className="bar-stack flex flex-col-reverse h-32">
                    <div className="bar-segment bg-blue-500 rounded-t" style={{ height: '85%' }} />
                    <div className="bar-segment bg-green-500 rounded-t" style={{ height: '12%' }} />
                  </div>
                  <div className="bar-label text-xs text-gray-600 mt-2">May</div>
                </motion.div>
                
                <motion.div className="chart-bar flex flex-col items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
                  <div className="bar-stack flex flex-col-reverse h-32">
                    <div className="bar-segment bg-blue-500 rounded-t" style={{ height: '90%' }} />
                    <div className="bar-segment bg-green-500 rounded-t" style={{ height: '8%' }} />
                  </div>
                  <div className="bar-label text-xs text-gray-600 mt-2">Jun</div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDashboard; 