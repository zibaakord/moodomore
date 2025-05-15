// src/pages/SelectModePage.tsx
import React from 'react';
import FocusModeSelector from '../components/FocusModeSelector';
import { useFocusMode } from '../context/FocusModeContext';

const SelectModePage = () => {
  const { setSelectedMode } = useFocusMode();

  const handleModeSelect = (modeId: string) => {
    setSelectedMode(modeId);
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Set Focus Mode</h1>
      <FocusModeSelector onSelect={handleModeSelect} />
    </div>
  );
};

export default SelectModePage;
