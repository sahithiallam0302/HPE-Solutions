import React from 'react';
import { Monitor, HardHat, Users } from 'lucide-react';

const OurDivisions = () => {
    const divisions = [
        {
            title: "Enterprise IT Services",
            icon: <Monitor className="w-8 h-8 text-[#00b0d4]" />,
            description: "Application Development, ERP & Workflow Automation, Infrastructure Management, Cloud & Data Systems.",
            highlight: false
        },
        {
            title: "Brick-Oriented Infrastructure Services",
            icon: <HardHat className="w-8 h-8 text-[#00b0d4]" />,
            description: "Construction Digital Monitoring, Real Estate ERP Systems, Vendor & Procurement Management, Site Workforce Automation.",
            highlight: false
        },
        {
            title: "Workforce & Non-IT Services",
            icon: <Users className="w-8 h-8 text-[#00b0d4]" />,
            description: "Project-based manpower deployment, Technical support services, Back-office & compliance operations.",
            highlight: false
        }
    ];

    return (
        <section className="bg-slate-50 dark:bg-[#00131c] py-12 px-6 md:py-16 transition-colors duration-300" aria-labelledby="divisions-heading">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="text-brand-orange text-xs md:text-sm font-black tracking-[0.3em] uppercase mb-4 block">
                        OUR DIVISIONS
                    </span>
                    <h2 id="divisions-heading" className="text-4xl md:text-5xl font-black text-[#011b26] dark:text-white mb-6">
                        Three Pillars of Excellence
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
                        We deliver integrated digital and physical infrastructure ecosystems across India,
                        driven by centralized governance and technological innovation.
                    </p>
                </div>

                {/* Division Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {divisions.map((division, index) => (
                        <div
                            key={index}
                            className={`relative p-10 rounded-2xl transition-all duration-300 group hover:-translate-y-2 ${division.highlight
                                ? 'bg-[#011b26] dark:bg-[#022534] text-white shadow-2xl scale-105 z-10'
                                : 'bg-white dark:bg-[#011b26] text-[#011b26] dark:text-white shadow-xl hover:shadow-2xl'
                                }`}
                        >
                            {/* Icon Container */}
                            <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-8 transition-colors duration-300 ${division.highlight
                                ? 'bg-white/10 group-hover:bg-white/20'
                                : 'bg-[#00b0d4]/10 group-hover:bg-[#00b0d4]/20'
                                }`}>
                                {division.icon}
                            </div>

                            {/* Content */}
                            <h3 className={`text-2xl font-bold mb-4 ${division.highlight ? 'text-white' : 'text-[#011b26] dark:text-white'
                                }`}>
                                {division.title}
                            </h3>
                            <p className={`text-base leading-relaxed ${division.highlight ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'
                                }`}>
                                {division.description}
                            </p>

                            {/* Decoration for highlighted card */}
                            {division.highlight && (
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <HardHat className="w-24 h-24" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurDivisions;
