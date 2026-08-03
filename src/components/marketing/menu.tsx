"use client";

import Link from "next/link";
import React from "react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {cn} from "@/lib/utils";
import {
    Calendar,
    Hash,
    Users,
    FileText,
    HelpCircle
} from "lucide-react";
import Image from "next/image";

export interface ItemProps {
    title: string;
    href: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
}

export const Item = ({title, href, children, icon} : ItemProps) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link href={href}
                    className="flex items-start gap-x-3 select-none rounded-xl p-2.5 leading-none no-underline outline-none transition-colors hover:bg-neutral-900/90 hover:text-white focus:bg-neutral-900 text-neutral-300">
                    {
                    icon && (
                        <div className="flex items-center justify-center border border-neutral-800 rounded-lg shrink-0 w-9 h-9 text-white bg-neutral-900/80 shadow-xs">
                            {icon} </div>
                    )
                }
                    <div>
                        <div className="text-sm font-semibold leading-none text-white">
                            {title}</div>
                        <p className="line-clamp-2 text-xs leading-snug text-neutral-400 mt-1.5 font-normal">
                            {children} </p>
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    );
};

const Menu = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList className="gap-x-1">
                {/* How it works */}
                <NavigationMenuItem>
                    <NavigationMenuLink href="#how-it-works"
                        className={
                            cn(navigationMenuTriggerStyle(), "h-10 px-4 py-2 text-sm font-normal rounded-md text-neutral-300 hover:text-white w-max hover:bg-transparent")
                    }>
                        How it works
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Features Dropdown */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-10 px-4 py-2 text-sm font-normal rounded-md text-neutral-300 hover:text-white w-max hover:bg-transparent bg-transparent">
                        Features
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <div className="grid w-[560px] grid-cols-2 gap-3 p-3 bg-[#0b0b10] rounded-2xl">
                            {/* Left Promo Card */}
                            <div className="flex flex-col justify-end p-5 rounded-xl bg-[#18181f] border border-neutral-800/80 relative overflow-hidden select-none">
                                <Image src="/images/logo-removebg.png" alt="Luro"
                                    width={28}
                                    height={28}
                                    className="w-7 h-7 object-contain invert"/>
                                <div className="text-base font-semibold text-white">
                                    Luro AI
                                </div>
                                <p className="text-xs text-neutral-400 mt-1 leading-normal">
                                    Your ultimate social media management tool
                                </p>
                            </div>

                            {/* Right Feature List */}
                            <ul className="flex flex-col gap-y-1">
                                <Item title="Content Calendar" href="#features"
                                    icon={
                                        <Calendar
                                    className="w-4 h-4"/>
                                }>
                                    Plan and visualize your content strategy.
                                </Item>
                                <Item title="Hashtag Manager" href="#features"
                                    icon={
                                        <Hash
                                    className="w-4 h-4"/>
                                }>
                                    Research and track trending hashtags.
                                </Item>
                                <Item title="Competitor Analysis" href="#features"
                                    icon={
                                        <Users
                                    className="w-4 h-4"/>
                                }>
                                    Monitor and analyze competitor performance.
                                </Item>
                            </ul>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Pricing */}
                <NavigationMenuItem>
                    <NavigationMenuLink href="#pricing"
                        className={
                            cn(navigationMenuTriggerStyle(), "h-10 px-4 py-2 text-sm font-normal rounded-md text-neutral-300 hover:text-white w-max hover:bg-transparent")
                    }>
                        Pricing
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Integration */}
                <NavigationMenuItem>
                    <NavigationMenuLink href="#integration"
                        className={
                            cn(navigationMenuTriggerStyle(), "h-10 px-4 py-2 text-sm font-normal rounded-md text-neutral-300 hover:text-white w-max hover:bg-transparent")
                    }>
                        Integration
                    </NavigationMenuLink>
                </NavigationMenuItem>

                {/* Resources Dropdown */}
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-10 px-4 py-2 text-sm font-normal rounded-md text-neutral-300 hover:text-white w-max hover:bg-transparent bg-transparent">
                        Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[460px] grid-cols-2 gap-2 p-3">
                            <Item title="Blog" href="#blog"
                                icon={
                                    <FileText
                                className="w-4 h-4"/>
                            }>
                                Read our latest articles and updates.
                            </Item>
                            <Item title="Support" href="#support"
                                icon={
                                    <HelpCircle
                                className="w-4 h-4"/>
                            }>
                                Get help with any issues you may have.
                            </Item>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Menu;
