// src/App.tsx
import React, { useState } from 'react';

const App = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 mins for timer

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="App" style={{ backgroundColor: 'lightblue' }}>
      <h1>Moodomoro</h1>
      <div className="timer">
        <p>{formatTime(timeLeft)}</p>
      </div>
      <button>Start</button>
    </div>
  );
};

export default App;
