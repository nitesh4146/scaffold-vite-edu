import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Topic {
  id: string;
  name: string;
  description?: string;
}

interface AppStateContextType {
  currentTopic: Topic | null;
  setCurrentTopic: (topic: Topic) => void;
  topics: Topic[];
  setTopics: (topics: Topic[]) => void;
}

const AppStateContext = createContext<AppStateContextType | undefined>(undefined);

export const AppStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTopic, setCurrentTopic] = useState<Topic | null>(null);
  const [topics, setTopics] = useState<Topic[]>([]);

  return (
    <AppStateContext.Provider
      value={{
        currentTopic,
        setCurrentTopic,
        topics,
        setTopics,
      }}
    >
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
