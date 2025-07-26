'use client';

import { motion } from 'framer-motion';

const dashboardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } }
};

const WebExperienceDashboard = () => {
  return (
    <motion.div
      className="web-experience-dashboard-container w-full h-full flex flex-col rounded-2xl"
      variants={dashboardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="dashboard-header flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Web Experience</h3>
        <div className="dashboard-controls flex gap-2">
          <div className="control-dot w-3 h-3 rounded-full bg-green-500" />
          <div className="control-dot w-3 h-3 rounded-full bg-yellow-500" />
          <div className="control-dot w-3 h-3 rounded-full bg-red-500" />
        </div>
      </div>
      
      <div className="dashboard-content flex-1 flex flex-col gap-4">
        {/* Site Web Schématisé */}
        <div className="website-preview flex-1 bg-white rounded-xl p-4 border border-gray-200 min-h-[180px] max-h-[220px] flex flex-col justify-center">
          <div className="preview-header mb-2">
            <h4 className="text-sm font-semibold text-gray-700">Premium Website Preview</h4>
          </div>
          <div className="website-mockup flex justify-center items-center h-32">
            <div className="browser-window bg-white border-2 border-gray-300 rounded-xl shadow-lg w-full max-w-[480px]">
              {/* Barre de navigation du navigateur */}
              <div className="browser-header bg-gray-100 px-3 py-2 rounded-t-lg flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-white rounded px-2 py-1 text-xs text-gray-500 text-center">
                  kyriel-services.com
                </div>
              </div>
              {/* Contenu du site */}
              <div className="website-content p-3">
                {/* Header du site */}
                <motion.div 
                  className="site-header bg-gradient-to-r from-blue-600 to-blue-700 rounded-t-lg p-3 mb-2"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="text-white font-bold text-sm">Kyriel Services</div>
                    <div className="flex gap-2">
                      <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                      <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                      <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
                    </div>
                  </div>
                </motion.div>
                {/* Hero Section */}
                <motion.div 
                  className="hero-section bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-3 mb-2"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="text-center">
                    <div className="text-lg font-bold text-gray-800 mb-2">Excellence Digitale</div>
                    <div className="text-xs text-gray-600 mb-3">Solutions premium pour votre transformation</div>
                    <div className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full inline-block">
                      Découvrir
                    </div>
                  </div>
                </motion.div>
                {/* Sections de contenu */}
                <div className="content-sections flex gap-2">
                  <motion.div 
                    className="content-card flex-1 bg-white border border-gray-200 rounded p-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="w-full h-2 bg-blue-500 rounded mb-2"></div>
                    <div className="text-xs text-gray-700 font-medium">Services</div>
                  </motion.div>
                  <motion.div 
                    className="content-card flex-1 bg-white border border-gray-200 rounded p-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="w-full h-2 bg-green-500 rounded mb-2"></div>
                    <div className="text-xs text-gray-700 font-medium">Solutions</div>
                  </motion.div>
                  <motion.div 
                    className="content-card flex-1 bg-white border border-gray-200 rounded p-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="w-full h-2 bg-purple-500 rounded mb-2"></div>
                    <div className="text-xs text-gray-700 font-medium">Contact</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Métriques de performance */}
        <div className="performance-metrics-wrapper w-full flex justify-center mt-2">
          <div className="performance-metrics-box bg-white border border-gray-200 rounded-xl shadow-md px-4 py-3 max-w-[340px] w-full flex flex-col items-center">
            <div className="metrics-header mb-1 w-full flex justify-between items-center">
              <h4 className="text-[10px] font-semibold text-gray-700">Performance Metrics</h4>
            </div>
            <div className="metrics-grid grid grid-cols-2 gap-x-4 gap-y-1 w-full">
              <motion.div 
                className="metric-item"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="metric-label text-[8px] text-gray-600 mb-0">Load Time</div>
                <div className="metric-value" style={{ fontSize: '8px', fontWeight: 400, lineHeight: '1' }}>0.8s</div>
                <div className="metric-bar h-0.5 bg-gray-200 rounded-full mt-0.5 overflow-hidden">
                  <motion.div 
                    className="h-full bg-green-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </motion.div>
              <motion.div 
                className="metric-item"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="metric-label text-[8px] text-gray-600 mb-0">SEO Score</div>
                <div className="metric-value" style={{ fontSize: '8px', fontWeight: 400, lineHeight: '1' }}>98/100</div>
                <div className="metric-bar h-0.5 bg-gray-200 rounded-full mt-0.5 overflow-hidden">
                  <motion.div 
                    className="h-full bg-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "98%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.6 }}
                  />
                </div>
              </motion.div>
              <motion.div 
                className="metric-item"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="metric-label text-[8px] text-gray-600 mb-0">Mobile Score</div>
                <div className="metric-value" style={{ fontSize: '8px', fontWeight: 400, lineHeight: '1' }}>100/100</div>
                <div className="metric-bar h-0.5 bg-gray-200 rounded-full mt-0.5 overflow-hidden">
                  <motion.div 
                    className="h-full bg-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.7 }}
                  />
                </div>
              </motion.div>
              <motion.div 
                className="metric-item"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="metric-label text-[8px] text-gray-600 mb-0">Accessibility</div>
                <div className="metric-value" style={{ fontSize: '8px', fontWeight: 400, lineHeight: '1' }}>95/100</div>
                <div className="metric-bar h-0.5 bg-gray-200 rounded-full mt-0.5 overflow-hidden">
                  <motion.div 
                    className="h-full bg-orange-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "95%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WebExperienceDashboard; 