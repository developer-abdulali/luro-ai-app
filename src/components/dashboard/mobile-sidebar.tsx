"use client";

import { useClerk } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button, buttonVariants } from "../ui/button";
import { LogOutIcon, MenuIcon, SearchIcon, XIcon } from "lucide-react";
import { SIDEBAR_LINKS } from "@/contants/links";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const MobileSidebar = () => {
  const { signOut } = useClerk();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogOut = async () => {
    setIsOpen(false);
    await signOut();
  };

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
    <div className="lg:hidden">
      <Button
        size="icon"
        variant="ghost"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle Dashboard Menu"
        className="p-2 w-9 h-9 text-white hover:bg-neutral-800/80 rounded-xl"
      >
        {isOpen ? (
          <XIcon className="w-5 h-5 duration-300" />
        ) : (
          <MenuIcon className="w-5 h-5 duration-300" />
        )}
      </Button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <div className="lg:hidden fixed inset-0 top-16 z-[9999] pointer-events-auto">
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsOpen(false)}
                  className="fixed inset-0 top-16 bg-black/80 backdrop-blur-md z-[9998]"
                />

                {/* Slide-out Sidebar Panel */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100%" }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="fixed top-16 left-0 bottom-0 z-[9999] bg-[#09090b] border-r border-neutral-800/80 w-80 max-w-[85vw] p-5 flex flex-col justify-between shadow-2xl overflow-y-auto"
                >
                  <div className="flex flex-col gap-5">
                    <Button variant="outline" className="w-full justify-between px-3 border-neutral-800 bg-neutral-900/90 hover:bg-neutral-800">
                      <span className="flex items-center gap-x-2 text-foreground/80">
                        <SearchIcon className="size-4 text-neutral-400" />
                        <span className="text-sm">Search...</span>
                      </span>
                      <span className="px-1.5 py-0.5 text-xs rounded bg-neutral-800 text-neutral-400 font-mono">
                        ⌘K
                      </span>
                    </Button>

                    {/* Nav Links */}
                    <ul className="w-full space-y-1.5 pt-1">
                      {SIDEBAR_LINKS.map((link, i) => {
                        const isActive = pathname === link.href;

                        return (
                          <li key={i} className="w-full">
                            <Link
                              href={link.href}
                              onClick={() => setIsOpen(false)}
                              className={buttonVariants({
                                variant: "ghost",
                                className: isActive
                                  ? "bg-neutral-800 text-white w-full !justify-start font-semibold px-3 py-2.5 rounded-xl"
                                  : "text-neutral-300 hover:text-white hover:bg-neutral-900/90 w-full !justify-start px-3 py-2.5 rounded-xl transition-colors",
                              })}
                            >
                              <link.icon
                                strokeWidth={2}
                                className="mr-3 size-5 text-purple-400"
                              />
                              <span className="text-sm">{link.label}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Logout Button */}
                  <div className="pt-4 border-t border-neutral-800/80 w-full mt-6">
                    <Button
                      onClick={handleLogOut}
                      variant="ghost"
                      className="w-full justify-start text-neutral-400 hover:text-red-400 hover:bg-neutral-900/90 px-3 py-2.5 rounded-xl transition-colors"
                    >
                      <LogOutIcon className="size-5 mr-3 text-neutral-400" />
                      <span className="text-sm font-medium">Logout</span>
                    </Button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
};

export default MobileSidebar;
