import { Geist } from "next/font/google";
import { cn } from "../functions/cn";
import { generateMetaData } from "../functions/metadata";
import { inter, satoshi } from "@/contants/fonts";
import Providers from "../components/global/providers";
import "./globals.css";
import { Toaster } from "@/components/global/toaster";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = generateMetaData();

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={cn(
          "min-h-screen bg-background text-foreground antialiased font-default overflow-x-hidden !scrollbar-hide",
          inter.variable,
          satoshi.variable,
        )}
      >
        <Toaster richColors theme="dark" position="top-right" />

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
