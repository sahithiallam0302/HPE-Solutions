import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { useNavigate } from 'react-router-dom';

function Hero() {
    const navigate = useNavigate();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // ... (rest of the hooks remain the same)
    // Transforms for the front cover slide-up effect
    const frontY = useTransform(scrollYProgress, [0, 0.6], ["0%", "-100%"]);
    const frontOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    // Transforms for the inside cover content
    const insideScale = useTransform(scrollYProgress, [0.1, 0.6], [0.95, 1]);
    const insideOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
    const insideY = useTransform(scrollYProgress, [0.1, 0.6], [50, 0]);

    return (
        <section
            ref={containerRef}
            className="relative h-[200vh] w-full bg-[#011b26] overflow-clip"
            aria-label="Welcome to HPE IT Solutions"
        >
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

                {/* --- INSIDE COVER (Background Layer) --- */}
                <motion.div
                    style={{
                        scale: insideScale,
                        opacity: insideOpacity,
                        y: insideY
                    }}
                    className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 bg-[#011b26] text-white"
                >
                    <div className="max-w-4xl text-center px-6">
                        <header className="mb-10">
                            <h2 className="text-brand-orange font-bold tracking-[0.3em] uppercase mb-6 text-sm">Strategic Governance</h2>
                            <p className="text-3xl md:text-5xl font-bold leading-tight">
                                Delivering integrated <span className="text-brand-orange">digital</span> and <br />
                                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                                    physical infrastructure
                                </span> ecosystems.
                            </p>
                        </header>

                        <div className="space-y-6 mb-12">
                            <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                                Delivering across India through enterprise technology platforms, structured
                                workforce deployment, and centralized governance frameworks.
                            </p>
                            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-medium">
                                We enable scalable, compliant, and performance-driven execution models for
                                enterprise and infrastructure clients nationwide.
                            </p>
                        </div>
                    </div>

                    <div className="absolute top-1/4 -right-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
                </motion.div>

                {/* --- FRONT COVER (Top Layer) --- */}
                <motion.div
                    style={{ y: frontY, opacity: frontOpacity }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 bg-white dark:bg-[#011b26] transition-colors duration-300 shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                >
                    <div className="max-w-5xl text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-black text-[#011b26] dark:text-white mb-4 tracking-tighter uppercase leading-none"
                            className="text-4xl md:text-8xl font-black text-[#011b26] dark:text-white mb-4 tracking-tighter uppercase leading-none"
                        >
                            HPE IT <span className="text-brand-orange">Solutions</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="flex flex-col items-center"
                        >
                            <h2 className="text-lg md:text-2xl font-bold text-slate-700 dark:text-slate-300 mb-6 max-w-3xl transition-colors">
                                Enterprise IT & Non-IT Infrastructure Services
                            </h2>

                            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-semibold tracking-widest uppercase mb-10 border-y border-slate-100 dark:border-white/10 py-4 px-6 transition-colors">
                                Brick-Oriented Project Execution | Pan-India Operations | 70+ Strategic Mergers
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 mb-12">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,141,0,0.6)" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate('/contact')}
                                    className="bg-brand-orange text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest shadow-[0_0_15px_rgba(255,141,0,0.3)] transition-all cursor-pointer"
                                >
                                    Contact Us
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0,176,212,0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => navigate('/projects')}
                                    className="bg-transparent border-2 border-brand-cyan text-brand-cyan px-12 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all cursor-pointer"
                                >
                                    Our Projects
                                </motion.button>
                            </div>

                            {/* Removed old position indicator */}
                        </motion.div>
                    </div>

                    {/* Scroll Indicator (Inside Front Cover) */}
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-30 group"
                        onClick={() =>
                            document
                                .getElementById('stats')
                                ?.scrollIntoView({ behavior: 'smooth' })
                        }
                    >
                        <span className="text-slate-400 dark:text-white/40 font-rajdhani tracking-[0.4em] text-[10px] font-black group-hover:text-brand-orange transition-colors">
                            SCROLL DOWN
                        </span>
                        <div className="w-6 h-10 border-2 border-slate-200 dark:border-white/20 rounded-full flex justify-center p-1 group-hover:border-brand-orange/50 transition-colors">
                            <motion.div
                                animate={{ y: [0, 16, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                className="w-1 h-3 bg-brand-orange rounded-full"
                            />
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;
