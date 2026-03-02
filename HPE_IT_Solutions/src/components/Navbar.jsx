import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, ChevronDown, ArrowRight, Building2, Target, Users, LayoutGrid, Shield, Globe, PlayCircle, Menu, X, Monitor, Landmark, Bot, MapPin, Calculator, Home, Package, Server, Headphones, Activity, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

function Navbar() {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();
    const [activeMega, setActiveMega] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [expandedAccordion, setExpandedAccordion] = useState(null);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileOpen(false);
        setActiveMega(null);
        setExpandedAccordion(null);
    }, [location.pathname]);

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT', mega: 'about' },
        { name: 'SERVICES', path: '/services' },
        { name: 'PROJECTS', mega: 'projects' },
        { name: 'CERTIFICATIONS', path: '/certifications' },
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
        }
    };


    const isAboutActive = location.pathname.startsWith('/about') ||
        ['/vision-mission', '/strength', '/corporate-structure'].includes(location.pathname);

    const isProjectsActive = location.pathname.startsWith('/projects');

    const isMegaActive = (megaKey) => {
        if (megaKey === 'about') return isAboutActive;
        if (megaKey === 'projects') return isProjectsActive;
        return false;
    };

    return (
        <nav className="bg-[#0b1220] border-b border-white/5 px-6 h-20 fixed w-full top-0 z-[100] transition-colors duration-500">
            <div className="max-w-[1440px] mx-auto flex items-center justify-between h-full relative">

                <div className="flex items-center gap-4">
                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white"
                    >
                        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>

                    {/* Logo Section */}
                    <Link to="/" className="relative flex items-center h-full">
                        <img
                            src="/HPE LOGO.png"
                            alt="HPE IT Solutions Logo"
                            className="h-14 md:h-20 w-auto object-contain brightness-125 transition-transform hover:scale-105"
                        />
                    </Link>
                </div>

                {/* Desktop Nav Links */}
                <ul className="hidden lg:flex items-center space-x-10 h-full">
                    {navLinks.map((link) => {
                        if (link.mega) {
                            return (
                                <li
                                    key={link.name}
                                    className="h-full flex items-center"
                                    onMouseEnter={() => setActiveMega(link.mega)}
                                    onMouseLeave={() => setActiveMega(null)}
                                >
                                    <button
                                        className={`flex items-center gap-1.5 text-[11px] font-black tracking-[0.2em] uppercase cursor-pointer outline-none transition-colors
                                            ${isMegaActive(link.mega) || activeMega === link.mega ? 'text-[#00e5ff]' : 'text-white/80 hover:text-white'}`}
                                    >
                                        {link.name}
                                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeMega === link.mega ? 'rotate-180' : ''}`} />
                                    </button>

                                    {isMegaActive(link.mega) && (
                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00e5ff] blur-[1px]"></div>
                                    )}
                                </li>
                            );
                        }

                        const isActive = location.pathname === link.path;
                        return (
                            <li key={link.name} className="h-full flex items-center">
                                <Link
                                    to={link.path}
                                    className={`text-[11px] font-black tracking-[0.2em] uppercase transition-colors ${isActive ? 'text-[#00e5ff]' : 'text-white/80 hover:text-white'}`}
                                >
                                    {link.name}
                                </Link>
                                {isActive && (
                                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00e5ff] blur-[1px]"></div>
                                )}
                            </li>
                        );
                    })}
                </ul>

                <div className="flex items-center space-x-4 md:space-x-6">
                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white cursor-pointer group"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'dark' ? (
                            <Sun className="w-3.5 h-3.5 text-[#fb923c] group-hover:rotate-45 transition-transform" />
                        ) : (
                            <Moon className="w-3.5 h-3.5 text-[#00e5ff] group-hover:-rotate-12 transition-transform" />
                        )}
                    </button>

                    {/* CTA Button */}
                    <Link
                        to="/contact"
                        className="hidden sm:block bg-[#00e5ff] hover:bg-[#00d1e6] text-[#0b1220] px-8 py-2.5 rounded-sm text-[10px] font-black tracking-[0.2em] transition-all transform active:scale-95 shadow-[0_0_20px_rgba(0,229,255,0.2)] uppercase"
                    >
                        Get Started
                    </Link>
                </div>
            </div>

            <AnimatePresence>
                {activeMega && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22, ease: 'easeOut' }}
                        onMouseEnter={() => setActiveMega(activeMega)}
                        onMouseLeave={() => setActiveMega(null)}
                        className="absolute top-20 left-0 w-full bg-[#0b1220] border-t border-white/8 shadow-[0_32px_80px_rgba(0,0,0,0.7)] z-[90] hidden lg:block"
                    >
                        <div className="max-w-[1440px] mx-auto px-12 py-12 grid grid-cols-12 gap-10">

                            {/* Col 1 — Intro */}
                            <div className="col-span-3 space-y-5 pr-4 border-r border-white/8">
                                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/35">
                                    {megaContent[activeMega].intro.title}
                                </p>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    {megaContent[activeMega].intro.desc}
                                </p>
                                <Link
                                    to={megaContent[activeMega].intro.path}
                                    onClick={() => setActiveMega(null)}
                                    className="inline-flex items-center gap-2 text-[11px] font-black text-[#00e5ff] hover:text-white uppercase tracking-widest transition-colors group"
                                >
                                    {megaContent[activeMega].intro.cta}
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            {/* Col 2–3 — Link Columns */}
                            <div className="col-span-6 grid grid-cols-2 gap-10">
                                {megaContent[activeMega].columns.map((col, idx) => (
                                    <div key={idx} className="space-y-5">
                                        <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/35">
                                            {col.title}
                                        </p>
                                        <div className="flex flex-col gap-1">
                                            {col.links.map((link) => (
                                                <Link
                                                    key={link.name}
                                                    to={link.path}
                                                    onClick={() => setActiveMega(null)}
                                                    className="group flex items-center gap-2.5 py-1.5 text-white/75 hover:text-white transition-colors"
                                                >
                                                    {link.icon && (
                                                        <span className="text-white/30 group-hover:text-[#00e5ff] transition-colors shrink-0">
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

                            {/* Col 4 — Featured Image */}
                            <div className="col-span-3">
                                <p className="text-[10px] font-black uppercase tracking-[0.35em] text-white/35 mb-5">
                                    Featured
                                </p>
                                <div className="group relative rounded-xl overflow-hidden aspect-[4/3] border border-white/10 cursor-pointer">
                                    <img
                                        src={megaContent[activeMega].featured.image}
                                        alt={megaContent[activeMega].featured.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-90"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220]/90 via-[#0b1220]/20 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-5 space-y-1">
                                        <span className="block text-[9px] font-black text-[#00e5ff] uppercase tracking-[0.3em]">
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

            {/* Mobile Navigation Drawer */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[80] lg:hidden"
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-[#0b1220] z-[90] lg:hidden flex flex-col border-r border-white/5 shadow-2xl"
                        >
                            <div className="p-6 border-b border-white/5 flex items-center justify-between">
                                <img src="/HPE LOGO.png" alt="Logo" className="h-10 w-auto brightness-125" />
                                <button onClick={() => setMobileOpen(false)} className="p-2 text-white/50"><X className="w-5 h-5" /></button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6 space-y-2">
                                {navLinks.map((link) => {
                                    if (link.mega) {
                                        const isExpanded = expandedAccordion === link.mega;
                                        return (
                                            <div key={link.name} className="space-y-1">
                                                <button
                                                    onClick={() => setExpandedAccordion(isExpanded ? null : link.mega)}
                                                    className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${isAboutActive ? 'bg-[#00e5ff]/10 text-[#00e5ff]' : 'text-white hover:bg-white/5'}`}
                                                >
                                                    <span className="text-[13px] font-black uppercase tracking-widest">{link.name}</span>
                                                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                                                </button>

                                                <AnimatePresence>
                                                    {isExpanded && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden pl-4 space-y-1"
                                                        >
                                                            {megaContent[link.mega].columns.map((col) => (
                                                                <div key={col.title} className="py-2 space-y-3">
                                                                    <div className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30 px-4 py-2">{col.title}</div>
                                                                    {col.links.map((subLink) => (
                                                                        <Link
                                                                            key={subLink.name}
                                                                            to={subLink.path}
                                                                            className="flex items-center gap-3 p-4 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all"
                                                                        >
                                                                            <div className="text-[#00e5ff]">{subLink.icon}</div>
                                                                            <span className="text-xs font-black uppercase tracking-widest">{subLink.name}</span>
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    }

                                    const isActive = location.pathname === link.path;
                                    return (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            className={`block p-4 rounded-xl text-[13px] font-black uppercase tracking-widest transition-all ${isActive ? 'bg-[#00e5ff]/10 text-[#00e5ff]' : 'text-white hover:bg-white/5'}`}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}
                            </div>

                            <div className="p-6 border-t border-white/5">
                                <Link to="/contact" className="w-full block text-center bg-[#00e5ff] text-[#0b1220] py-4 rounded-xl text-xs font-black uppercase tracking-widest">
                                    Get Started
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}

export default Navbar;