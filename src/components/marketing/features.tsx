"use client";

import React from "react";
import Container from "../global/container";
import SectionBadge from "../ui/section-badge";
import MagicCard from "../ui/magic-card";
import { Sparkles, Zap, ShipWheel } from "lucide-react";
import Ripple from "../ui/ripple";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <SectionBadge title="Features" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
            Create content faster <br /> & smarter
          </h2>
          <p className="text-base md:text-lg text-accent-foreground/80 mt-6">
            Transform your social media strategy with Luro AI&apos;s
            cutting-edge features, designed to optimize content creation and
            engagement like never before.
          </p>
        </div>
      </Container>

      <div className="mt-16 w-full max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex flex-col gap-5 w-full">
          {/* ROW 1: Get Advanced Analytics & Sparkles Ripple */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] w-full gap-5">
            {/* Card 7: Get Advanced Analytics */}
            {/* Card 6: Sparkles Ripple */}
            <MagicCard
              particles={true}
              className="flex flex-col justify-center items-center h-full min-h-[240px] bg-neutral-900/40 border border-neutral-800/80 rounded-2xl"
            >
              <div className="p-6 flex items-center justify-center h-full min-h-[240px] relative w-full overflow-hidden">
                <div className="relative z-20 flex items-center justify-center">
                  <Sparkles className="w-14 h-14 text-white fill-white/10" />
                </div>
                <Ripple
                  mainCircleSize={80}
                  numCircles={5}
                  mainCircleOpacity={0.15}
                />
              </div>
            </MagicCard>
            <MagicCard
              particles={true}
              className="flex flex-col justify-between h-full bg-neutral-900/40 border border-neutral-800/80 rounded-2xl"
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div className="relative w-full h-36 flex items-end justify-center gap-3 pb-2 select-none">
                  <div className="w-6 h-16 rounded-full bg-neutral-800/80"></div>
                  <div className="w-6 h-24 rounded-full bg-neutral-800/80"></div>
                  <div className="w-6 h-32 rounded-full bg-purple-600 relative flex flex-col items-center justify-start pt-1 shadow-[0_0_20px_rgba(168,85,247,0.6)]">
                    <div className="absolute -top-7 px-2 py-0.5 rounded-full bg-purple-500 text-white text-[10px] font-bold flex items-center gap-1 shadow-md border border-purple-300/40">
                      <span className="text-[9px]">▲</span> 2K
                    </div>
                  </div>
                  <div className="w-6 h-28 rounded-full bg-neutral-800/80"></div>
                  <div className="w-6 h-20 rounded-full bg-neutral-800/80"></div>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-white">
                    Get advanced analytics
                  </h3>
                  <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                    Track your performance with detailed analytics and optimize
                    to get better results.
                  </p>
                </div>
              </div>
            </MagicCard>
          </div>

          {/* ROW 2: Content ideation, Stacked Make it better + Logo, Seamless integrations */}
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-5 items-stretch">
            {/* Card 3: Content Ideation */}
            <MagicCard
              particles={true}
              className="flex flex-col justify-between h-full bg-neutral-900/40 border border-neutral-800/80 rounded-2xl"
            >
              <div className="p-6 flex flex-col justify-between h-full min-h-[360px]">
                <div className="relative w-full h-44 flex items-center justify-center overflow-hidden">
                  <div className="w-14 h-14 rounded-full bg-neutral-800/90 border border-neutral-700/80 flex items-center justify-center shadow-xl relative z-20">
                    <Zap className="w-6 h-6 text-white fill-white" />
                  </div>
                  <Ripple
                    mainCircleSize={56}
                    numCircles={4}
                    mainCircleOpacity={0.15}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Content ideation
                  </h3>
                  <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                    Generate ideas for your content with our AI-powered tools to
                    create engaging posts in seconds.
                  </p>
                </div>
              </div>
            </MagicCard>

            {/* Col 2: Stacked 2 Cards (Make it better top + Logo bottom) */}
            <div className="flex flex-col gap-5 h-full justify-between">
              {/* Top Sub-card: Make it better */}
              <MagicCard
                particles={false}
                className="bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-3"
              >
                <div className="relative w-full h-24 rounded-xl bg-neutral-950/80 border border-neutral-800/80 p-3 overflow-hidden flex items-center justify-center">
                  <p className="text-[10px] text-neutral-600/40 leading-relaxed select-none font-mono text-center blur-[0.6px]">
                    AI&apos;s cutting-edge features. Reach audience with Luro
                    AI. Create content faster and smarter.
                  </p>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium flex items-center gap-2 border border-purple-400/40 shadow-[0_0_15px_rgba(147,51,234,0.6)]">
                      <ShipWheel className="w-3.5 h-3.5 text-white" /> Make it
                      better
                    </button>
                  </div>
                </div>
              </MagicCard>

              {/* Bottom Sub-card: Logo Ripple */}
              <MagicCard
                particles={true}
                className="flex-1 bg-neutral-900/40 border border-neutral-800/80 rounded-2xl min-h-[230px] flex items-center justify-center"
              >
                <div className="relative w-full h-full flex items-center justify-center min-h-[220px] overflow-hidden">
                  <div className="w-16 h-16 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center relative z-20 shadow-2xl">
                    <ShipWheel className="w-8 h-8 text-white" />
                  </div>
                  <Ripple
                    mainCircleSize={64}
                    numCircles={5}
                    mainCircleOpacity={0.15}
                  />
                </div>
              </MagicCard>
            </div>

            {/* Card 5: Seamless Integrations */}
            <MagicCard
              particles={true}
              className="flex flex-col justify-between h-full bg-neutral-900/40 border border-neutral-800/80 rounded-2xl"
            >
              <div className="p-6 flex flex-col justify-between h-full min-h-[360px]">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Seamless integrations
                  </h3>
                  <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                    Connect your favorite tools and platforms to streamline your
                    workflow and save time.
                  </p>
                </div>

                <div className="relative w-full h-28 flex items-center justify-center mt-6">
                  <div className="flex items-center justify-between w-full max-w-[240px] relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-neutral-800/90 border border-neutral-700/80 flex items-center justify-center shadow-lg">
                      <InstagramIcon className="w-5 h-5 text-neutral-300" />
                    </div>

                    <div className="flex-1 h-[2px] bg-gradient-to-r from-neutral-700 via-purple-500 to-purple-500 mx-2"></div>

                    <div className="w-12 h-12 rounded-xl bg-purple-600 border border-purple-400/50 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.8)] shrink-0">
                      <ShipWheel className="w-6 h-6 text-white" />
                    </div>

                    <div className="flex-1 h-[2px] bg-gradient-to-r from-purple-500 via-purple-500 to-neutral-700 mx-2"></div>

                    <div className="w-10 h-10 rounded-xl bg-neutral-800/90 border border-neutral-700/80 flex items-center justify-center shadow-lg">
                      <FacebookIcon className="w-5 h-5 text-neutral-300" />
                    </div>
                  </div>
                </div>
              </div>
            </MagicCard>
          </div>

          {/* ROW 3: Image generation with AI & Hashtags suggestions */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] w-full gap-5">
            {/* Card 1: Image Generation */}
            <MagicCard
              particles={true}
              className="flex flex-col justify-between h-full bg-neutral-900/40 border border-neutral-800/80 rounded-2xl"
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div className="w-full bg-neutral-950/90 border border-neutral-800/80 rounded-xl p-3 flex flex-col gap-2.5 shadow-xl select-none mb-6">
                  <div className="flex items-center justify-between text-[11px] text-neutral-400 border-b border-neutral-800/60 pb-2">
                    <div className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 rounded-md bg-neutral-800 text-white font-medium flex items-center gap-1">
                        <span className="text-purple-400">✦</span> Create
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-neutral-900 text-neutral-400">
                        Upload
                      </span>
                      <span className="px-2 py-0.5 rounded-md bg-neutral-900 text-neutral-400">
                        + Custom
                      </span>
                    </div>
                    <span className="text-neutral-500 hover:text-white cursor-pointer px-1">
                      ✕
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 rounded-lg p-1.5 text-[11px]">
                    <span className="text-neutral-400 px-1 truncate flex-1">
                      add a new background
                    </span>
                    <span className="px-2.5 py-1 rounded bg-purple-600 text-white font-medium flex items-center gap-1 shrink-0 text-[10px]">
                      <Sparkles className="w-3 h-3" /> Generate
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <div className="h-20 rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-500 border border-white/10 flex items-center justify-center relative overflow-hidden">
                      <div className="w-8 h-12 bg-white/20 backdrop-blur-sm rounded-sm"></div>
                    </div>
                    <div className="h-20 rounded-lg bg-gradient-to-tr from-purple-600 to-fuchsia-500 border border-white/10 flex items-center justify-center relative overflow-hidden">
                      <div className="w-8 h-12 bg-white/20 backdrop-blur-sm rounded-sm"></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    Image generation with AI
                  </h3>
                  <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                    Create stunning images with AI-powered tools in seconds.
                  </p>
                </div>
              </div>
            </MagicCard>

            {/* Card 2: Hashtags Suggestions */}
            <MagicCard
              particles={true}
              className="flex flex-col justify-between h-full bg-neutral-900/40 border border-neutral-800/80 rounded-2xl"
            >
              <div className="p-6 flex flex-col justify-between h-full">
                <div className="relative w-full h-52 flex items-center justify-center overflow-hidden rounded-xl bg-neutral-950/40 border border-neutral-800/40">
                  <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-3 p-4 opacity-20 text-xs font-mono text-neutral-400 select-none">
                    <span>#facebook</span>
                    <span>#youtube</span>
                    <span>#instagram</span>
                    <span>#tiktok</span>
                    <span>#snapchat</span>
                    <span>#pinterest</span>
                    <span>#media</span>
                    <span>#books</span>
                    <span>#blog</span>
                    <span>#web</span>
                    <span>#trending</span>
                    <span>#viral</span>
                  </div>
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-neutral-800/90 border border-neutral-700/80 flex items-center justify-center shadow-2xl relative z-20">
                      <span className="text-2xl font-bold text-white">#</span>
                    </div>
                    <Ripple
                      mainCircleSize={64}
                      numCircles={4}
                      mainCircleOpacity={0.15}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-white">
                    Hashtags suggestions
                  </h3>
                  <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                    Get hashtag suggestions based on your content and audience
                    to increase your reach and engagement.
                  </p>
                </div>
              </div>
            </MagicCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
