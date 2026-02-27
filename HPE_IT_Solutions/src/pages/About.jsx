import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Monitor, Activity, Users, ArrowRight, MapPin, Globe, Cpu, BarChart3 } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: (i = 0) => ({
        opacity: 1, y: 0,
        transition: { duration: 0.7, delay: i * 0.11, ease: [0.22, 1, 0.36, 1] },
    }),
};
const scaleIn = {
    hidden: { opacity: 0, scale: 0.88, y: 24 },
    visible: (i = 0) => ({
        opacity: 1, scale: 1, y: 0,
        transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
};
function AnimatedSection({ children, className = '', delay = 0 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-70px' });
    return (
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            custom={delay} variants={fadeUp} className={className}>
            {children}
        </motion.div>
    );
}

/* ─── Glass Stat Card ─────────────────────────────────────────── */
function StatCard({ value, label, delay, isDark }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    return (
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            custom={delay} variants={fadeUp}
            whileHover={{ y: -4, scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 280, damping: 20 }}
            className={`flex flex-col items-center justify-center text-center p-6 rounded-3xl border transition-all duration-300
        ${isDark
                    ? 'bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 hover:border-cyan-400/35'
                    : 'bg-white/60 border-white/70 backdrop-blur-xl hover:bg-white/80 hover:border-sky-300/70 shadow-lg shadow-slate-200/40'
                }`}
        >
            <span className={`text-3xl font-black bg-clip-text text-transparent
        ${isDark
                    ? 'bg-gradient-to-r from-cyan-300 to-blue-400'
                    : 'bg-gradient-to-r from-sky-500 to-blue-600'
                }`}>{value}</span>
            <span className={`text-[11px] font-bold uppercase tracking-widest mt-1.5
        ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{label}</span>
        </motion.div>
    );
}

/* ─── Capability Card ─────────────────────────────────────────── */
function CapabilityCard({ title, desc, icon, index, isDark }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-50px' });
    return (
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            custom={index} variants={scaleIn}
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ type: 'spring', stiffness: 260, damping: 18 }}
            className={`group relative rounded-3xl p-[1px] overflow-hidden transition-all duration-500 cursor-default shadow-md hover:shadow-2xl`}
        >
            {/* Fast Rotating Animated Border */}
            <div className="absolute inset-[-400%] bg-[conic-gradient(from_0deg,transparent,#00b0d4,transparent,#ff8d00,transparent)] animate-[spin_3s_linear_infinite] opacity-40 group-hover:opacity-100 group-hover:animate-[spin_1s_linear_infinite] transition-all duration-500" />

            {/* Inner glass */}
            <div className={`relative h-full rounded-[calc(1.5rem-1px)] p-7 flex flex-col gap-5 transition-all duration-500
        ${isDark
                    ? 'bg-[#040f1a]/80 backdrop-blur-2xl group-hover:bg-[#071928]/90'
                    : 'bg-white/80 backdrop-blur-2xl group-hover:bg-white/95'
                }`}>

                {/* Floating icon */}
                <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.5 }}
                    className={`self-start p-4 rounded-2xl border transition-colors duration-500
            ${isDark
                            ? 'bg-white/5 border-white/10 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/8'
                            : 'bg-white border-slate-200/80 group-hover:border-sky-300/60 group-hover:bg-sky-50/80'
                        }`}>
                    {icon}
                </motion.div>

                <div>
                    <h3 className={`text-base font-bold mb-2 leading-snug
            ${isDark ? 'text-white' : 'text-slate-900'}`}>{title}</h3>
                    <p className={`text-sm leading-relaxed
            ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
                </div>

            </div>
        </motion.div>
    );
}

/* ─── Scoped CSS ─────────────────────────────────────────────── */
const css = `
  @keyframes grad-move {
    0%   { background-position: 0%   50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0%   50%; }
  }
  .gtext {
    background: linear-gradient(270deg,#00e5ff,#38bdf8,#818cf8,#fb923c,#00e5ff);
    background-size: 300% 300%;
    animation: grad-move 6s ease infinite;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .shimmer {
    display: none;
  }
`;

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════ */
const About = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const capabilities = [
        {
            title: 'Enterprise Digital Platforms',
            icon: <Monitor className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-sky-500'}`} />,
            desc: 'Advanced digital systems integrated for seamless enterprise-wide operations with high availability and zero-downtime deployment.',
        },
        {
            title: 'Infrastructure Lifecycle Monitoring',
            icon: <Activity className={`w-6 h-6 ${isDark ? 'text-orange-400' : 'text-orange-500'}`} />,
            desc: 'Real-time tracking and digitization of physical infrastructure projects, assets, and life-cycle events at national scale.',
        },
        {
            title: 'Workforce Deployment Systems',
            icon: <Users className={`w-6 h-6 ${isDark ? 'text-cyan-400' : 'text-sky-500'}`} />,
            desc: 'Decentralized field execution managed through centralized governance and smart, AI-assisted resource allocation.',
        },
        {
            title: 'Compliance-Driven Governance',
            icon: <Shield className={`w-6 h-6 ${isDark ? 'text-orange-400' : 'text-orange-500'}`} />,
            desc: 'Rigorous accountability and performance transparency at national scale ensuring every regulatory standard is met.',
        },
    ];

    const stats = [
        { value: '70+', label: 'Mergers' },
        { value: '5', label: 'HQ Hubs' },
        { value: '12K+', label: 'Engineers' },
        { value: '99.9%', label: 'Uptime SLA' },
    ];

    const pillars = [
        { icon: <Globe className="w-4 h-4" />, label: 'Pan-India Operations' },
        { icon: <Cpu className="w-4 h-4" />, label: 'AI-Powered Infrastructure' },
        { icon: <BarChart3 className="w-4 h-4" />, label: 'Data-Driven Governance' },
        { icon: <MapPin className="w-4 h-4" />, label: 'Hyderabad HQ' },
    ];

    return (
        <>
            <style>{css}</style>

            {/* ── Page wrapper ── */}
            <article className={`relative font-sans overflow-x-hidden transition-colors duration-500
        ${isDark ? 'bg-[#030c13] text-slate-200' : 'bg-white text-slate-800'}`}>

                {/* Background is now clean whitespace in light mode, dark space in dark mode */}

                {/* ══════════════════════════════════════════════════════
            HERO  — video fills 35vh
        ══════════════════════════════════════════════════════ */}
                <section className="relative z-10 w-full" style={{ height: '35vh', minHeight: '280px' }}>
                    {/* Video */}
                    <video
                        autoPlay loop muted playsInline preload="auto"
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source
                            src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
                            type="video/mp4"
                        />
                    </video>

                    {/* Overlay — No gradients in light mode, just a clean darkening mask for contrast */}
                    <div className={`absolute inset-0 transition-opacity duration-700 
                        ${isDark ? 'bg-gradient-to-b from-black/70 via-black/50 to-[#030c13]' : 'bg-black/35'}`}
                    />

                    {/* Hero text — centered over video */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pt-20 z-10">

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative overflow-hidden mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-300 text-[11px] font-black tracking-[0.3em] uppercase backdrop-blur-sm"
                        >
                            <MapPin className="w-3 h-3" />
                            Global Infrastructure Leader
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                            className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-center drop-shadow-2xl"
                        >
                            <span className="text-white">About </span>
                            <span className="gtext">HPE</span>
                        </motion.h1>

                        {/* Sub */}
                        <motion.p
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.26 }}
                            className={`mt-4 text-sm md:text-base font-bold tracking-[0.5em] uppercase transition-colors duration-500
                                ${isDark ? 'text-slate-400' : 'text-slate-600'}`}
                        >
                            IT Solutions
                        </motion.p>
                    </div>

                    {/* Bottom fade — only in dark mode to blend with dark background */}
                    {isDark && (
                        <div className="absolute bottom-0 left-0 w-full h-32 pointer-events-none bg-gradient-to-t from-[#030c13] to-transparent" />
                    )}
                </section>

                {/* ══════════════════════════════════════════════════════
            MAIN CONTENT
        ══════════════════════════════════════════════════════ */}
                <main className="relative z-10 max-w-7xl mx-auto px-6 pb-36 pt-12">

                    {/* Pillar pills */}
                    <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-14">
                        {pillars.map((p, i) => (
                            <motion.span key={p.label} custom={i} variants={fadeUp}
                                whileHover={{ scale: 1.07 }}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-semibold border cursor-default transition-all duration-300
                    ${isDark
                                        ? 'bg-white/5 border-white/10 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300 backdrop-blur-xl'
                                        : 'bg-white/70 border-white/70 text-slate-600 hover:border-sky-300 hover:text-sky-600 backdrop-blur-xl shadow-sm'
                                    }`}>
                                {p.icon}{p.label}
                            </motion.span>
                        ))}
                    </AnimatedSection>

                    {/* Stats row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
                        {stats.map((s, i) => (
                            <StatCard key={s.label} value={s.value} label={s.label} delay={i} isDark={isDark} />
                        ))}
                    </div>

                    {/* ── Strategic Overview ─────────────────────────── */}
                    <AnimatedSection className="mb-20">
                        <div className={`group relative rounded-[2.5rem] overflow-hidden border transition-all duration-500
              ${isDark
                                ? 'bg-white/[0.04] border-white/10 backdrop-blur-2xl hover:border-cyan-400/25 hover:bg-white/[0.07] shadow-xl shadow-black/30'
                                : 'bg-white/70 border-white/80 backdrop-blur-2xl hover:border-sky-200 hover:bg-white/90 shadow-xl shadow-slate-200/50'
                            }`}>

                            {/* Top shimmer line */}
                            <div className={`absolute top-0 left-0 right-0 h-px
                ${isDark
                                    ? 'bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent'
                                    : 'bg-gradient-to-r from-transparent via-sky-400/40 to-transparent'
                                }`} />

                            <div className="p-8 md:p-14 grid lg:grid-cols-5 gap-12 items-center">
                                {/* Text */}
                                <div className="lg:col-span-3 space-y-7">
                                    <motion.span variants={fadeUp} initial="hidden" whileInView="visible"
                                        viewport={{ once: true }}
                                        className={`block text-[11px] font-black uppercase tracking-[0.5em]
                        ${isDark ? 'text-orange-400' : 'text-orange-500'}`}>
                                        Strategic Overview
                                    </motion.span>

                                    <motion.p variants={fadeUp} custom={1} initial="hidden" whileInView="visible"
                                        viewport={{ once: true }}
                                        className={`text-2xl md:text-3xl font-light leading-snug
                        ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                        HPE IT Solutions is a multi-vertical enterprise delivering{' '}
                                        <span className={`font-semibold ${isDark ? 'text-cyan-400' : 'text-sky-500'}`}>structured IT services</span>{' '}
                                        across the Indian subcontinent.
                                    </motion.p>

                                    <motion.div variants={fadeUp} custom={2} initial="hidden" whileInView="visible"
                                        viewport={{ once: true }}
                                        className={`space-y-4 text-sm leading-relaxed
                        ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                        <p>Established through <strong className={isDark ? 'text-slate-200' : 'text-slate-800'}>70+ strategic mergers</strong>, the organization operates under a centralized governance architecture supported by decentralized field execution teams.</p>
                                        <p>Headquartered in Hyderabad, our operational hubs in <strong className={isDark ? 'text-slate-200' : 'text-slate-800'}>Mumbai, Bangalore, Chennai, and Delhi</strong> integrate digital enterprise systems with complex infrastructure execution.</p>
                                    </motion.div>
                                </div>

                                {/* Image */}
                                <div className="lg:col-span-2">
                                    <motion.div variants={scaleIn} initial="hidden" whileInView="visible"
                                        viewport={{ once: true }}
                                        className="relative">
                                        <div className={`relative aspect-square rounded-3xl overflow-hidden border
                          ${isDark ? 'border-white/10' : 'border-white/60'}`}>
                                            <img
                                                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                                                alt="Global Technology Infrastructure"
                                                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
                                            />
                                            <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-t from-[#030c13]/40 to-transparent' : 'bg-gradient-to-t from-slate-900/10 to-transparent'}`} />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>

                    {/* ── Capability Cards ────────────────────────────── */}
                    <section aria-label="Capability Highlights">
                        <AnimatedSection className="text-center mb-12">
                            <span className={`block text-[11px] font-black uppercase tracking-[0.5em] mb-3
                ${isDark ? 'text-cyan-400' : 'text-sky-500'}`}>
                                Core Capabilities
                            </span>
                            <h2 className={`text-4xl md:text-5xl font-black uppercase tracking-tight
                ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                Capability{' '}
                                <span className={isDark ? 'text-orange-400' : 'text-orange-500'}>Highlights</span>
                            </h2>
                            <div className="flex items-center justify-center gap-3 mt-5">
                                <div className={`h-px w-14 rounded-full ${isDark ? 'bg-cyan-400/50' : 'bg-sky-400/50'}`} />
                                <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-orange-400' : 'bg-orange-500'}`} />
                                <div className={`h-px w-14 rounded-full ${isDark ? 'bg-cyan-400/50' : 'bg-sky-400/50'}`} />
                            </div>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {capabilities.map((cap, i) => (
                                <CapabilityCard key={cap.title} {...cap} index={i} isDark={isDark} />
                            ))}
                        </div>
                    </section>

                    {/* ── CTA ─────────────────────────────────────────── */}
                    <AnimatedSection className="mt-24 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                            <Link to="/vision-mission"
                                className={`group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black tracking-widest uppercase text-sm transition-all duration-300 shadow-xl
                    ${isDark
                                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-[#030c13] hover:shadow-cyan-500/40 hover:from-cyan-300'
                                        : 'bg-gradient-to-r from-sky-500 to-blue-600 text-white hover:shadow-sky-400/40 hover:from-sky-400'
                                    }`}>
                                <span>Vision &amp; Mission</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                            </Link>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                            <Link to="/contact"
                                className={`group inline-flex items-center gap-3 px-10 py-4 rounded-full font-black tracking-widest uppercase text-sm transition-all duration-300 border
                    ${isDark
                                        ? 'border-white/15 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 hover:border-white/30'
                                        : 'border-white/70 bg-white/60 backdrop-blur-xl text-slate-700 hover:bg-white/90 hover:border-slate-300 shadow-md'
                                    }`}>
                                <span>Contact Us</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                            </Link>
                        </motion.div>
                    </AnimatedSection>
                </main>
            </article>
        </>
    );
};

export default About;