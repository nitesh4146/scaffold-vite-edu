import { AppStateProvider } from './contexts/AppStateContext';
import VisualizationViewer from './components/VisualizationViewer';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import './App.css';

function AppContent() {
  return (
    <div className="app-container">
      <main className="main-content">
        <div className="left-section">
          <LeftPanel />
        </div>

        <div className="center-section">
          <VisualizationViewer />
        </div>

        <div className="right-section">
          <RightPanel />
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <AppStateProvider>
      <AppContent />
    </AppStateProvider>
  );
}

export default App;
