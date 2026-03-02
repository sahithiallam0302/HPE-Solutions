import React from 'react';
import ScrollToHash from './components/ScrollToHash';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import VisionMission from './pages/VisionMission';
import Strength from './pages/Strength';
import CorporateStructure from './pages/CorporateStructure';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectsGroup1 from './pages/ProjectsGroup1';
import ProjectsGroup2 from './pages/ProjectsGroup2';
import ProjectsGroup3 from './pages/ProjectsGroup3';
import MajorProjects from './pages/MajorProjects';
import MidProjects from './pages/MidProjects';
import LargeProjects from './pages/LargeProjects';
import CertificationsPage from './pages/CertificationsPage';
import Contact from './pages/Contact';
import Preloader from './components/common/Preloader';
import ScrollIndicator from './components/common/ScrollIndicator';

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  React.useEffect(() => {
    const titleMap = {
      '/': 'HPE IT Solutions | Enterprise Infrastructure',
      '/about': 'About Us | HPE IT Solutions',
      '/services': 'Our Services | HPE IT Solutions',
      '/projects': 'Project Portfolio | HPE IT Solutions',
      '/certifications': 'Certifications | HPE IT Solutions',
      '/contact': 'Contact Us | HPE IT Solutions',
    };
    document.title = titleMap[location.pathname] || 'HPE IT Solutions';
  }, [location]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#011b26] flex flex-col transition-colors duration-300">
      <Navbar />
      <main className={`flex-grow transition-all duration-500 ${isHome ? 'pt-0' : 'pt-32'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen bg-slate-50 dark:bg-[#011b26] flex flex-col transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/strength" element={<Strength />} />
            <Route path="/corporate-structure" element={<CorporateStructure />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/group-1" element={<ProjectsGroup1 />} />
            <Route path="/projects/group-2" element={<ProjectsGroup2 />} />
            <Route path="/projects/group-3" element={<ProjectsGroup3 />} />
            <Route path="/projects/major" element={<MajorProjects />} />
            <Route path="/projects/mid" element={<MidProjects />} />
            <Route path="/projects/large" element={<LargeProjects />} />
            <Route path="/certifications" element={<CertificationsPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Preloader />
      <ScrollIndicator />
      <AppContent />
    </Router>
  );
}

export default App;
