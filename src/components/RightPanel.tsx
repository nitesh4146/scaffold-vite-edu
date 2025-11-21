import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import './RightPanel.css';

interface RightPanelProps {
  onCollapseChange?: (collapsed: boolean) => void;
}

const RightPanel: React.FC<RightPanelProps> = React.memo(({ onCollapseChange }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsCollapsed(true);
  };

  const handleExpand = () => {
    setIsCollapsed(false);
  };

  useEffect(() => {
    onCollapseChange?.(isCollapsed);
  }, [isCollapsed, onCollapseChange]);

  return (
    <div 
      className={`right-panel ${isCollapsed ? 'collapsed' : ''}`}
      onClick={isCollapsed ? handleExpand : undefined}
    >
      <div className="panel-header">
        <div className="panel-header-spacer"></div>
        <button 
          className="collapse-btn" 
          onClick={handleCollapse}
          aria-label="Collapse panel"
          title="Collapse panel"
        >
          <ChevronRight size={18} />
        </button>
      </div>
      
      <div className="panel-body">
        <div className="panel-placeholder">
          Use this as a scrollable sidebar for required content and controls.
        </div>
      </div>
    </div>
  );
});

RightPanel.displayName = 'RightPanel';

export default RightPanel;
