import { LanguageProvider } from './contexts/LanguageContext';
import { AppStateProvider } from './contexts/AppStateContext';
import AppHeader from './components/AppHeader';
import VisualizationViewer from './components/VisualizationViewer';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import './App.css';

function AppContent() {
  return (
    <div className="app-container">
      <AppHeader />
      
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
    <LanguageProvider>
      <AppStateProvider>
        <AppContent />
      </AppStateProvider>
    </LanguageProvider>
  );
}

export default App;
