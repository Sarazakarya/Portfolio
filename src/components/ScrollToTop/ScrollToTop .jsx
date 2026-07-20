"use client";
import { useState, useEffect } from "react";
import React from "react";
import { ArrowUp } from "lucide-react";
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, []);

  function handleScrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={handleScrollTop}
      className={`fixed text-white cursor-pointer bottom-6 right-6 hoverEffect w-12 h-12 flex justify-center items-center bg-purple-500 hover:bg-purple-600
    ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
