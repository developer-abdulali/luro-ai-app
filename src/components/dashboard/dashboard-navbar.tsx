import Link from "next/link";
import Image from "next/image";
import Container from "../global/container";

import { HelpCircleIcon, Zap } from "lucide-react";
import { Button } from "../ui/button";
import MobileSidebar from "./mobile-sidebar";

const DashboardNavbar = () => {
  return (
    <header
      id="dashboard-nav"
      className="fixed top-0 inset-x-0 w-full h-16 bg-[#09090b]/80 backdrop-blur-md border-b border-neutral-800/80 px-4 z-50 text-white"
    >
      <Container className="flex items-center justify-between size-full">
        <div className="flex items-center">
          <Link href="/app" className="flex items-center gap-x-2">
            <Image
              src="/images/logo.png"
              alt="Luro"
              width={26}
              height={26}
              className="w-6 h-6 object-contain"
            />
            <span className="text-lg font-semibold">Luro</span>
          </Link>
        </div>

        <div className="flex items-center gap-x-2">
          <Button size="sm" variant={"ghost"}>
            <Zap className="size-4 mr-1.5 text-orange-500 fill-orange-500" />
            Upgrade
          </Button>

          <Button
            asChild
            size="icon"
            variant={"ghost"}
            className="hidden lg:flex"
          >
            <Link href="/help" target="_blank">
              <HelpCircleIcon className="size-5" />
            </Link>
          </Button>

          <MobileSidebar />
        </div>
      </Container>
    </header>
  );
};

export default DashboardNavbar;
