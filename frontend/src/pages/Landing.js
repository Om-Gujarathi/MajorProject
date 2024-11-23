import React from 'react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Testomonial from '../components/Testomonial';
import Pricing from '../components/Pricing';
import NewsLetter from '../components/NewsLetter';

const LandingPage = () => {
    return (
        <>
            <div className="landing-page bg-white">
                <HeroSection />
                <Features />
                <Testomonial />
                <Pricing />
                <NewsLetter />
            </div>
        </>
    );
};

export default LandingPage;
