import React from 'react';
import './LeftPanel.css';

const LeftPanel: React.FC = React.memo(() => {
  return (
    <div className="left-panel">
      <div className="panel-body">
        <div className="panel-placeholder">
          Use this as a scrollable sidebar for required content and controls.
        </div>
      </div>
    </div>
  );
});

LeftPanel.displayName = 'LeftPanel';

export default LeftPanel;
