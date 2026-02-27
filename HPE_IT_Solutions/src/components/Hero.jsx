import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

function Hero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Transforms for the front cover slide-up effect
    const frontY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100%"]);
    const frontOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative h-[200vh] w-full bg-[#011b26] overflow-clip"
            aria-label="Welcome to HPE IT Solutions"
        >
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

                {/* --- FRONT COVER (100vh) --- */}
                <motion.div
                    style={{ y: frontY, opacity: frontOpacity }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 bg-white dark:bg-[#011b26] transition-colors duration-300"
                >
                    <div className="max-w-5xl text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-8xl font-black text-[#011b26] dark:text-white mb-4 tracking-tighter uppercase leading-none"
                        >
                            HPE IT <span className="text-brand-orange">Solutions</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="flex flex-col items-center"
                        >
                            <h2 className="text-xl md:text-3xl font-bold text-slate-700 dark:text-slate-300 mb-6 max-w-3xl transition-colors">
                                Enterprise IT & Non-IT Infrastructure Services
                            </h2>

                            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base font-semibold tracking-widest uppercase mb-10 border-y border-slate-100 dark:border-white/10 py-4 px-6 transition-colors">
                                Brick-Oriented Project Execution | Pan-India Operations | 70+ Strategic Mergers
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 mb-12">
                                <button className="bg-[#011b26] dark:bg-white text-white dark:text-[#011b26] px-10 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl cursor-pointer">
                                    Contact Us
                                </button>
                                <button className="border-2 border-[#011b26]/10 dark:border-white/10 text-[#011b26] dark:text-white px-10 py-4 rounded-full font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-colors cursor-pointer">
                                    Our Projects
                                </button>
                            </div>

                            <div className="flex flex-col items-center gap-2">
                                <div className="h-12 w-[1.5px] bg-gradient-to-b from-brand-orange to-transparent animate-bounce opacity-40" />
                                <span className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-bold">Scroll Down</span>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

export default Hero;
