"use client";

import { cn } from "@/lib/utils";
import { useClerk } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import Wrapper from "../global/wrapper";
import {
  ArrowRightIcon,
  ChevronRightIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Menu from "./menu";
import { Button } from "../ui/button";
import { AnimatePresence, motion } from "framer-motion";

const MOBILE_NAV_LINKS = [
  { name: "How it works", href: "#how-it-works" },
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Integration", href: "#integration" },
  { name: "Resources", href: "#blog" },
];

const Navbar = () => {
  const { user } = useClerk();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-4 inset-x-0 mx-auto max-w-6xl px-2 md:px-12 z-[100] transform transition-all duration-300 ease-out pointer-events-auto",
      )}
    >
      <Wrapper className="backdrop-blur-lg rounded-2xl md:rounded-full border border-neutral-800/80 px-2 md:px-4 flex flex-col bg-black/80 shadow-lg relative">
        <div className="flex items-center justify-between w-full py-2 inset-x-0">
          <div className="flex items-center flex-1 lg:flex-none pl-2">
            <Link
              href="/"
              className="flex items-center gap-x-2"
              onClick={() => setIsOpen(false)}
            >
              <Image
                src="/images/logo-removebg.png"
                alt="Luro"
                width={28}
                height={28}
                className="w-7 h-7 object-contain invert"
              />
              <span className="text-base font-semibold text-white">Luro</span>
            </Link>
            <div className="items-center hidden ml-4 lg:flex">
              <Menu />
            </div>
          </div>

          <div className="flex items-center gap-2 lg:gap-3">
            {user ? (
              <Button size="sm" asChild>
                <Link href="/app">Dashboard</Link>
              </Button>
            ) : (
              <>
                <Link
                  href="/auth/signin"
                  className="hidden sm:flex items-center justify-center h-9 px-4 text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 rounded-full transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  className="hidden sm:flex items-center justify-center h-9 px-4 text-sm font-medium text-black bg-white hover:bg-neutral-200 rounded-full transition-colors gap-1.5"
                >
                  Start for free
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </>
            )}

            <Button
              size="icon"
              variant="ghost"
              onClick={() => setIsOpen((prev) => !prev)}
              aria-label="Toggle Menu"
              className="lg:hidden p-2 w-9 h-9 text-white hover:bg-neutral-800/80 rounded-xl"
            >
              {isOpen ? (
                <XIcon className="w-5 h-5 duration-300" />
              ) : (
                <MenuIcon className="w-5 h-5 duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden lg:hidden w-full border-t border-neutral-800/80 mt-2 py-4 px-2 flex flex-col gap-y-3"
            >
              <nav className="flex flex-col gap-y-1">
                {MOBILE_NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-900/90 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRightIcon className="w-4 h-4 text-neutral-500" />
                  </Link>
                ))}
              </nav>

              <div className="pt-3 border-t border-neutral-800/80 flex flex-col gap-2.5">
                {user ? (
                  <Button
                    asChild
                    className="w-full justify-center rounded-xl bg-white text-black hover:bg-neutral-200 font-medium py-2.5"
                  >
                    <Link href="/app" onClick={() => setIsOpen(false)}>
                      Dashboard
                    </Link>
                  </Button>
                ) : (
                  <>
                    <Link
                      href="/auth/signin"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center h-10 w-full px-4 text-sm font-medium text-neutral-300 hover:text-white bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 rounded-xl transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      href="/auth/signup"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center h-10 w-full px-4 text-sm font-medium text-black bg-white hover:bg-neutral-200 rounded-xl transition-colors gap-2"
                    >
                      Start for free
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Wrapper>
    </header>
  );
};

export default Navbar;
