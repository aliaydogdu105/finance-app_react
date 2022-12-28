import "./App.css";
import AppRouter from "./router/AppRouter";
import React, { useEffect, useState } from "react";
// import ThemeBtn from "./components/ThemeBtn";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") === "dark" ? "light" : "dark"
  );

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const darkMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="App flex flex-wrap justify-center">
      <AppRouter />
      <button
        onClick={darkMode}
        className=" top-6 right-2 sm:right-5 sm:top-4 fixed h-8 w-16 sm:h-12 sm:w-24 rounded-lg bg-black text-gray-100 dark:bg-slate-100 dark:text-gray-900 hover:scale-105 ease-out duration-150 "
      >
        {theme}
      </button>
    </div>
  );
}

export default App;
