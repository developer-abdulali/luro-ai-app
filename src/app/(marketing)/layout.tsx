import Footer from "@/components/marketing/footer"
import Navbar from "@/components/marketing/navbar"
import React from "react"

interface Props {
    children: React.ReactNode
}

const MarketingLayout = ({ children }: Props) => {
    return (
        <div id="home" className="min-h-screen bg-black text-white relative overflow-x-hidden">
            <Navbar />
            <main className="mx-auto w-full z-40 relative">
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MarketingLayout