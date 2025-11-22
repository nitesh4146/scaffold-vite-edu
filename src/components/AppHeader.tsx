import React from 'react';
import { useAppState } from '../contexts/AppStateContext';
import './AppHeader.css';

const AppHeader: React.FC = React.memo(() => {
  const { appTitle } = useAppState();

  return (
    <div className="app-header">
      <h1 className="app-title">{appTitle}</h1>
    </div>
  );
});

AppHeader.displayName = 'AppHeader';

export default AppHeader;
