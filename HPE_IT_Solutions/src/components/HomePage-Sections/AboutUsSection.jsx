import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutUsSection = () => {
    return (
        <section className="bg-white dark:bg-[#011b26] py-12 px-6 md:py-16 transition-colors duration-300" aria-labelledby="about-heading">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                {/* LEFT SIDE: Image */}
                <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
                    <img
                        src="/AboutUsHomePageImage.png"
                        alt="HPE IT Solutions Enterprise Workspace"
                        className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#011b26]/20 to-transparent" />
                </div>

                {/* RIGHT SIDE: Text Content */}
                <div className="flex flex-col space-y-6">
                    <div>
                        <span className="text-brand-orange text-xs md:text-sm font-black tracking-[0.3em] uppercase mb-4 block">
                            ABOUT US
                        </span>
                        <h2 id="about-heading" className="text-4xl md:text-5xl font-black text-[#011b26] dark:text-white leading-tight">
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

            </div>
        </section>
    );
};

export default AboutUsSection;
