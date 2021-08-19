import React, { useState, useEffect } from "react";
import "./nav.css";

export default function Nav() {
  const [theme, setTheme] = useState(
    () => JSON.parse(localStorage.getItem("theme")) || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  return (
    <nav className="nav">
      <p className="nav__title">Where in the World?</p>
      {theme === "light" ? (
        <button onClick={() => setTheme("dark")} className="nav__button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="nav__icon"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
          Dark mode
        </button>
      ) : (
        <button onClick={() => setTheme("light")} className="nav__button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="nav__icon"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          Light mode
        </button>
      )}
    </nav>
  );
}
