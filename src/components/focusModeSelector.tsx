// src/components/FocusModeSelector.tsx

import React, { useState } from 'react';
import { focusModes } from './data/focusModes';

const FocusModeSelector = () => {
  const [selectedMode, setSelectedMode] = useState<string | null>(null);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Select Your Focus Mode</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {focusModes.map((mode) => (
          <button
            key={mode.id}
            onClick={() => setSelectedMode(mode.id)}
            className={`p-4 rounded-xl shadow transition ${
              selectedMode === mode.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 hover:bg-blue-100'
            }`}
          >
            <span className="text-3xl">{mode.emoji}</span>
            <h3 className="font-semibold mt-2">{mode.title}</h3>
            <p className="text-sm">{mode.description}</p>
          </button>
        ))}
      </div>

      {selectedMode && (
        <div className="mt-6">
          <p className="text-green-700 font-medium">
            You selected: <strong>{selectedMode}</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default FocusModeSelector;
