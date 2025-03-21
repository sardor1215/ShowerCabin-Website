import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Contact from "./Routes/Contact";
import Main from "./Routes/Main";
import MetaTags from "./Components/SEO/MetaTags";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user's preference
    const isDark =
      localStorage.getItem("darkMode") === "true" ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches &&
        localStorage.getItem("darkMode") === null);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", !darkMode);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <MetaTags />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Main darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
