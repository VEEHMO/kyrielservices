'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type PowerBIDashboardProps = {
  className?: string;
};

const PowerBIDashboard = ({ className = '' }: PowerBIDashboardProps) => {
  const [isClient, setIsClient] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState(0);

  // S'assurer que le rendu côté client est activé pour éviter les erreurs d'hydratation
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Liste des dashboards à afficher à tour de rôle
  const dashboards = [
    // Dashboard 1 - Analytics overview
    <div key="dashboard1" className="dashboard-container">
      <div className="dashboard-header">
        <h3>Analytics Overview</h3>
        <div className="dashboard-controls">
          <div className="control-dot bg-green-500" />
          <div className="control-dot bg-yellow-500" />
          <div className="control-dot bg-red-500" />
        </div>
      </div>
      <div className="dashboard-content">
        <div className="metrics-row">
          <div className="metric-card">
            <div className="metric-title">Total Visits</div>
            <div className="metric-value">86.4K</div>
            <div className="metric-chart">
              <svg viewBox="0 0 100 30" className="line-chart">
                <polyline
                  points="0,20 10,18 20,22 30,15 40,17 50,10 60,12 70,8 80,9 90,5 100,7"
                  className="chart-line"
                />
              </svg>
            </div>
          </div>
          <div className="metric-card">
            <div className="metric-title">Conversion Rate</div>
            <div className="metric-value">24.8%</div>
            <div className="metric-chart">
              <svg viewBox="0 0 100 30" className="line-chart">
                <polyline
                  points="0,15 10,13 20,18 30,12 40,14 50,10 60,8 70,12 80,7 90,9 100,5"
                  className="chart-line"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="chart-row">
          <div className="bar-chart-container">
            <div className="chart-title">Channel Distribution</div>
            <div className="bar-chart">
              <div className="bar-container">
                <div className="bar-label">Direct</div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ width: '70%', backgroundColor: '#3b82f6' }} />
                </div>
              </div>
              <div className="bar-container">
                <div className="bar-label">Organic</div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ width: '55%', backgroundColor: '#10b981' }} />
                </div>
              </div>
              <div className="bar-container">
                <div className="bar-label">Social</div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ width: '45%', backgroundColor: '#f59e0b' }} />
                </div>
              </div>
              <div className="bar-container">
                <div className="bar-label">Referral</div>
                <div className="bar-wrapper">
                  <div className="bar" style={{ width: '30%', backgroundColor: '#8b5cf6' }} />
                </div>
              </div>
            </div>
          </div>
          <div className="pie-chart-container">
            <div className="chart-title">Device Usage</div>
            <div className="pie-chart">
              <svg viewBox="0 0 100 100" className="pie">
                <circle r="25" cx="50" cy="50" fill="transparent" stroke="#3b82f6" strokeWidth="50" strokeDasharray="78.5 157" transform="rotate(-90 50 50)" />
                <circle r="25" cx="50" cy="50" fill="transparent" stroke="#10b981" strokeWidth="50" strokeDasharray="47.1 157" strokeDashoffset="-78.5" transform="rotate(-90 50 50)" />
                <circle r="25" cx="50" cy="50" fill="transparent" stroke="#f59e0b" strokeWidth="50" strokeDasharray="31.4 157" strokeDashoffset="-125.6" transform="rotate(-90 50 50)" />
              </svg>
              <div className="pie-legend">
                <div className="legend-item">
                  <div className="legend-color" style={{ backgroundColor: '#3b82f6' }} />
                  <div className="legend-label">Desktop (50%)</div>
                </div>
                <div className="legend-item">
                  <div className="legend-color" style={{ backgroundColor: '#10b981' }} />
                  <div className="legend-label">Mobile (30%)</div>
                </div>
                <div className="legend-item">
                  <div className="legend-color" style={{ backgroundColor: '#f59e0b' }} />
                  <div className="legend-label">Tablet (20%)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Dashboard 2 - Performance metrics
    <div key="dashboard2" className="dashboard-container">
      <div className="dashboard-header">
        <h3>Performance Metrics</h3>
        <div className="dashboard-controls">
          <div className="control-dot bg-green-500" />
          <div className="control-dot bg-yellow-500" />
          <div className="control-dot bg-red-500" />
        </div>
      </div>
      <div className="dashboard-content">
        <div className="kpi-row">
          <div className="kpi-card">
            <div className="kpi-icon">📈</div>
            <div className="kpi-data">
              <div className="kpi-value">$12.8K</div>
              <div className="kpi-label">Revenue</div>
            </div>
            <div className="kpi-trend positive">+12.5%</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon">👥</div>
            <div className="kpi-data">
              <div className="kpi-value">542</div>
              <div className="kpi-label">New Users</div>
            </div>
            <div className="kpi-trend positive">+8.3%</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-icon">⏱️</div>
            <div className="kpi-data">
              <div className="kpi-value">4:32</div>
              <div className="kpi-label">Avg. Session</div>
            </div>
            <div className="kpi-trend negative">-2.1%</div>
          </div>
        </div>
        <div className="multi-chart">
          <div className="chart-header">
            <h4>Monthly Performance</h4>
            <div className="chart-period">Last 6 months</div>
          </div>
          <div className="chart-body">
            <div className="combo-chart">
              <div className="chart-y-axis">
                <div className="y-label">5K</div>
                <div className="y-label">4K</div>
                <div className="y-label">3K</div>
                <div className="y-label">2K</div>
                <div className="y-label">1K</div>
                <div className="y-label">0</div>
              </div>
              <div className="chart-bars">
                <div className="chart-bar">
                  <div className="bar-stack">
                    <div className="bar-segment" style={{ height: '60%', backgroundColor: '#3b82f6' }} />
                    <div className="bar-segment" style={{ height: '20%', backgroundColor: '#10b981' }} />
                  </div>
                  <div className="bar-label">Jan</div>
                </div>
                <div className="chart-bar">
                  <div className="bar-stack">
                    <div className="bar-segment" style={{ height: '70%', backgroundColor: '#3b82f6' }} />
                    <div className="bar-segment" style={{ height: '15%', backgroundColor: '#10b981' }} />
                  </div>
                  <div className="bar-label">Feb</div>
                </div>
                <div className="chart-bar">
                  <div className="bar-stack">
                    <div className="bar-segment" style={{ height: '65%', backgroundColor: '#3b82f6' }} />
                    <div className="bar-segment" style={{ height: '25%', backgroundColor: '#10b981' }} />
                  </div>
                  <div className="bar-label">Mar</div>
                </div>
                <div className="chart-bar">
                  <div className="bar-stack">
                    <div className="bar-segment" style={{ height: '80%', backgroundColor: '#3b82f6' }} />
                    <div className="bar-segment" style={{ height: '10%', backgroundColor: '#10b981' }} />
                  </div>
                  <div className="bar-label">Apr</div>
                </div>
                <div className="chart-bar">
                  <div className="bar-stack">
                    <div className="bar-segment" style={{ height: '85%', backgroundColor: '#3b82f6' }} />
                    <div className="bar-segment" style={{ height: '12%', backgroundColor: '#10b981' }} />
                  </div>
                  <div className="bar-label">May</div>
                </div>
                <div className="chart-bar">
                  <div className="bar-stack">
                    <div className="bar-segment" style={{ height: '90%', backgroundColor: '#3b82f6' }} />
                    <div className="bar-segment" style={{ height: '8%', backgroundColor: '#10b981' }} />
                  </div>
                  <div className="bar-label">Jun</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Dashboard 3 - Data Analytics
    <div key="dashboard3" className="dashboard-container">
      <div className="dashboard-header">
        <h3>Data Analytics</h3>
        <div className="dashboard-controls">
          <div className="control-dot bg-green-500" />
          <div className="control-dot bg-yellow-500" />
          <div className="control-dot bg-red-500" />
        </div>
      </div>
      <div className="dashboard-content">
        <div className="heat-map">
          <div className="map-header">
            <h4>User Engagement by Region</h4>
          </div>
          <div className="map-container">
            <div className="france-map">
              <svg viewBox="0 0 200 200" className="map-svg">
                <path d="M80,40 C100,20 140,30 160,50 C180,70 190,100 170,140 C150,180 110,190 80,160 C50,130 40,90 60,60 C65,50 70,45 80,40Z" className="map-path" />
                <circle cx="90" cy="60" r="8" className="hotspot high" />
                <circle cx="130" cy="80" r="6" className="hotspot medium" />
                <circle cx="100" cy="120" r="7" className="hotspot high" />
                <circle cx="70" cy="100" r="5" className="hotspot low" />
                <circle cx="150" cy="110" r="6" className="hotspot medium" />
              </svg>
            </div>
          </div>
          <div className="map-legend">
            <div className="legend-item">
              <div className="legend-color high" />
              <div className="legend-label">High Engagement</div>
            </div>
            <div className="legend-item">
              <div className="legend-color medium" />
              <div className="legend-label">Medium Engagement</div>
            </div>
            <div className="legend-item">
              <div className="legend-color low" />
              <div className="legend-label">Low Engagement</div>
            </div>
          </div>
        </div>
        <div className="data-table">
          <div className="table-header">
            <h4>Top Performing Metrics</h4>
          </div>
          <table className="analytics-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
                <th>Change</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Page Views</td>
                <td>24,586</td>
                <td className="positive">+18.7%</td>
                <td><span className="status-badge good">Good</span></td>
              </tr>
              <tr>
                <td>Conversion Rate</td>
                <td>3.8%</td>
                <td className="positive">+2.1%</td>
                <td><span className="status-badge good">Good</span></td>
              </tr>
              <tr>
                <td>Bounce Rate</td>
                <td>42.3%</td>
                <td className="negative">+5.4%</td>
                <td><span className="status-badge warning">Warning</span></td>
              </tr>
              <tr>
                <td>Avg. Time on Page</td>
                <td>2:45</td>
                <td className="positive">+0:22</td>
                <td><span className="status-badge good">Good</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ];

  // Alterner entre les différents dashboards - seulement côté client
  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setCurrentAnimation((prev) => (prev + 1) % 3); // Utiliser la valeur fixe 3 au lieu de dashboards.length
    }, 5000); // Changer toutes les 5 secondes

    return () => clearInterval(interval);
  }, [isClient]);

  // Afficher un placeholder pendant le rendu côté serveur
  if (!isClient) {
    return (
      <div className={`powerbi-dashboard-container ${className} min-h-[300px] flex items-center justify-center`}>
        <div className="text-gray-400">Chargement du dashboard...</div>
      </div>
    );
  }

  return (
    <motion.div
      className={`powerbi-dashboard-container ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        key={currentAnimation}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {dashboards[currentAnimation]}
      </motion.div>
    </motion.div>
  );
};

export default PowerBIDashboard;
