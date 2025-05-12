// src/App.tsx

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SelectModePage from "./pages/SelectModePage";
import Footer from "./components/Footer";

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
      let currentTheme = "default";
      if (hour >= 0 && hour < 5) currentTheme = "midnight";
      else if (hour >= 5 && hour < 7) currentTheme = "earlyMorning";
      else if (hour >= 7 && hour < 11) currentTheme = "lateMorning";
      else if (hour >= 11 && hour < 14) currentTheme = "noon";
      else if (hour >= 14 && hour < 17) currentTheme = "afternoon";
      else if (hour >= 17 && hour < 19) currentTheme = "sunset";
      else if (hour >= 19 && hour < 22) currentTheme = "evening";
      else currentTheme = "night";

      document.documentElement.setAttribute("data-theme", currentTheme);
    };

    updateTheme();
    const interval = setInterval(updateTheme, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-4">Moodomoro</h1>

        <nav className="mb-6">
          <Link to="/select-mode" className="underline text-blue-600 mr-4">
            Focus Mode
          </Link>
          <Link to="/" className="underline text-blue-600">
            Timer
          </Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div className="timer">
                <p className="text-4xl font-mono">{formatTime(timeLeft)}</p>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-xl shadow">
                  Start
                </button>
              </div>
            }
          />
          <Route path="/select-mode" element={<SelectModePage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
