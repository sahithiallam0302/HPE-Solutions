import React from 'react';
import { Monitor, HardHat, Users, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

// Animation variants
const fadeIn = (direction = 'up', delay = 0) => ({
    hidden: {
        y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
        x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        opacity: 0,
        scale: 0.95
    },
    show: {
        y: 0,
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            duration: 1.25,
            delay: delay,
            bounce: 0.3
        }
    }
});

const DivisionCard = ({ title, icon: Icon, description, delay, index }) => {
    return (
        <motion.div
            variants={fadeIn('up', delay)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="group relative flex flex-col h-full"
        >
            {/* 3D glow hover effect background - refined to stay within card bounds */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-hpe-cyan/30 to-hpe-orange/30 blur-2xl rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none z-0" />

            <div className="h-full relative z-10 p-[1px] rounded-2xl bg-gradient-to-b from-white/20 to-transparent dark:from-white/10 dark:to-transparent group-hover:from-hpe-cyan group-hover:to-hpe-orange transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2">
                {/* Main Card Content (Theme-Consistent Glassmorphism) */}
                <div className="h-full bg-white dark:bg-[#022534] p-5 lg:p-6 flex flex-col items-start gap-3 rounded-2xl border border-slate-100 dark:border-white/5 transition-all duration-500 shadow-sm group-hover:shadow-hpe-cyan/10">

                    {/* Icon Container with internal 3D-like shadow */}
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-hpe-navy shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_20px_rgba(0,0,0,0.8),_0_0_15px_rgba(0,229,255,0.2)] flex items-center justify-center border border-slate-100 dark:border-hpe-cyan/30 group-hover:border-hpe-cyan group-hover:scale-110 transition-all duration-500 ring-4 ring-transparent group-hover:ring-hpe-cyan/10">
                        {React.cloneElement(Icon, { className: "w-8 h-8 text-[#00b0d4] group-hover:text-hpe-cyan transition-colors" })}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-orbitron font-bold text-slate-900 dark:text-white group-hover:text-hpe-cyan transition-colors duration-300 tracking-tight leading-none">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 dark:text-slate-300 font-sans leading-relaxed text-[15px] opacity-90">
                        {description}
                    </p>

                    {/* CTA Button */}
                    <button className="mt-auto pt-6 flex items-center gap-3 text-hpe-orange dark:text-hpe-orange font-bold uppercase tracking-[0.2em] text-[10px] hover:text-hpe-cyan dark:hover:text-white transition-all group/btn cursor-pointer">
                        <span className="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-current after:transition-all after:duration-300 group-hover/btn:after:w-full">
                            Explore Division
                        </span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                    </button>

                    {/* Decorative element inside card */}
                    <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-hpe-cyan/5 rounded-full blur-2xl group-hover:bg-hpe-cyan/15 transition-colors duration-700" />
                </div>
            </div>
        </motion.div>
    );
};

const OurDivisions = () => {
    const divisions = [
        {
            title: "Enterprise IT Services",
            icon: <Monitor />,
            description: "Application Development, ERP & Workflow Automation, Infrastructure Management, Cloud & Data Systems.",
            delay: 0.1
        },
        {
            title: "Brick-Oriented Infrastructure Services",
            icon: <HardHat />,
            description: "Construction Digital Monitoring, Real Estate ERP Systems, Vendor & Procurement Management, Site Workforce Automation.",
            delay: 0.3
        },
        {
            title: "Workforce & Non-IT Services",
            icon: <Users />,
            description: "Project-based manpower deployment, Technical support services, Back-office & compliance operations.",
            delay: 0.5
        }
    ];

    return (
        <section id="projects" className="relative bg-slate-50 dark:bg-[#011b26] py-12 px-6 md:py-16 transition-colors duration-500 overflow-hidden" aria-labelledby="divisions-heading">
            {/* Abstract Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-hpe-cyan/5 rounded-full blur-[120px] dark:opacity-20" />
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-hpe-orange/5 rounded-full blur-[120px] dark:opacity-20" />
            </div>


            <div className="max-w-7xl mx-auto relative z-10 font-sans">
                {/* Section Header - Centered for proper alignment */}
                <div className="flex flex-col items-center text-center mb-8 md:mb-10 px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="inline-block font-rajdhani text-brand-orange dark:text-hpe-orange tracking-[0.4em] font-black text-xs uppercase mb-6 px-4 py-1.5 bg-brand-orange/10 dark:bg-hpe-orange/10 rounded-full">
                            Expertise & Innovation
                        </span>

                        <h2 id="divisions-heading" className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6">
                            Three Pillars of <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-hpe-cyan to-hpe-orange animate-glow-pulse">
                                HPE Excellence
                            </span>
                        </h2>

                        <div className="w-24 h-1 bg-gradient-to-r from-hpe-cyan to-hpe-orange mx-auto mb-8 rounded-full" />

                        <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-3xl leading-relaxed mx-auto font-medium">
                            Delivering integrated digital and physical infrastructure ecosystems across India,
                            driven by centralized governance and technological innovation.
                        </p>
                    </motion.div>
                </div>

                {/* Division Cards Grid - Fixed width to be not full-screen but contained */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
                    {divisions.map((div, i) => (
                        <DivisionCard
                            key={i}
                            index={i}
                            {...div}
                        />
                    ))}
                </div>

                {/* Section Footer Decoration */}
                <div className="mt-8 flex justify-center opacity-30">
                    <div className="flex gap-2">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-2 h-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurDivisions;
