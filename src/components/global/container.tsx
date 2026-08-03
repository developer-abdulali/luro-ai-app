"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  className?: string;
  children?: React.ReactNode;
  delay?: number;
  reverse?: boolean;
  simple?: boolean;
}

const Container = ({ children, className, delay, reverse, simple }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: reverse ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        delay: delay,
        duration: simple ? 0.2 : 0.4,
        type: simple ? "keyframes" : "spring",
        stiffness: simple ? 100 : undefined,
      }}
      className={cn("w-full h-full", className)}
    >
      {children}
    </motion.div>
  );
};

export default Container;
