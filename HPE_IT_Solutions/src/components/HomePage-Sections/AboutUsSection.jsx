import React from 'react';
import { ArrowRight, Globe, Zap, Target } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

// Animation variants
const fadeIn = (direction = 'up', delay = 0) => ({
    hidden: {
        y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
        x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
        opacity: 0,
    },
    show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1.25,
            delay: delay,
            bounce: 0.2
        }
    }
});

const AboutUsSection = () => {
    const navigate = useNavigate();
    return (
        <section className="relative bg-white dark:bg-[#011b26] py-12 px-6 md:py-16 transition-colors duration-500 overflow-hidden" aria-labelledby="about-heading">

                {/* RIGHT SIDE: Text Content */}
                <div className="flex flex-col space-y-6">
                    <div>
                        <span className="text-brand-orange text-xs md:text-sm font-black tracking-[0.3em] uppercase mb-4 block">
                            ABOUT US
                        </span>
                        <h2 id="about-heading" className="text-2xl md:text-3xl font-black text-[#011b26] dark:text-white leading-tight">
                            Pioneering Enterprise <br />
                            Infrastructure for a <br />
                            <span className="text-[#00b0d4]">Digital-First Future.</span>
                        </h2>
                    </div>

                    <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        <p>
                            HPE IT Solutions stands at the intersection of technological innovation and physical
                            infrastructure excellence. With over 70 strategic mergers and a pan-India
                            operational footprint, we deliver integrated ecosystems that power the modern enterprise.
                        </p>
                        <p>
                            Our "Brick-Oriented" execution model ensures that your digital transformation is
                            built on a foundation of reliability, compliance, and scalable performance-driven
                            governance frameworks.
                        </p>
                    </div>

                    <div className="pt-4">
                        <button className="group flex items-center space-x-3 bg-[#011b26] dark:bg-white text-white dark:text-[#011b26] px-8 py-4 rounded-full font-bold hover:bg-[#00b0d4] dark:hover:bg-[#00b0d4] transition-all duration-300 shadow-xl shadow-slate-900/10 active:scale-95 cursor-pointer">
                            <span>Read More</span>
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                        </button>
                    </div>
                </div>
            {/* Abstract Background Glows */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-hpe-cyan/5 rounded-full blur-[120px] dark:opacity-20" />
                <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-brand-orange/5 rounded-full blur-[100px] dark:opacity-10" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 font-sans">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* LEFT SIDE: Animated Image Container */}
                    <motion.div
                        variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative"
                    >
                        {/* Decorative Background Box */}
                        <div className="absolute -top-6 -left-6 w-full h-full border-2 border-hpe-cyan/20 rounded-2xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-brand-orange/20 rounded-2xl -z-10" />

                        <div className="relative group overflow-hidden rounded-2xl shadow-2xl glass-reflection">
                            <img
                                src="/AboutUsHomePageImage.png"
                                alt="HPE IT Solutions Enterprise Workspace"
                                className="w-full h-[350px] md:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#011b26]/40 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-700" />

                            {/* Floating Stats Badge */}
                            <div className="absolute bottom-6 right-6 bg-white/90 dark:bg-[#022534]/90 backdrop-blur-md p-6 rounded-2xl shadow-2xl border border-white/20 dark:border-white/10 max-w-[200px] transform hover:scale-105 transition-transform">
                                <p className="text-3xl font-black text-brand-orange leading-none mb-1">70+</p>
                                <p className="text-[10px] font-black uppercase tracking-widest text-[#011b26] dark:text-white opacity-70">Strategic Global Mergers</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE: Text Content */}
                    <motion.div
                        variants={fadeIn('left', 0.4)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.3 }}
                        className="flex flex-col space-y-8"
                    >
                        <div className="space-y-4">
                            <span className="inline-block font-rajdhani text-brand-orange dark:text-hpe-orange tracking-[0.4em] font-black text-xs uppercase px-4 py-1.5 bg-brand-orange/10 dark:bg-hpe-orange/10 rounded-full">
                                WHO WE ARE
                            </span>

                            <h2 id="about-heading" className="text-3xl md:text-4xl lg:text-5xl font-black text-[#011b26] dark:text-white leading-[1.1] tracking-tight">
                                Pioneering Enterprise <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-hpe-cyan to-hpe-orange">
                                    Infrastructure
                                </span> <br />
                                Ecosystems.
                            </h2>

                            <div className="w-20 h-1.5 bg-gradient-to-r from-hpe-cyan to-brand-orange rounded-full" />
                        </div>

                        <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
                            <p>
                                HPE IT Solutions stands at the intersection of technological innovation and physical
                                infrastructure excellence. We deliver integrated ecosystems that power the modern enterprise
                                with <span className="text-[#011b26] dark:text-white font-bold decoration-hpe-cyan decoration-4 underline-offset-4 underline">Pan-India efficiency</span>.
                            </p>
                            <p>
                                Our "Brick-Oriented" execution model ensures that your digital transformation is
                                built on a foundation of reliability, compliance, and scalable performance-driven
                                governance frameworks.
                            </p>
                        </div>

                        {/* Feature Mini-Grid */}
                        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-[#022534] border border-slate-100 dark:border-white/5 group hover:border-hpe-cyan/50 transition-colors">
                                <Globe className="w-6 h-6 text-hpe-cyan" />
                                <div>
                                    <h4 className="font-bold text-[#011b26] dark:text-white text-sm uppercase tracking-widest leading-none mb-2">Global Operations</h4>
                                    <p className="text-[11px] opacity-70">Nationwide presence with centralized control.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 dark:bg-[#022534] border border-slate-100 dark:border-white/5 group hover:border-brand-orange/50 transition-colors">
                                <Zap className="w-6 h-6 text-brand-orange" />
                                <div>
                                    <h4 className="font-bold text-[#011b26] dark:text-white text-sm uppercase tracking-widest leading-none mb-2">Agile Delivery</h4>
                                    <p className="text-[11px] opacity-70">Rapid deployment models for growth.</p>
                                </div>
                            </div>
                        </div> */}

                        <div className="pt-6">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,176,212,0.2)" }}
                                whileTap={{ scale: 0.95 }}
                                className="group flex items-center space-x-4 bg-gradient-to-r from-hpe-cyan to-hpe-cyan-dark text-white px-10 py-5 rounded-full font-black text-sm uppercase tracking-[0.3em] transition-all duration-300 shadow-xl cursor-pointer"
                                onClick={() => navigate('/about')}
                            >
                                <span>Read More about us</span>
                                <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-3" />
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
