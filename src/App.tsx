import { LanguageProvider } from './contexts/LanguageContext';
import { AppStateProvider } from './contexts/AppStateContext';
import Navbar from './components/Navbar';
import VisualizationViewer from './components/VisualizationViewer';
import AnimationControls from './components/AnimationControls';
import InsightsPanel from './components/InsightsPanel';
import TheorySidebar from './components/TheorySidebar';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <AppStateProvider>
        <div className="app-container">
          <Navbar />
          
          <main className="main-content">
            <div className="left-section">
              <TheorySidebar />
            </div>

            <div className="center-section">
              <VisualizationViewer />
              <AnimationControls />
            </div>

            <div className="right-section">
              <InsightsPanel />
            </div>
          </main>
        </div>
      </AppStateProvider>
    </LanguageProvider>
  );
}

export default App;
