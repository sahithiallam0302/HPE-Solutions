import React from 'react';
import { Shield, Lock, HeartPulse, Leaf, BarChart3, Award, CheckCircle } from 'lucide-react';

const Certifications = () => {
    const certs = [
        {
            title: "ISO 9001:2015",
            subtitle: "Quality Management Systems",
            icon: <Shield className="w-6 h-6 text-blue-600" />,
            bgColor: "bg-blue-50"
        },
        {
            title: "ISO 27001:2022",
            subtitle: "Information Security Management",
            icon: <Lock className="w-6 h-6 text-emerald-600" />,
            bgColor: "bg-emerald-50"
        },
        {
            title: "ISO 45001",
            subtitle: "Occupational Health & Safety",
            icon: <HeartPulse className="w-6 h-6 text-rose-600" />,
            bgColor: "bg-rose-50"
        },
        {
            title: "ISO 14001",
            subtitle: "Environmental Management",
            icon: <Leaf className="w-6 h-6 text-green-600" />,
            bgColor: "bg-green-50"
        },
        {
            title: "CMMI Level 3",
            subtitle: "Process Maturity Model",
            icon: <BarChart3 className="w-6 h-6 text-indigo-600" />,
            bgColor: "bg-indigo-50"
        },
        {
            title: "MSME",
            subtitle: "Registered Enterprise",
            icon: <Award className="w-6 h-6 text-amber-600" />,
            bgColor: "bg-amber-50"
        },
        {
            title: "Compliance",
            subtitle: "GST & PAN India Registered",
            icon: <CheckCircle className="w-6 h-6 text-slate-600" />,
            bgColor: "bg-slate-50"
        }
    ];

    return (
        <section className="bg-white dark:bg-[#011b26] py-12 px-6 min-h-[50vh] flex items-center transition-colors duration-300" aria-labelledby="certs-heading">
            <div className="max-w-7xl mx-auto w-full">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-brand-orange text-xs font-black tracking-[0.3em] uppercase mb-3 block">
                        QUALITY ASSURANCE
                    </span>
                    <h2 id="certs-heading" className="text-3xl md:text-4xl font-black text-[#011b26] dark:text-white mb-4">
                        Certifications & Standards
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
                        Committed to global benchmarks in quality, security, and operational excellence.
                    </p>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 md:gap-6">
                    {certs.map((cert, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-[#022534] border border-slate-100 dark:border-white/5 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center h-full justify-between group"
                        >
                            <div className={`${cert.bgColor} dark:bg-white/5 p-4 rounded-xl mb-4 transition-transform group-hover:scale-110`}>
                                {cert.icon}
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-[#011b26] dark:text-white mb-1">
                                    {cert.title}
                                </h3>
                                <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
                                    {cert.subtitle}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
