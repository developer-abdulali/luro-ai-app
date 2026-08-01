import React from "react";
import Marquee from "../ui/marquee";
import {
  Building2,
  Hexagon,
  Zap,
  Globe2,
  ShieldCheck,
  Sparkles,
  Layers,
  Cpu,
  Command,
} from "lucide-react";

const COMPANIES = [
  {
    name: "Acme Corp",
    icon: Building2,
  },
  {
    name: "Quantum",
    icon: Hexagon,
  },
  {
    name: "Nexus AI",
    icon: Cpu,
  },
  {
    name: "Pulse Labs",
    icon: Zap,
  },
  {
    name: "Apex Global",
    icon: Globe2,
  },
  {
    name: "Vortex",
    icon: Layers,
  },
  {
    name: "Horizon",
    icon: Sparkles,
  },
  {
    name: "Echo Shield",
    icon: ShieldCheck,
  },
  {
    name: "Command",
    icon: Command,
  },
];

const Companies = () => {
  return (
    <div className="flex w-full py-12 md:py-20">
      <div className="flex flex-col items-center justify-center text-center w-full">
        <h2 className="text-xl font-medium heading text-neutral-400">
          Companies that trust us
        </h2>

        <div className="mt-10 w-full relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <Marquee pauseOnHover className="[--duration:30s]">
            {COMPANIES.map((company) => {
              const Icon = company.icon;
              return (
                <div
                  key={company.name}
                  className="flex items-center gap-2.5 mx-6 opacity-60 hover:opacity-100 transition-opacity select-none"
                >
                  <Icon className="w-6 h-6 text-neutral-300" />
                  <span className="text-base font-semibold tracking-wide text-neutral-300">
                    {company.name}{" "}
                  </span>
                </div>
              );
            })}
          </Marquee>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
