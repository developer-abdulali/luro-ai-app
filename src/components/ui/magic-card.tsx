"use client";

import React from "react";
import Particles from "./particles";

import { cn } from "@/lib/utils";

export interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  particles?: boolean;
  children: React.ReactNode;
  gradientSize?: number;
  gradientColor?: string;
  borderColor?: string;
  count?: number;
}

const MagicCard = ({
  children,
  className,
  particles = false,
  count = 20,
}: MagicCardProps) => {
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    currentTarget.style.setProperty("--pos-x", `${x}px`);
    currentTarget.style.setProperty("--pos-y", `${y}px`);
  };

  return (
    <div
      className={cn("card rounded-xl lg:rounded-2xl overflow-hidden", className)}
      onMouseMove={onMouseMove}
    >
      <div className="content">
        {particles && (
          <Particles
            className="absolute inset-0 w-full h-full z-10"
            quality={count}
            ease={80}
            color="#d4d4d8"
            refresh
          />
        )}
        {children}
      </div>
    </div>
  );
};

export default MagicCard;
