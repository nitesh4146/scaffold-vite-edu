import React from 'react';
import './VisualizationViewer.css';

interface VisualizationViewerProps {
  children?: React.ReactNode;
}

const VisualizationViewer: React.FC<VisualizationViewerProps> = React.memo(({ children }) => {
  return (
    <div className="visualization-viewer">
      <div className="visualization-container">
        {children || (
          <div className="placeholder">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" />
              <path d="M50 30 L50 50 L65 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <p>Visualization will appear here</p>
          </div>
        )}
      </div>
    </div>
  );
});

VisualizationViewer.displayName = 'VisualizationViewer';

export default VisualizationViewer;
