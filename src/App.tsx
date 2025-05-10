// src/components/App.tsx
import React, { useState } from "react";
import FocusModeSelector from './components/focusModeSelector';



const App = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 mins for timer

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  useEffect(() => {
    const updateTheme = () => {
      const hour = new Date().getHours();
      // Adding theme based on system clock
      let currentTheme = "default";
      if (hour >= 0 && hour < 5) currentTheme = "midnight";
      else if (hour >= 5 && hour < 7) currentTheme = "earlyMorning";
      else if (hour >= 7 && hour < 11) currentTheme = "lateMorning";
      else if (hour >= 11 && hour < 14) currentTheme = "noon";
      else if (hour >= 14 && hour < 17) currentTheme = "afternoon";
      else if (hour >= 17 && hour < 19) currentTheme = "sunset";
      else if (hour >= 19 && hour < 22) currentTheme = "evening";
      else currentTheme = "night";

      setTheme(currentTheme);
      document.documentElement.setAttribute("data-theme", currentTheme);
    };

    updateTheme(); // First Mounting
    const interval = setInterval(updateTheme, 60000); // Every 1 minute

    return () => clearInterval(interval); // Cleaning
  }, []);

  return (
    <div className="App">
      <h1>Moodomoro</h1>
      <div className="timer">
        <p>{formatTime(timeLeft)}</p>
      </div>
      <button>Start</button>
    </div>
  );
};

export default App;
