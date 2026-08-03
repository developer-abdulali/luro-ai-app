"use client";

import React, { useState } from "react";
import Container from "../global/container";
import SectionBadge from "../ui/section-badge";
import { PLANS } from "@/contants/plans";
import MagicCard from "../ui/magic-card";
import { Button } from "../ui/button";
import { Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div id="pricing" className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-24 w-full relative">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <SectionBadge title="Choose your plan" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
            Flexible plans for every creator
          </h2>
          <p className="text-base md:text-lg text-accent-foreground/80 mt-6">
            Choose the plan that fits your goals. Upgrade or downgrade at any time with complete flexibility.
          </p>

          {/* Billing Switcher */}
          <div className="flex items-center justify-center gap-3 mt-8 p-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 backdrop-blur-md">
            <button
              onClick={() => setIsYearly(false)}
              className={cn(
                "px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300",
                !isYearly
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20"
                  : "text-neutral-400 hover:text-white"
              )}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={cn(
                "px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2",
                isYearly
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/20"
                  : "text-neutral-400 hover:text-white"
              )}
            >
              Yearly Billing
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </Container>

      <Container>
        <div className="mt-16 w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
            {PLANS.map((plan) => {
              const isPopular = plan.badge === "Most Popular";
              const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

              return (
                <MagicCard
                  key={plan.id}
                  particles={isPopular}
                  count={15}
                  className={cn(
                    "flex flex-col justify-between h-full bg-neutral-900/40 border rounded-2xl transition-all duration-300 relative",
                    isPopular
                      ? "border-purple-500/60 shadow-[0_0_30px_rgba(168,85,247,0.15)] bg-neutral-900/60"
                      : "border-neutral-800/80 hover:border-neutral-700"
                  )}
                >
                  <div className="p-6 md:p-8 flex flex-col justify-between h-full min-h-[460px] relative z-20">
                    <div>
                      {/* Badge if present */}
                      <div className="flex items-center justify-between min-h-[28px]">
                        <h3 className="text-xl font-bold text-white">
                          {plan.title}
                        </h3>
                        {plan.badge && (
                          <span
                            className={cn(
                              "px-3 py-1 text-xs font-semibold rounded-full border flex items-center gap-1",
                              isPopular
                                ? "bg-purple-600/20 border-purple-500/50 text-purple-300"
                                : "bg-neutral-800/80 border-neutral-700 text-neutral-300"
                            )}
                          >
                            {isPopular && <Sparkles className="w-3 h-3 text-purple-400" />}
                            {plan.badge}
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-neutral-400 mt-3 min-h-[40px] leading-relaxed">
                        {plan.desc}
                      </p>

                      {/* Pricing Display */}
                      <div className="mt-6 flex items-baseline gap-1">
                        <span className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                          ${price}
                        </span>
                        <span className="text-sm text-neutral-400">
                          /{isYearly ? "year" : "month"}
                        </span>
                      </div>

                      <div className="mt-6">
                        <Link href={plan.link} target="_blank" className="w-full block">
                          <Button
                            className={cn(
                              "w-full h-11 text-sm font-medium transition-all duration-300",
                              isPopular
                                ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg shadow-purple-600/30"
                                : "bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700"
                            )}
                          >
                            {plan.buttonText}
                          </Button>
                        </Link>
                      </div>

                      {/* Divider */}
                      <div className="w-full h-[1px] bg-neutral-800/80 my-6" />

                      {/* Features */}
                      <div>
                        <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4">
                          What&apos;s included:
                        </p>
                        <ul className="space-y-3">
                          {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-sm text-neutral-300">
                              <div className="w-5 h-5 rounded-full bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                                <Check className="w-3 h-3 text-purple-400" />
                              </div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </MagicCard>
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Pricing;
