"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurIntProps {
  words: React.ReactNode | string;
  className?: string;
  duration?: any;
  variant?: {
    hidden: { filter: string; opacity: number };
    visibel: { filter: string; opacity: number };
  };
}

const BlurText = ({
  words,
  className,
  variant,
  duration = 1,
}: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0, y: -20 },
    visible: { filter: "blur(0px)", opacity: 1, y: 0 },
  };

  const combinedVariants = variant || defaultVariants;

  const renderWords = () => {
    if (typeof words === "string") {
      return words.split("\n").map((line, index) => (
        <span key={index}>
          {line}
          {index < words.split("\n").length - 1 && (
            <br className="hidden md:block" />
          )}
        </span>
      ));
    }

    return words;
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
    >
      <h1 className={cn(className, "text-center tracking-[-0.02em]")}>
        {renderWords()}
      </h1>
    </motion.div>
  );
};

export default BlurText;
