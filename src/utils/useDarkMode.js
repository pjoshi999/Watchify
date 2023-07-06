import React, { useEffect, useState } from "react";

const useDarkMode = () => {
  const [theme, setTheme] = useState(localStorage.theme);
  const colorTheme = theme === "dark" ? "light" : "dark";

  const darkmode = window.matchMedia("(prefers-color-scheme: dark)").matches;

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme !== null) {
      root.classList.remove(colorTheme);
      root.classList.add(theme);
    } else if (darkmode) {
      root.classList.remove("light");
      root.classList.add("dark");
    }

    // Save theme to localStorage
    localStorage.setItem("theme", theme || (darkmode ? "dark" : "light"));
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};

export default useDarkMode;
