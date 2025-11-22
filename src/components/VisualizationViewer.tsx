import React, { useState } from 'react';
import { FlipHorizontal } from 'lucide-react';
import './VisualizationViewer.css';

interface VisualizationViewerProps {
  children?: React.ReactNode;
}

const VisualizationViewer: React.FC<VisualizationViewerProps> = React.memo(({ children }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="visualization-viewer">
      <button 
        className="flip-btn" 
        onClick={handleFlip}
        aria-label="Flip Panel"
        title="Flip Panel"
      >
        <FlipHorizontal size={18} />
        <span>Flip</span>
      </button>
      
      <div className="visualization-flip-container">
        <div className={`visualization-container ${isFlipped ? 'flipped' : ''}`}>
          <div className="visualization-front">
            {children || (
              <div className="placeholder with-icon">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" />
                  <path d="M50 30 L50 50 L65 60" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <p>Visualization will appear here</p>
              </div>
            )}
          </div>
          
          <div className="visualization-back">
            <div className="placeholder">
              <p>Space for additional visualization or content</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

VisualizationViewer.displayName = 'VisualizationViewer';

export default VisualizationViewer;
