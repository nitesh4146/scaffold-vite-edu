import React from 'react';
import './AnimationControls.css';

const AnimationControls: React.FC = () => {
  return (
    <div className="animation-controls">
      <div className="controls-header">
        <h3>Controls</h3>
      </div>
      
      <div className="controls-body">
        <div className="control-group">
          <button className="control-btn">
            <span>Action 1</span>
          </button>
          
          <button className="control-btn">
            <span>Action 2</span>
          </button>
          
          <button className="control-btn">
            <span>Action 3</span>
          </button>
        </div>

        <div className="control-info">
          <p>Add your custom controls here. You can include buttons, sliders, inputs, or any interactive elements needed for your application.</p>
        </div>
      </div>
    </div>
  );
};

export default AnimationControls;
