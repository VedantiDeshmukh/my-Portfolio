import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return !document.documentElement.classList.contains("light");
    }
    return true;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2 rounded-lg border border-border/50 bg-secondary/50 hover:bg-secondary transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? <Moon size={18} className="text-primary" /> : <Sun size={18} className="text-primary" />}
    </button>
  );
};

export default ThemeToggle;
