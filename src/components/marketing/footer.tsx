import React from "react";
import Container from "../global/container";
import { FOOTER_LINKS } from "@/contants/links";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
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

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
    {...props}
  >
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="w-full border-t border-neutral-800/80 bg-black pt-16 pb-12 relative z-40">
      <Container className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 pb-12">
          {/* Left Brand Column */}
          <div className="flex flex-col items-start max-w-sm">
            <Link href="/" className="flex items-center gap-x-2">
              <Image
                src="/images/logo.png"
                alt="Luro"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
              <span className="text-base font-semibold text-white">Luro</span>
            </Link>

            <p className="text-sm text-neutral-400 mt-4 leading-relaxed">
              Empower your business <br />
              with our AI tools.
            </p>
            <Link href="/auth/signup" className="mt-6">
              <Button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-sm font-medium px-5 py-2 rounded-xl shadow-[0_0_20px_rgba(124,58,237,0.4)] transition-all duration-300">
                Start for free
              </Button>
            </Link>
          </div>

          {/* Right Links Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12">
            {FOOTER_LINKS.map((column, idx) => (
              <div key={idx} className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold text-white">
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link
                        href={link.href}
                        className="text-sm text-neutral-400 hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            &copy; 2026 Luro. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-neutral-400">
            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <TwitterIcon className="w-4 h-4" />
            </Link>
            <Link
              href="https://discord.com"
              target="_blank"
              className="hover:text-white transition-colors"
            >
              <DiscordIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
