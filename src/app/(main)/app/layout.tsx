import DashboardNavbar from "@/components/dashboard/dashboard-navbar";
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";
import React from "react";

interface Props {
    children: React.ReactNode;
}

const DashboardLayout = ({children} : Props) => {
    return (
        <div className="flex flex-col min-h-screen w-full bg-[#09090b] text-white">
            <DashboardNavbar/>
            <main className="flex flex-col lg:flex-row flex-1 size-full bg-[#09090b]">
                <DashboardSidebar/>
                <div className="w-full pt-14 lg:ml-72 bg-[#09090b] min-h-[calc(100vh-3.5rem)]">
                    {children}</div>
            </main>
        </div>
    );
};

export default DashboardLayout;
