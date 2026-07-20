"use client";
import { useTheme } from "next-themes";
import React, { useState } from "react";

const Mode = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  return (
    <button
      type="button"
      className={`relative w-14 h-7 rounded-full transition-colors hoverEffect border cursor-pointer
        ${isDark ? "bg-amber-200 border-amber-400" : "bg-gray-900 border-gray-600"}`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <div
        className={`absolute top-1 w-4 h-4 flex justify-center items-center transition-all duration-300
          ${isDark ? "left-1" : "left-8"}`}
      >
        {isDark ? "🔆" : "🌙"}
      </div>
    </button>
  );
};

export default Mode;
