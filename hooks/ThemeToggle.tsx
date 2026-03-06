"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();

  return (
    <button
      onClick={() => {
        const currentTheme = theme === "system" ? systemTheme : theme;
        setTheme(currentTheme === "dark" ? "light" : "dark");
      }}
      className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 flex items-center justify-center w-10 h-10 transition-colors"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {theme == "dark" || theme == "system" ? <Sun className="block w-5 h-5" /> : <Moon className="block w-5 h-5" />}
    </button>
  );
}
