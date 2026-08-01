"use client";

import React from "react";
import Container from "../global/container";
import { Button } from "../ui/button";
import Particles from "../ui/particles";
import Link from "next/link";

const CTA = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative">
      <Container>
        <div className="relative w-full max-w-5xl mx-auto rounded-3xl border border-neutral-800/80 bg-neutral-950/80 p-10 md:p-16 lg:p-20 flex flex-col items-center justify-center text-center overflow-hidden shadow-2xl">
          {/* Particles Starry Background */}
          <Particles
            className="absolute inset-0 z-0"
            quantity={100}
            ease={80}
            color="#e4e4e7"
            refresh
          />

          {/* Bottom Radial Glow */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none z-0" />

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-medium tracking-tight text-white leading-tight relative z-10">
            Elevate your <br className="hidden sm:inline" />
            experience with us
          </h2>

          {/* Subheading */}
          <p className="text-neutral-400 text-sm md:text-base mt-6 leading-relaxed max-w-xl mx-auto relative z-10">
            Ready to get started? Sign up now and start your journey with us.
            <br className="hidden sm:inline" />
            We are here to help you grow.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8 relative z-10">
            <Link href="/sign-in">
              <Button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-6 py-2.5 h-11 text-sm font-medium rounded-xl shadow-[0_0_25px_rgba(124,58,237,0.5)] transition-all duration-300">
                Get Started
              </Button>
            </Link>
            <Link href="/#features">
              <Button
                variant="outline"
                className="bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 border border-neutral-800/90 px-6 py-2.5 h-11 text-sm font-medium rounded-xl transition-all duration-300"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CTA;
