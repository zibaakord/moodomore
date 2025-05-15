import React, { createContext, useContext, useState, ReactNode } from 'react';

type FocusModeContextType = {
  selectedMode: string | null;
  setSelectedMode: (mode: string) => void;
};

const FocusModeContext = createContext<FocusModeContextType | undefined>(undefined);

export const FocusModeProvider = ({ children }: { children: ReactNode }) => {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);

  return (
    <FocusModeContext.Provider value={{ selectedMode, setSelectedMode }}>
      {children}
    </FocusModeContext.Provider>
  );
};

export const useFocusMode = () => {
  const context = useContext(FocusModeContext);
  if (!context) {
    throw new Error('useFocusMode must be used within a FocusModeProvider');
  }
  return context;
};
