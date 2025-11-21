import { LanguageProvider } from './contexts/LanguageContext';
import { AppStateProvider } from './contexts/AppStateContext';
import VisualizationViewer from './components/VisualizationViewer';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import { useState } from 'react';
import './App.css';

function AppContent() {
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const [rightCollapsed, setRightCollapsed] = useState(false);

  return (
    <div className="app-container">
      <main 
        className={`main-content ${leftCollapsed ? 'left-collapsed' : ''} ${rightCollapsed ? 'right-collapsed' : ''}`}
      >
        <div className="left-section">
          <LeftPanel onCollapseChange={setLeftCollapsed} />
        </div>

        <div className="center-section">
          <VisualizationViewer />
        </div>

        <div className="right-section">
          <RightPanel onCollapseChange={setRightCollapsed} />
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppStateProvider>
        <AppContent />
      </AppStateProvider>
    </LanguageProvider>
  );
}

export default App;
