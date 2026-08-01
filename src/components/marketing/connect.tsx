import React from "react";
import Container from "../global/container";
import SectionBadge from "../ui/section-badge";
import Image from "next/image";
import Particles from "../ui/particles";

const Connect = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8 md:py-12 w-full">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <SectionBadge title="Connect tools" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
            Seamless Integration with your favourite tools
          </h2>
          <p className="text-base md:text-lg text-accent-foreground/80 mt-6">
            We support a wide range of integrations to help you connect your
            favorite tools and services with our platform.
          </p>
        </div>
      </Container>
      <Container>
        <div className="w-full relative mt-12">
          <Image
            src="/images/connect.png"
            alt="Connect tools"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
          <Particles
            className="absolute inset-0"
            quality={150}
            ease={80}
            color="#e4e4e7"
            refresh
          />
        </div>
      </Container>
    </div>
  );
};

export default Connect;
