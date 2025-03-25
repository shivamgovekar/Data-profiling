// src/pages/StockMetrics.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import {
  Database,
  BarChart2,
  PieChart,
  AlertCircle,
  Calendar,
  TrendingUp,
  Clipboard,
  Layers,
  Box,
} from 'lucide-react';
import SideNav from '../components/SideNav'; // Import the SideNav component

// Store the data in consts exactly as provided
const stockMetricsData = {
  stock_metrics: {
    empty_positions: {
      total_positions: 1048576,
      empty_count: 37754,
      OOO_FLAG: false,
      alert_threshold: 0.05,
    },
    historical_pattern: {
      avg_empty_rate: 0.03581125519028595,
      current_rate: 0.042618776385445284,
    },
    unique_years: 1,
    current_months: [11, 10],
    historical_months: [9, 8, 6, 5, 4],
  },
};

const llmResponse = `\`\`\`markdown\n## Business Rule Violations:\n- **Empty Positions:**\n  - Metric Score: \`0.00%\`\n  - Analysis: The empty rate is at 0.00%, indicating that there are no empty stock positions. This is a positive sign as it suggests that all positions are filled.\n  - Threshold: \`Acceptable threshold is typically > 5%\`\n  - Concern: \`no\`\n  \n## Trends:\n- **Historical vs Current Empty Rate:**\n  - Trend: There is no historical data available to compare against the current empty rate. The absence of data makes it impossible to identify any trends.\n  - Concern: \`no\`\n  \n- **Historical Months:**\n  - Months with Data: \`[]\`\n  - Concern: \`yes\` (The lack of historical months indicates a potential issue with data collection or reporting.)\n\n## Unique Years and Months:\n- Unique Years: \`0\`\n- Current Months: \`[]\`\n- Historical Months: \`[]\`\n- Concern: \`yes\` (The absence of unique years and current/historical months suggests a lack of activity or data, which could indicate a significant issue in stock management or data tracking.)\n\n## Notable Observations:\n- Concern: The dataset shows no activity or records, which raises concerns about the overall stock management process. This could indicate that the retail operation is either not functioning or that there is a critical failure in data collection.\n\n## Suggestions for Improvement:\n- Implement a robust data collection and reporting system to ensure that stock metrics are accurately captured and reported.\n- Conduct a review of stock management practices to identify any operational issues that may be leading to the absence of stock positions and historical data.\n\`\`\``;

const StockMetrics = () => {
  const {
    empty_positions,
    historical_pattern,
    unique_years,
    current_months,
    historical_months,
  } = stockMetricsData.stock_metrics;

  // Helper function to format percentages
  const formatPercentage = (value) => `${(value * 100).toFixed(2)}%`;

  // Custom renderers for markdown components
  const MarkdownComponents = {
    h2: ({ node, ...props }) => <h2 className="text-xl font-bold mt-6 mb-4 text-blue-800" {...props} />,
    ul: ({ node, ...props }) => <ul className="list-disc pl-6 mb-4 text-sm" {...props} />,
    li: ({ node, ...props }) => <li className="mb-2 text-gray-700" {...props} />,
    code: ({ node, ...props }) => <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm" {...props} />,
    strong: ({ node, ...props }) => <strong className="font-semibold text-gray-800" {...props} />,
  };

  // KPI Data
  const kpis = [
    {
      title: 'Total Positions',
      value: empty_positions.total_positions.toLocaleString(),
      icon: <Database className="w-5 h-5 text-blue-600 mr-2" />,
      description: null,
    },
    {
      title: 'Empty Positions',
      value: empty_positions.empty_count.toLocaleString(),
      icon: <Box className="w-5 h-5 text-blue-600 mr-2" />,
      description: `${formatPercentage(
        empty_positions.empty_count / empty_positions.total_positions
      )} of total`,
    },
    {
      title: 'Alert Threshold',
      value: formatPercentage(empty_positions.alert_threshold),
      icon: <AlertCircle className="w-5 h-5 text-blue-600 mr-2" />,
      description: empty_positions.OOO_FLAG ? (
        <span className="text-red-600">Threshold Exceeded</span>
      ) : (
        <span className="text-green-600">Within Threshold</span>
      ),
    },
    {
      title: 'Unique Years',
      value: unique_years,
      icon: <Calendar className="w-5 h-5 text-blue-600 mr-2" />,
      description: null,
    },
    {
      title: 'Current Empty Rate',
      value: formatPercentage(historical_pattern.current_rate),
      icon: <BarChart2 className="w-5 h-5 text-blue-600 mr-2" />,
      description: null,
    },
    {
      title: 'Avg Empty Rate',
      value: formatPercentage(historical_pattern.avg_empty_rate),
      icon: <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />,
      description: null,
    },
    {
      title: 'Data Collection Concern',
      value: historical_months.length === 0 ? 'Yes' : 'No',
      icon: <Clipboard className="w-5 h-5 text-blue-600 mr-2" />,
      description: historical_months.length === 0 ? 'Lack of historical data' : 'Data available',
    },
    {
      title: 'Stock Management',
      value: empty_positions.OOO_FLAG ? 'Critical' : 'Stable',
      icon: <Layers className="w-5 h-5 text-blue-600 mr-2" />,
      description: empty_positions.OOO_FLAG ? 'Threshold exceeded' : 'No critical issues',
    },
  ];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Side Navigation */}
      <SideNav />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Stock Metrics Dashboard</h1>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {kpis.map((kpi, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-2">
                {kpi.icon}
                <h2 className="text-md font-semibold text-gray-800">{kpi.title}</h2>
              </div>
              <p className="text-xl font-bold text-gray-800">{kpi.value}</p>
              {kpi.description && (
                <p className="text-xs text-gray-600 mt-1">{kpi.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* LLM Insights Section */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">AI Analysis & Recommendations</h2>
          <div className="prose max-w-none text-sm">
            <ReactMarkdown
              components={MarkdownComponents}
              children={llmResponse.replace(/\\n/g, '\n').replace(/```markdown/g, '')}
            />
          </div>
        </div>

        {/* Additional Insights */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Additional Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            {/* Current Months */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Current Months</h3>
              <ul className="list-disc list-inside text-gray-600">
                {current_months.map((month, index) => (
                  <li key={index} className="mb-1">
                    Month {month}
                  </li>
                ))}
              </ul>
            </div>

            {/* Historical Months */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Historical Months</h3>
              <ul className="list-disc list-inside text-gray-600">
                {historical_months.map((month, index) => (
                  <li key={index} className="mb-1">
                    Month {month}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockMetrics;