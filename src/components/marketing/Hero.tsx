import Container from "../global/container";
import { ArrowRightIcon } from "lucide-react";
import BlurText from "../ui/blur-text";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="how-it-works" className="flex flex-col items-center text-center w-full max-w-5xl my-16 md:my-20 mx-auto z-40 relative">
      <Container>
        <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/60 backdrop-blur-md cursor-pointer hover:border-neutral-700 transition-all select-none w-max mx-auto">
          <div className="relative flex items-center justify-center">
            <span className="animate-ping absolute inline-flex h-4 w-4 rounded-full bg-purple-500/40 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.9)]"></span>
          </div>

          <span className="text-xs sm:text-sm font-medium text-neutral-200">
            Build for the future
          </span>

          <span className="text-xs text-neutral-300 px-2 py-0.5 rounded-full bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center gap-1">
            What&apos;s new
            <ArrowRightIcon className="w-3 h-3 text-neutral-400" />
          </span>
        </div>
      </Container>

      {/* Blur text */}
      <BlurText
        words={"Your ultimate social media\n marketing tool"}
        className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent py-2 md:py-0 lg:!leading-snug font-medium tracking-[-0.0125em] mt-6 font-heading"
      />

      <Container delay={0.1}>
        <p className="text-sm sm:text-base lg:text-lg mt-4 text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Elevate your social media presence with AI-powered content creation
          and scheduling.{" "}
          <span className="hidden sm:inline">
            Luro is the all-in-one solution for your social media marketing
            needs.
          </span>
        </p>
      </Container>

      <Container delay={0.2}>
        <div className="flex items-center justify-center gap-4 md:gap-x-6 mt-8">
          <Button
            asChild
            size="lg"
            className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-medium px-6 h-11 rounded-lg shadow-lg shadow-purple-900/20"
          >
            <Link href="/app">Start for free</Link>
          </Button>
          <Button
            asChild
            variant="tertiary"
            size="lg"
            className="hidden md:flex border border-neutral-800 bg-[#18181b] hover:bg-[#27272a] text-white font-medium px-6 h-11 rounded-lg"
          >
            <Link href="#">How it works</Link>
          </Button>
        </div>
      </Container>

      <Container delay={0.3}>
        <div className="relative mx-auto max-w-7xl mt-12">
          <div className="absolute -inset-4 -z-10 gradient blur-[10rem] opacity-80 rounded-full" />
          <div className="relative rounded-xl lg:rounded-[32px] border border-neutral-700 bg-neutral-800/50 p-2 md:p-4 backdrop-blur-lg">
            <div className="rounded-lg lg:rounded-[24px] border p-2 border-neutral-700 bg-black">
              <Image
                src="/images/dashboard.png"
                alt="Luro dashboard preview"
                width={1920}
                height={1080}
                className="rounded-lg lg:rounded-[20px] w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
