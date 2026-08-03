"use client";

import {useEffect} from "react";
import Background from "@/components/global/background";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import Companies from "@/components/marketing/companies";
import Connect from "@/components/marketing/connect";
import CTA from "@/components/marketing/cta";
import Features from "@/components/marketing/features";
import Perks from "@/components/marketing/perks";
import Pricing from "@/components/marketing/pricing";
import Reviews from "@/components/marketing/reviews";
import Spotlight from "@/components/ui/spotlight";
import Hero from "@/components/marketing/Hero";

const MarketingPage = () => {
    useEffect(() => { // Reset scroll to top on page load/refresh unless a hash anchor is explicitly in URL
        if (!window.location.hash) {
            window.scrollTo({top: 0, left: 0, behavior: "instant" as ScrollBehavior});
        }
    }, []);

    return (
        <Background>
            <Wrapper className="py-20 relative">
                <Container className="relative">
                    <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="rgba(255,255,255,0.5)"/>

                    <Hero/>

                    <Container className="py-8 lg:py-20">
                        <Companies/>
                    </Container>
                    <Connect/>
                    <Features/>
                    <Perks/>
                    <Pricing/>
                    <Reviews/>
                    <CTA/>
                </Container>
            </Wrapper>
        </Background>
    );
};

export default MarketingPage;
