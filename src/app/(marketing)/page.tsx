import Background from "@/components/global/background";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import Companies from "@/components/marketing/companies";
import Connect from "@/components/marketing/connect";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import Perks from "@/components/marketing/perks";
import Pricing from "@/components/marketing/pricing";
import Reviews from "@/components/marketing/reviews";
import CTA from "@/components/marketing/cta";
import Spotlight from "@/components/ui/spotlight";
import React from "react";

const MarketingPage = () => {
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
