import React from 'react';
import './InsightsPanel.css';

export interface Insight {
  label: string;
  value: string | number;
  unit?: string;
  description?: string;
}

interface InsightsPanelProps {
  insights?: Insight[];
}

const InsightsPanel: React.FC<InsightsPanelProps> = ({ insights = [] }) => {
  const defaultInsights: Insight[] = [
    { label: 'Metric 1', value: 'Value', description: 'Description of first metric' },
    { label: 'Metric 2', value: 'Value', description: 'Description of second metric' },
    { label: 'Metric 3', value: 'Value', description: 'Description of third metric' },
  ];

  const displayInsights = insights.length > 0 ? insights : defaultInsights;

  return (
    <div className="insights-panel">
      <div className="insights-header">
        <h3>Insights</h3>
      </div>
      
      <div className="insights-body">
        {displayInsights.map((insight, index) => (
          <div key={index} className="insight-card">
            <div className="insight-label">{insight.label}</div>
            <div className="insight-value">
              {insight.value}
              {insight.unit && <span className="insight-unit"> {insight.unit}</span>}
            </div>
            {insight.description && (
              <div className="insight-description">{insight.description}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsPanel;
