/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';

interface AppStateContextType {
  appTitle: string;
  setAppTitle: (title: string) => void;
}

const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

export const AppStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [appTitle, setAppTitle] = useState<string>('Your App Title');

  // Memoize context value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      appTitle,
      setAppTitle,
    }),
    [appTitle]
  );

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};
