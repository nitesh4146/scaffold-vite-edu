import React from 'react';
import './Panel.css';
import './RightPanel.css';

const RightPanel: React.FC = React.memo(() => {
  return (
    <div className="panel right-panel">
      <div className="panel-header">
        <h1 className="panel-title">Controls Panel</h1>
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
