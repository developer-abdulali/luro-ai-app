import React from "react";

export default function AuthLayout({children} : {
    children : React.ReactNode;
}) {
    return (
        <div className="relative min-h-screen w-full bg-[#030303] text-white flex flex-col items-center justify-center overflow-hidden selection:bg-neutral-800 selection:text-white">
            {/* Dark background grid and purple glow accents */}
            <div className="absolute inset-0 bg-[radial-gradient(#1e1b4b_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none"/>
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 blur-[140px] rounded-full pointer-events-none"/>
            <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-indigo-900/10 blur-[100px] rounded-full pointer-events-none"/>

            <div className="relative z-10 w-full flex flex-col items-center justify-center">
                {children} </div>
        </div>
    );
}
