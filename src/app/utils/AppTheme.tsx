"use client";
import { useEffect } from "react";

export default function AppTheme({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const html = document.documentElement;

    if (
      theme === "dark" ||
      (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, []);

  return children;
}
