import React from 'react';
import { Monitor, HardHat, Users, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

/* Animation variant */
const fadeIn = (direction = 'up', delay = 0) => ({
    hidden: {
        y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
        x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
        opacity: 0,
        scale: 0.95,
    },
    show: {
        y: 0,
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring',
            duration: 1.2,
            delay,
            bounce: 0.3,
        },
    },
});

/* Division Card */
const DivisionCard = ({ title, icon: Icon, description, delay }) => (
    <motion.div
        variants={fadeIn('up', delay)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="group relative flex flex-col h-full"
    >
        <div className="absolute -inset-2 bg-gradient-to-tr from-hpe-cyan/30 to-hpe-orange/30 blur-2xl rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none" />

        <div className="relative z-10 p-[1px] rounded-2xl bg-gradient-to-b from-white/20 to-transparent dark:from-white/10 overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-500">
            <div className="h-full bg-white dark:bg-[#022534] p-6 flex flex-col gap-4 rounded-2xl border border-slate-100 dark:border-white/5">

                <div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-hpe-navy flex items-center justify-center border dark:border-hpe-cyan/30 group-hover:scale-110 transition-all">
                    <Icon className="w-8 h-8 text-hpe-cyan" />
                </div>

                <h3 className="text-2xl font-orbitron font-bold text-slate-900 dark:text-white">
                    {title}
                </h3>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {description}
                </p>

                <button className="mt-auto flex items-center gap-3 text-hpe-orange font-bold uppercase tracking-[0.2em] text-[10px] hover:text-hpe-cyan transition">
                    Explore Division
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
            </div>
        </div>
    </motion.div>
);

/* Main Section */
const OurDivisions = () => {
    const divisions = [
        {
            title: 'Enterprise IT Services',
            icon: Monitor,
            description:
                'Application Development, ERP & Workflow Automation, Infrastructure Management, Cloud & Data Systems.',
            delay: 0.1,
        },
        {
            title: 'Brick-Oriented Infrastructure Services',
            icon: HardHat,
            description:
                'Construction Digital Monitoring, Real Estate ERP Systems, Vendor & Procurement Management.',
            delay: 0.3,
        },
        {
            title: 'Workforce & Non-IT Services',
            icon: Users,
            description:
                'Project-based manpower deployment, Technical support services, Back-office & compliance operations.',
            delay: 0.5,
        },
    ];

    return (
        <section
            id="divisions"
            className="relative bg-slate-50 dark:bg-[#011b26] py-16 px-6 overflow-hidden"
            aria-labelledby="divisions-title"
        >
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-14 max-w-3xl mx-auto">
                    <span className="text-hpe-orange text-xs font-black tracking-[0.3em] uppercase block mb-4">
                        OUR DIVISIONS
                    </span>

                    <h2
                        id="divisions-title"
                        className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6"
                    >
                        Three Pillars of Excellence
                    </h2>

                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Delivering integrated digital and physical infrastructure ecosystems
                        across India through innovation and centralized governance.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {divisions.map((division, i) => (
                        <DivisionCard key={i} {...division} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurDivisions;