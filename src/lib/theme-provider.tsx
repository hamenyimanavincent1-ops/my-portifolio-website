"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme";
const THEME_CHANGE_EVENT = "theme-change";

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "dark";
  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return getSystemTheme();
}

function subscribeTheme(onChange: () => void) {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  window.addEventListener(THEME_CHANGE_EVENT, onChange);
  mediaQuery.addEventListener("change", onChange);
  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, onChange);
    mediaQuery.removeEventListener("change", onChange);
  };
}

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore<Theme>(subscribeTheme, getStoredTheme, () => "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = useCallback(() => {
    localStorage.setItem(STORAGE_KEY, getStoredTheme() === "dark" ? "light" : "dark");
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}