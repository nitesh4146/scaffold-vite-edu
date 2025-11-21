import React, { useEffect, useState } from 'react';
import { useAppState } from '../contexts/AppStateContext';
import VisualizationViewer from '../components/VisualizationViewer';
import InsightsPanel, { Insight } from '../components/InsightsPanel';
import TheorySidebar from '../components/TheorySidebar';

/**
 * Example implementation showing how to use the educational app template
 * This demonstrates a simple physics simulation
 */

const ExampleApp: React.FC = () => {
  const { setTopics, setCurrentTopic } = useAppState();
  const [position, setPosition] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(1);

  // Set up topics on mount
  useEffect(() => {
    const topics = [
      { id: 'kinematics', name: 'Kinematics', description: 'Study of motion' },
      { id: 'dynamics', name: 'Dynamics', description: 'Forces and motion' },
      { id: 'energy', name: 'Energy', description: 'Work and energy' },
    ];
    setTopics(topics);
    setCurrentTopic(topics[0]);
  }, [setTopics, setCurrentTopic]);

  // Animation loop
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setPosition((prev) => (prev + 1 * animationSpeed) % 400);
      setVelocity(5 * animationSpeed);
    }, 50);

    return () => clearInterval(interval);
  }, [isPlaying, animationSpeed]);

  // Define insights to display
  const insights: Insight[] = [
    {
      label: 'Position',
      value: position.toFixed(1),
      unit: 'px',
      description: 'Current position of the object',
    },
    {
      label: 'Velocity',
      value: velocity.toFixed(1),
      unit: 'px/s',
      description: 'Current velocity',
    },
    {
      label: 'Speed',
      value: `${animationSpeed.toFixed(1)}x`,
      description: 'Animation speed multiplier',
    },
  ];

  // Define theory content
  const theorySections = [
    {
      title: 'Introduction to Motion',
      content:
        'Motion is the change in position of an object with respect to time. In physics, we study different aspects of motion including displacement, velocity, and acceleration.',
    },
    {
      title: 'Position and Displacement',
      content:
        'Position refers to the location of an object in space. Displacement is the change in position and is a vector quantity with both magnitude and direction.',
    },
    {
      title: 'Velocity',
      content:
        'Velocity is the rate of change of position with respect to time. It is also a vector quantity. Speed is the magnitude of velocity.',
    },
    {
      title: 'Key Equations',
      content:
        'v = dx/dt (velocity is the derivative of position with respect to time)\na = dv/dt (acceleration is the derivative of velocity)',
    },
  ];

  // Custom visualization component
  const CustomVisualization = () => (
    <div style={{ width: '100%', height: '400px', position: 'relative' }}>
      <svg width="100%" height="100%" style={{ border: '1px solid var(--border-color)' }}>
        {/* Track */}
        <line
          x1="50"
          y1="200"
          x2="450"
          y2="200"
          stroke="var(--border-color)"
          strokeWidth="2"
        />
        
        {/* Moving object */}
        <circle
          cx={50 + position}
          cy="200"
          r="20"
          fill="var(--accent-color)"
          style={{ transition: 'cx 0.05s linear' }}
        />
        
        {/* Velocity vector */}
        {isPlaying && (
          <line
            x1={50 + position}
            y1="200"
            x2={50 + position + velocity * 5}
            y2="200"
            stroke="var(--accent-color)"
            strokeWidth="2"
            markerEnd="url(#arrowhead)"
          />
        )}
        
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="7"
            refX="9"
            refY="3.5"
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="var(--accent-color)" />
          </marker>
        </defs>
      </svg>
      
      <div style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--text-secondary)' }}>
        Click Play to start the animation
      </div>
    </div>
  );

  return (
    <>
      {/* The main layout is handled by App.tsx */}
      {/* These components would replace the default ones in the layout */}
      
      {/* Example of how to use components with custom content: */}
      {/* 
      <VisualizationViewer>
        <CustomVisualization />
      </VisualizationViewer>
      
      <InsightsPanel insights={insights} />
      
      <TheorySidebar sections={theorySections} />
      */}
    </>
  );
};

export default ExampleApp;
