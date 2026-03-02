import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
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
      <Preloader />
      <ScrollIndicator />
      <AppContent />
    </Router>
  );
}

export default App;
