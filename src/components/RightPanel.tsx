import React from 'react';
import './RightPanel.css';

const RightPanel: React.FC = React.memo(() => {
  return (
    <div className="right-panel">
      <div className="panel-header">
        {/* Empty header bar */}
      </div>
      
      <div className="panel-body">
        <div className="panel-placeholder">
          Space for app and visualization controls.
        </div>
      </div>
    </div>
  );
});

RightPanel.displayName = 'RightPanel';

export default RightPanel;
