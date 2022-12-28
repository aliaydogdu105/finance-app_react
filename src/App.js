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
    <div className="App">
      <AppRouter />
      <button
        onClick={darkMode}
        className=" right-5 top-4 absolute h-12 w-24 rounded-lg bg-black text-gray-100 dark:bg-slate-100 dark:text-gray-900 hover:scale-105 ease-out duration-150 "
      >
        {theme}
      </button>
    </div>
  );
}

export default App;
