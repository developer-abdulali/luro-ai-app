"use client";

import { cn } from "@/lib/utils";
import { useClerk } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "../ui/button";
import { LogOutIcon, SearchIcon } from "lucide-react";
import { SIDEBAR_LINKS } from "@/contants/links";
import Container from "../global/container";
import Link from "next/link";

const DashboardSidebar = () => {
  const { signOut } = useClerk();
  const pathname = usePathname();

  const handleLogOut = async () => await signOut();

  return (
    <div
      id="sidebar"
      className="hidden lg:flex flex-col fixed top-16 left-0 bottom-0 z-50 bg-[#09090b] border-r border-neutral-800/80 w-72"
    >
      <div className={cn("flex flex-col size-full p-3")}>
        <Container delay={0.2} className="h-max">
          <Button variant="outline" className="w-full justify-between px-2">
            <span className="flex items-center gap-x-1 text-foreground/80">
              <SearchIcon className="size-4" />
              <span className="text-sm">Search...</span>
            </span>
            <span className="px-1 py-px text-xs rounded-sm bg-muted text-muted-foreground">
              ⌘K
            </span>
          </Button>
        </Container>

        {/* Sidebar Links */}
        <ul className="w-full py-5 space-y-2">
          {SIDEBAR_LINKS.map((link, i) => {
            const isActive = pathname === link.href;

            return (
              <li key={i} className="w-full">
                <Container delay={0.1 + i / 10}>
                  <Link
                    href={link.href}
                    className={buttonVariants({
                      variant: "ghost",
                      className: isActive
                        ? "bg-muted text-primary w-full !justify-start"
                        : "text-foreground/70 w-full !justify-start",
                    })}
                  >
                    <link.icon
                      strokeWidth={2}
                      className="mr-2 size-[18px] mr1.5"
                    />
                    {link.label}
                  </Link>
                </Container>
              </li>
            );
          })}
        </ul>

        {/* SignOut button */}
        <div className="mt-auto flex flex-col gap-3 w-full">
          <Container delay={0.3}>
            <div className="h-10 w-full">
              <Button
                onClick={handleLogOut}
                variant="ghost"
                className="w-full justify-start"
              >
                <LogOutIcon className="size-4 mr-1.5" />
                Logout
              </Button>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
