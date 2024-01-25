import React, { useEffect, useState } from "react";
import DarkPng from "../../assets/website/dark-mode-button.png";
import LightPng from "../../assets/website/light-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);
  return (
    <>
      <div className="relative">
        <img
          src={LightPng}
          alt="LightPng"
          className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
            theme === "dark" ? "opacity-0" : "opacity-100"
          }
          }`}
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
        <img
          src={DarkPng}
          alt="DarkPng"
          className="w-12 cursor-pointer drop-shadow-[1px_1px_2px_rgba(0,0,0,0.5)] transition-all duration-300"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        />
      </div>
    </>
  );
};

export default DarkMode;
