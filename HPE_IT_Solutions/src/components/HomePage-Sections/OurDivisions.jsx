import React from 'react';
import { Monitor, Building2, HardHat, ArrowRight } from 'lucide-react';
import { motion } from "framer-motion";

/* Animation variant */
const fadeIn = (direction = 'up', delay = 0) => ({
    hidden: {
        y: 30,
        opacity: 0,

        scale: 0.95,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 1,
            delay: delay,
            bounce: 0.2
        }
    }
});

const DivisionCard = ({ title, icon: Icon, services, delay, index }) => {
    return (
        <motion.div
            variants={fadeIn('up', delay)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="group relative flex flex-col h-full"
        >
            <div className={`h-full relative z-10 p-[1px] rounded-xl transition-all duration-500 overflow-hidden bg-[#0a1219] border border-white/5 hover:border-brand-cyan/30 ${index === 2 ? 'border-t-2 border-t-brand-cyan/50' : ''}`}>

                {/* Background Number */}
                <div className="absolute top-6 right-8 text-7xl font-black text-white/[0.03] pointer-events-none z-0">
                    {`0${index + 1}`}
                </div>

                <div className="h-full p-6 md:p-8 flex flex-col items-start gap-5 rounded-xl relative z-10">

                    {/* Icon - Using colors similar to the reference emoji/icons */}
                    <div className="w-12 h-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                        {React.cloneElement(Icon, { size: 36, className: index === 0 ? "text-blue-400" : index === 1 ? "text-slate-300" : "text-orange-400" })}
                    </div>

                    <div className="space-y-6 flex-grow">
                        {/* Title */}
                        <h3 className="text-xl font-rajdhani font-black text-white leading-tight">
                            {title}
                        </h3>

                        {/* Services List */}
                        <ul className="space-y-3">
                            {services.map((service, idx) => (
                                <li key={idx} className="flex items-center gap-3 text-slate-400 group/item">
                                    <span className="text-brand-cyan text-xs">→</span>
                                    <span className="font-sans font-medium text-[13px] md:text-sm">{service}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
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
            title: "Enterprise IT Services",
            icon: <Monitor />,
            services: [
                "Application Development",
                "ERP & Workflow Automation",
                "Infrastructure Management",
                "Cloud & Data Systems"
            ],
            delay: 0.1
        },
        {
            title: "Brick-Oriented Infrastructure Services",
            icon: <Building2 />,
            services: [
                "Construction Digital Monitoring",
                "Real Estate ERP Systems",
                "Vendor & Procurement Management",
                "Site Workforce Automation"
            ],
            delay: 0.2
        },
        {
            title: "Workforce & Non-IT Services",
            icon: <HardHat />,
            services: [
                "Project-based Manpower Deployment",
                "Technical Support Services",
                "Back-office & Compliance Operations"
            ],
            delay: 0.3
        }
    ];

    return (
        <section id="projects" className="relative bg-[#020c13] py-16 px-6 md:py-20 transition-colors duration-500" aria-labelledby="divisions-heading">
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section Header */}
                <div className="mb-12 text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="inline-block font-rajdhani text-brand-cyan tracking-[0.3em] font-black text-[10px] uppercase mb-4">
                            CORE DIVISIONS
                        </span>

                        <h2 id="divisions-heading" className="text-3xl sm:text-4xl md:text-6xl text-white leading-none tracking-tight mb-6 uppercase">
                            WHAT WE DO
                        </h2>

                        <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed font-normal font-sans">
                            Three integrated verticals powering enterprise transformation across India.
                        </p>
                    </motion.div>
                </div>

                {/* Division Cards Grid - Decreased Gap */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {divisions.map((div, i) => (
                        <DivisionCard
                            key={i}
                            index={i}
                            {...div}
                        />
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