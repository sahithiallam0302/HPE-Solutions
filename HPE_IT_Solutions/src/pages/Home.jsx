import React from 'react';
import Hero from '../components/Hero';
import AboutUsSection from '../components/HomePage-Sections/AboutUsSection';
import OurDivisions from '../components/HomePage-Sections/OurDivisions';
import Certifications from '../components/Certifications';
import WorkforceStrength from '../components/HomePage-Sections/WorkforceStrength';
import ImpactAtScale from '../components/HomePage-Sections/ImpactAtScale';
import ContactCTA from '../components/HomePage-Sections/ContactCTA';
const Home = () => {
    return (
        <>
            <Hero />
            <AboutUsSection />
            <OurDivisions />
            <Certifications />
            <WorkforceStrength />
            <ImpactAtScale />
            <ContactCTA />
        </>
    );
};

export default Home;
