import { cn } from "@/lib/utils";
import React from "react";

interface LoadingIconProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const LoadingIcon = ({ size, className }: LoadingIconProps) => {
  return (
    <div
      className={cn(
        "border-2 border-t border-muted-foreground w-full animate-loading",
        size === "sm" && "w-4 h-4",
        size === "md" && "w-6 h-6",
        size === "lg" && "w-8 h-8",
        className,
      )}
    />
  );
};

export default LoadingIcon;
