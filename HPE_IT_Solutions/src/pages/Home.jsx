import React from 'react';
import Hero from '../components/Hero';
import AboutUsSection from '../components/HomePage-Sections/AboutUsSection';
import OurDivisions from '../components/HomePage-Sections/OurDivisions';
import Certifications from '../components/Certifications';
const Home = () => {
    return (
        <>
            <Hero />
            <AboutUsSection />
            <OurDivisions />
            <Certifications />
        </>
    );
};

export default Home;
