import { useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  function toggleTheme() {
    setDark(!dark);

    document.body.classList.toggle("light");
  }

  return <button onClick={toggleTheme}>{dark ? "🌙" : "☀️"}</button>;
}
