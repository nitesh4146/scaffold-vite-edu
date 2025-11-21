import React from 'react';
import './RightPanel.css';

const RightPanel: React.FC = React.memo(() => {
  return (
    <div className="right-panel">
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
