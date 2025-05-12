// src/pages/SelectModePage.tsx
import React from 'react';
import FocusModeSelector from '../components/FocusModeSelector';

const SelectModePage = () => {
  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">تنظیم حالت تمرکز</h1>
      <FocusModeSelector />
    </div>
  );
};

export default SelectModePage;