"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ThemeCtx = createContext({ theme: "light", toggle: () => {} });
const LangCtx  = createContext({ lang: "en", setLang: () => {} });

export function Providers({ children }) {
  const [theme, setTheme] = useState("light");
  const [lang,  setLang]  = useState("en");

  useEffect(() => {
    const saved      = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(saved || (prefersDark ? "dark" : "light"));

    // Only "en" ships content today (see lib/i18n.js). A stale "es"/"fr" saved
    // by an earlier version of the site is ignored so document.lang can't end
    // up mismatched with the actual (English) content.
    const savedLang = localStorage.getItem("lang");
    if (savedLang && ["en"].includes(savedLang)) setLang(savedLang);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === "dark" ? "#0D1017" : "#FAFAFA";
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("lang", lang);
  }, [lang]);

  const toggle = () => setTheme(t => (t === "light" ? "dark" : "light"));

  return (
    <ThemeCtx.Provider value={{ theme, toggle }}>
      <LangCtx.Provider value={{ lang, setLang }}>
        {children}
      </LangCtx.Provider>
    </ThemeCtx.Provider>
  );
}

export const useTheme = () => useContext(ThemeCtx);
export const useLang  = () => useContext(LangCtx);
