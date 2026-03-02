import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, ChevronDown, ArrowRight, Building2, Target, Users, LayoutGrid, Shield, Globe, Server, Package, Headphones, Activity } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeMega, setActiveMega] = useState(null);
    const [hoveredName, setHoveredName] = useState(null);
    const [expandedAccordion, setExpandedAccordion] = useState(null);

    // Close mobile menu on route change
    useEffect(() => {
        setMenuOpen(false);
        setActiveMega(null);
        setExpandedAccordion(null);
        setHoveredName(null);
    }, [location.pathname]);

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT', path: '/about', mega: 'about' },
        { name: 'SERVICES', path: '/services', mega: 'services' },
        { name: 'PROJECTS', path: '/projects', mega: 'projects' },
        { name: 'CERTIFICATIONS', path: '/certifications', mega: 'certifications' },
        { name: 'CONTACT', path: '/contact' },
    ];

    const megaContent = {
        about: {
            intro: {
                title: "About HPE IT Solutions",
                desc: "India's leading integrated enterprise IT and infrastructure conglomerate, governed by absolute transparency and national scale execution.",
                cta: "Our Heritage",
                path: "/about"
            },
            columns: [
                {
                    title: "Strategy & Purpose",
                    links: [
                        { name: "Company Overview", path: "/about#overview", icon: <Building2 className="w-4 h-4" /> },
                        { name: "Vision & Mission", path: "/vision-mission", icon: <Target className="w-4 h-4" /> },
                        { name: "Organizational Strength", path: "/strength", icon: <Users className="w-4 h-4" /> },
                        { name: "Corporate Structure", path: "/corporate-structure#org-chart", icon: <LayoutGrid className="w-4 h-4" /> },
                    ]
                },
                {
                    title: "Governance & Operations",
                    links: [
                        { name: "Governance Model", path: "/corporate-structure#governance-model", icon: <Shield className="w-4 h-4" /> },
                        { name: "Executive Leadership", path: "/corporate-structure#executive-leadership", icon: <Users className="w-4 h-4" /> },
                        { name: "National Footprint", path: "/about#footprint", icon: <Globe className="w-4 h-4" /> },
                    ]
                }
            ],
            featured: {
                title: "Cinematic Reel",
                label: "The Scale of Impact",
                image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
            }
        },
        services: {
            intro: {
                title: "Expert IT Services",
                desc: "Empowering enterprises with cutting-edge technology solutions, from infrastructure setup to fully managed IT support.",
                cta: "Explore All Services",
                path: "/services"
            },
            columns: [
                {
                    title: "Infrastructure & Cloud",
                    links: [
                        { name: "Data Center Solutions", path: "/services#data-center", icon: <Server className="w-4 h-4" /> },
                        { name: "Cloud Management", path: "/services#cloud", icon: <Globe className="w-4 h-4" /> },
                        { name: "Network Infrastructure", path: "/services#networking", icon: <Activity className="w-4 h-4" /> },
                        { name: "Storage & Servers", path: "/services#storage", icon: <Package className="w-4 h-4" /> },
                    ]
                },
                {
                    title: "Managed & Support",
                    links: [
                        { name: "24/7 Technical Support", path: "/services#support", icon: <Headphones className="w-4 h-4" /> },
                        { name: "Annual Maintenance (AMC)", path: "/services#amc", icon: <Shield className="w-4 h-4" /> },
                        { name: "IT Consulting", path: "/services#consulting", icon: <Users className="w-4 h-4" /> },
                        { name: "Facility Management", path: "/services#fms", icon: <Building2 className="w-4 h-4" /> },
                    ]
                }
            ],
            featured: {
                title: "Digital Transformation",
                label: "Modern Solutions",
                image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            }
        },
        projects: {
            intro: {
                title: "HPE Portfolio",
                desc: "A comprehensive look at our enterprise IT and infrastructure delivery across the Indian landscape.",
                cta: "View Strategy",
                path: "/projects"
            },
            columns: [
                {
                    title: "Portfolio Strategy",
                    links: [
                        { name: "Portfolio Overview", path: "/projects" },
                    ]
                },
                {
                    title: "Leading Case Studies",
                    links: [
                        { name: "Real Estate ERP Implementation", path: "/projects/group-1#project-1" },
                        { name: "SmartSite Monitoring System", path: "/projects/group-1#project-2" },
                        { name: "Govt. Infrastructure Digitization", path: "/projects/group-1#project-3" },
                        { name: "Enterprise Vendor Automation", path: "/projects/group-2#project-4" },
                    ]
                },
                {
                    title: "National Infrastructure",
                    links: [
                        { name: "Warehouse & Logistics Automation", path: "/projects/group-3#project-8" },
                        { name: "Corporate IT Infrastructure Setup", path: "/projects/group-3#project-9" },
                        { name: "Pan-India AMC & Support", path: "/projects/group-3#project-10" },
                        { name: "Global Delivery Model", path: "/projects" },
                    ]
                }
            ],
            featured: {
                title: "Nationwide Impact",
                label: "Featured Project",
                image: "/data_center_infrastructure.jpg"
            }
        },
        certifications: {
            intro: {
                title: "Quality & Excellence",
                desc: "Our commitment to international standards and industry-leading certifications ensures the highest level of service delivery.",
                cta: "Our Standards",
                path: "/certifications"
            },
            columns: [
                {
                    title: "ISO Standards",
                    links: [
                        { name: "ISO 9001:2015 (QMS)", path: "/certifications#iso-9001", icon: <Shield className="w-4 h-4" /> },
                        { name: "ISO 27001 (ISMS)", path: "/certifications#iso-27001", icon: <Shield className="w-4 h-4" /> },
                        { name: "ISO 20000-1 (ITSMS)", path: "/certifications#iso-20000", icon: <Shield className="w-4 h-4" /> },
                    ]
                },
                {
                    title: "Industry Partnerships",
                    links: [
                        { name: "Gold Partner Status", path: "/certifications#partners", icon: <Target className="w-4 h-4" /> },
                        { name: "Authorized Service Provider", path: "/certifications#service", icon: <Building2 className="w-4 h-4" /> },
                        { name: "Environmental Policy", path: "/certifications#policy", icon: <Globe className="w-4 h-4" /> },
                    ]
                }
            ],
            featured: {
                title: "Industry Accredited",
                label: "Global Recognition",
                image: "https://images.unsplash.com/photo-1589330694653-9ecf745df605?q=80&w=2070&auto=format&fit=crop"
            }
        }
    };

    const isAboutActive = location.pathname.startsWith('/about') ||
        ['/vision-mission', '/strength', '/corporate-structure'].includes(location.pathname);
    const isProjectsActive = location.pathname.startsWith('/projects');
    const isServicesActive = location.pathname.startsWith('/services');
    const isCertificationsActive = location.pathname.startsWith('/certifications');

    const isMegaActive = (megaKey) => {
        if (megaKey === 'about') return isAboutActive;
        if (megaKey === 'projects') return isProjectsActive;
        if (megaKey === 'services') return isServicesActive;
        if (megaKey === 'certifications') return isCertificationsActive;
        return false;
    };

    return (
        <>
            <nav className="bg-[#011b26] border-b border-white/10 px-6 h-20 fixed w-full top-0 z-[100]">
                <div className="max-w-[1400px] mx-auto flex items-center justify-between h-full relative">

                    {/* Logo Section */}
                    <Link to="/" className="relative flex items-center h-full">
                        <img
                            src="/HPE LOGO.png"
                            alt="HPE IT Solutions Logo"
                            className="h-20 md:h-24 lg:h-32 w-auto object-contain transition-transform hover:scale-105 brightness-110"
                        />
                    </Link>

                    {/* Desktop Nav Links */}
                    <ul className="hidden lg:flex items-center space-x-8 h-full">
                        {navLinks.map((link) => {
                            const isActiveItem = location.pathname === link.path || (link.mega && isMegaActive(link.mega));
                            const isInteracting = (hoveredName === link.name) || (link.mega && activeMega === link.mega);
                            const showLine = isInteracting || (isActiveItem && !hoveredName && !activeMega);

                            if (link.mega) {
                                return (
                                    <li
                                        key={link.name}
                                        className="h-full flex items-center group"
                                        onMouseEnter={() => {
                                            setActiveMega(link.mega);
                                            setHoveredName(link.name);
                                        }}
                                        onMouseLeave={() => {
                                            setActiveMega(null);
                                            setHoveredName(null);
                                        }}
                                    >
                                        <div className="relative py-1 flex items-center gap-1.5">
                                            <button
                                                className={`flex items-center gap-1.5 text-xs font-black tracking-widest transition-colors duration-200 cursor-pointer outline-none ${isActiveItem || isInteracting
                                                    ? 'text-[#00b0d4]'
                                                    : 'text-white hover:text-[#00b0d4]'
                                                    }`}
                                            >
                                                {link.name}
                                                <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeMega === link.mega ? 'rotate-180' : ''}`} />
                                            </button>
                                            {showLine && (
                                                <motion.div
                                                    layoutId="nav-underline"
                                                    initial={false}
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                    className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-[#ff8d00] shadow-[0_0_8px_rgba(255,141,0,0.5)] z-10"
                                                />
                                            )}
                                        </div>
                                    </li>
                                );
                            }

                            return (
                                <li
                                    key={link.name}
                                    className="h-full flex items-center group"
                                    onMouseEnter={() => setHoveredName(link.name)}
                                    onMouseLeave={() => setHoveredName(null)}
                                >
                                    <div className="relative py-1">
                                        <Link
                                            to={link.path}
                                            className={`text-xs font-black tracking-widest transition-colors duration-200 ${isActiveItem || hoveredName === link.name
                                                ? 'text-[#00b0d4]'
                                                : 'text-white hover:text-[#00b0d4]'
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                        {showLine && (
                                            <motion.div
                                                layoutId="nav-underline"
                                                initial={false}
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                className="absolute -bottom-0.5 left-0 w-full h-[2px] bg-[#ff8d00] shadow-[0_0_8px_rgba(255,141,0,0.5)] z-10"
                                            />
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Right Controls */}
                    <div className="flex items-center space-x-4">

                        {/* CTA (Desktop Only) */}
                        <Link
                            to="/contact"
                            className="hidden lg:inline-flex bg-[#ff8d00] hover:bg-[#e67e00] text-white px-8 py-3 rounded-full text-xs font-black tracking-widest transition-all transform active:scale-95 shadow-lg shadow-orange-500/20"
                        >
                            GET STARTED
                        </Link>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white group"
                            aria-label="Toggle Theme"
                        >
                            {theme === 'dark' ? (
                                <Sun className="w-4 h-4 text-[#ff8d00] group-hover:rotate-45 transition-transform" />
                            ) : (
                                <Moon className="w-4 h-4 text-[#00b0d4] group-hover:-rotate-12 transition-transform" />
                            )}
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg:hidden p-2 text-white relative z-[100]"
                        >
                            <AnimatePresence mode="wait">
                                {menuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ opacity: 0, rotate: -90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: 90 }}
                                    >
                                        <X className="w-7 h-7 text-[#ff8d00]" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ opacity: 0, rotate: 90 }}
                                        animate={{ opacity: 1, rotate: 0 }}
                                        exit={{ opacity: 0, rotate: -90 }}
                                    >
                                        <Menu className="w-7 h-7 text-[#00b0d4]" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>
                </div>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                    {activeMega && (
                        <motion.div
                            initial={{ opacity: 0, y: -8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.22, ease: 'easeOut' }}
                            onMouseEnter={() => setActiveMega(activeMega)}
                            onMouseLeave={() => setActiveMega(null)}
                            className="absolute top-20 left-0 w-full bg-[#011b26] border-t border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.7)] z-[90] hidden lg:block"
                        >
                            <div className="max-w-[1400px] mx-auto px-12 py-12 grid grid-cols-12 gap-10">

                                {/* Col 1 — Intro */}
                                <div className="col-span-3 space-y-5 pr-4 border-r border-white/5">
                                    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-[#00b0d4]/60">
                                        {megaContent[activeMega].intro.title}
                                    </p>
                                    <p className="text-white/60 text-sm leading-relaxed">
                                        {megaContent[activeMega].intro.desc}
                                    </p>
                                    <Link
                                        to={megaContent[activeMega].intro.path}
                                        onClick={() => setActiveMega(null)}
                                        className="inline-flex items-center gap-2 text-[11px] font-black text-[#ff8d00] hover:text-[#00b0d4] uppercase tracking-widest transition-colors group"
                                    >
                                        {megaContent[activeMega].intro.cta}
                                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>

                                {/* Col 2–3 — Link Columns */}
                                <div className="col-span-6 grid grid-cols-2 gap-10">
                                    {megaContent[activeMega].columns.map((col, idx) => (
                                        <div key={idx} className="space-y-5">
                                            <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/30">
                                                {col.title}
                                            </p>
                                            <div className="flex flex-col gap-1">
                                                {col.links.map((link) => (
                                                    <Link
                                                        key={link.name}
                                                        to={link.path}
                                                        onClick={() => setActiveMega(null)}
                                                        className="group flex items-center gap-2.5 py-1.5 text-white/75 hover:text-[#00b0d4] transition-colors"
                                                    >
                                                        {link.icon && (
                                                            <span className="text-white/20 group-hover:text-[#ff8d00] transition-colors shrink-0">
                                                                {link.icon}
                                                            </span>
                                                        )}
                                                        <span className="text-[13px] font-semibold leading-snug group-hover:translate-x-0.5 transition-transform">
                                                            {link.name}
                                                        </span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Col 4 — Featured */}
                                <div className="col-span-3">
                                    <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/30 mb-5">
                                        Featured
                                    </p>
                                    <div className="group relative rounded-xl overflow-hidden aspect-[4/3] border border-white/5 cursor-pointer">
                                        <img
                                            src={megaContent[activeMega].featured.image}
                                            alt={megaContent[activeMega].featured.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-90"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#011b26]/90 via-transparent to-transparent" />
                                        <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1">
                                            <span className="block text-[9px] font-black text-[#00b0d4] uppercase tracking-[0.3em]">
                                                {megaContent[activeMega].featured.label}
                                            </span>
                                            <h4 className="text-sm font-bold text-white leading-snug">
                                                {megaContent[activeMega].featured.title}
                                            </h4>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ y: '-100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '-100%' }}
                        transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                        className="fixed inset-0 z-[90] bg-[#0a0e1a] flex flex-col items-center h-screen pt-20 overflow-y-auto"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-hpe-cyan/10 blur-[100px] rounded-full pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-hpe-orange/10 blur-[100px] rounded-full pointer-events-none" />

                        <ul className="list-none flex flex-col gap-4 items-center w-full px-8 py-10 z-10">
                            {navLinks.map((nav, index) => {
                                const isActive = location.pathname === nav.path || (nav.mega && isMegaActive(nav.mega));
                                const isExpanded = expandedAccordion === nav.name;

                                if (nav.mega) {
                                    return (
                                        <li key={nav.name} className="w-full text-center">
                                            <button
                                                onClick={() => setExpandedAccordion(isExpanded ? null : nav.name)}
                                                className={`w-full font-orbitron font-bold text-3xl uppercase tracking-wider flex items-center justify-center gap-2 py-2 ${isActive
                                                    ? 'text-[#00b0d4]'
                                                    : 'text-white/60 hover:text-white transition-colors duration-300'
                                                    }`}
                                            >
                                                {nav.name}
                                                <ChevronDown className={`w-6 h-6 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                                            </button>
                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden flex flex-col gap-2 py-2"
                                                    >
                                                        {megaContent[nav.mega].columns.map((col) => (
                                                            <div key={col.title} className="flex flex-col gap-1">
                                                                <span className="text-[10px] font-black text-white/30 uppercase tracking-widest">{col.title}</span>
                                                                {col.links.map((subLink) => (
                                                                    <Link
                                                                        key={subLink.name}
                                                                        to={subLink.path}
                                                                        onClick={() => setMenuOpen(false)}
                                                                        className="text-lg font-bold text-white/70 hover:text-[#ff8d00] transition-colors"
                                                                    >
                                                                        {subLink.name}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </li>
                                    );
                                }

                                return (
                                    <motion.li
                                        key={nav.name}
                                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index + 0.2 }}
                                        className={`font-orbitron font-bold text-4xl uppercase tracking-wider text-center w-full ${isActive
                                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-hpe-cyan to-hpe-orange drop-shadow-[0_0_10px_rgba(0,229,255,0.4)]'
                                            : 'text-white/60 hover:text-white transition-colors duration-300'
                                            }`}
                                    >
                                        <Link
                                            to={nav.path}
                                            className="block py-2 w-full text-center tracking-widest leading-none outline-none"
                                            onClick={() => setMenuOpen(false)}
                                        >
                                            {nav.name}
                                        </Link>
                                    </motion.li>
                                );
                            })}
                        </ul>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="w-full pb-16 pt-8 flex flex-col items-center gap-6 z-10 border-t border-white/10"
                        >
                            <Link
                                to="/contact"
                                onClick={() => setMenuOpen(false)}
                                className="bg-[#ff8d00] hover:bg-white hover:text-[#011b26] text-white px-10 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all duration-300 shadow-xl shadow-orange-900/20 active:scale-95"
                            >
                                +91 40 2345 6789
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </>
    );
}

export default Navbar;