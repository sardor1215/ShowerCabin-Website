import React from "react";
import { Moon, Sun } from "react-feather";

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg border-2 border-customdarkp text-customdarkp hover:bg-customdarkp hover:text-white transition duration-150 hover:scale-110"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default DarkModeToggle;
