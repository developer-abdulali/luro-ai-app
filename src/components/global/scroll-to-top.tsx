"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpIcon } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-[90] flex items-center justify-center w-11 h-11 rounded-full bg-neutral-900/90 text-white border border-neutral-800/90 shadow-2xl backdrop-blur-md hover:bg-neutral-800 hover:border-neutral-700 hover:scale-110 active:scale-95 transition-all duration-200 group"
        >
          <ArrowUpIcon className="w-5 h-5 text-neutral-300 group-hover:text-white transition-colors" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
