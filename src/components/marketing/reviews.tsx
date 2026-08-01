"use client";

import React from "react";
import Container from "../global/container";
import SectionBadge from "../ui/section-badge";
import { REVIEWS } from "@/contants/reviews";
import Marquee from "../ui/marquee";
import Image from "next/image";

const firstRow = REVIEWS.slice(0, 6);
const secondRow = REVIEWS.slice(6, 12);

const ReviewCard = ({
  name,
  username,
  review,
  img,
}: {
  name: string;
  username: string;
  review: string;
  img: string;
}) => {
  return (
    <div className="flex flex-col justify-between w-[300px] md:w-[340px] p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 hover:bg-gradient-to-b hover:from-purple-950/40 hover:to-neutral-900/90 hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all duration-300 shrink-0 select-none group cursor-pointer">
      <div>
        {/* User Info Header */}
        <div className="flex items-center gap-3">
          <Image
            src={img}
            alt={name}
            width={40}
            height={40}
            className="rounded-full object-cover w-10 h-10 border border-neutral-700/60"
          />
          <div className="flex flex-col">
            <h4 className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
              {name}
            </h4>
            <span className="text-xs text-neutral-500">{username}</span>
          </div>
        </div>

        {/* Review Text */}
        <p className="text-sm text-neutral-300 mt-4 leading-relaxed font-normal">
          {review}
        </p>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <SectionBadge title="Testimonials" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
            Loved by creators & teams
          </h2>
          <p className="text-base md:text-lg text-accent-foreground/80 mt-6">
            Discover how Luro AI is helping thousands of creators, agencies, and businesses scale their content effortlessly.
          </p>
        </div>
      </Container>

      {/* Infinite Marquee Container */}
      <div className="relative w-full max-w-7xl mx-auto flex flex-col gap-4 items-center justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        {/* Left & Right Gradient Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 md:w-1/4 bg-gradient-to-r from-background via-background/70 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 md:w-1/4 bg-gradient-to-l from-background via-background/70 to-transparent z-20" />

        {/* Row 1 */}
        <Marquee pauseOnHover repeat={3} className="[--duration:30s] py-1">
          {firstRow.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </Marquee>

        {/* Row 2 (Reverse) */}
        <Marquee reverse pauseOnHover repeat={3} className="[--duration:30s] py-1">
          {secondRow.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Reviews;
