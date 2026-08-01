import React from "react";
import Container from "../global/container";
import SectionBadge from "../ui/section-badge";
import { PERKS } from "@/contants/perks";
import { LucideIcon } from "lucide-react";

interface PerkProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const Perk = ({ icon: Icon, title, description }: PerkProps) => {
  return (
    <div className="relative p-8 md:p-10 flex flex-col justify-start bg-neutral-950/60 border border-neutral-800/80 -ml-[1px] -mt-[1px] transition-all duration-300 group hover:bg-gradient-to-b hover:from-purple-950/30 hover:to-neutral-950/90 cursor-pointer">
      {/* Icon */}
      <div className="flex items-center">
        <Icon className="w-8 h-8 text-neutral-300 stroke-[1.5] group-hover:text-purple-400 transition-colors duration-300" />
      </div>

      {/* Title with left vertical indicator pill */}
      <div className="relative mt-8 md:mt-10 flex items-center">
        <div className="absolute -left-8 md:-left-10 w-[3px] h-5 bg-neutral-700/60 group-hover:bg-purple-500 group-hover:shadow-[0_0_12px_rgba(168,85,247,0.8)] rounded-r-full transition-all duration-300" />
        <h3 className="text-lg md:text-xl font-medium text-white group-hover:text-white transition-colors duration-200">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm text-neutral-400 mt-2.5 leading-relaxed font-normal">
        {description}
      </p>
    </div>
  );
};

const Perks = () => {
  return (
    <div className="flex items-center flex-col justify-center py-12 md:py-16 lg:py-24 w-full relative">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <SectionBadge title="Perks" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
            Discover the benefits
          </h2>
          <p className="text-base md:text-lg text-accent-foreground/80 mt-6">
            Explore the powerful features and advantages that Luro offers to help
            you grow your social media presence.
          </p>
        </div>
      </Container>

      <Container>
        <div className="mt-16 w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border border-neutral-800/80 rounded-2xl overflow-hidden bg-neutral-950/80">
            {PERKS.map((perk, i) => (
              <Perk key={i} {...perk} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Perks;
