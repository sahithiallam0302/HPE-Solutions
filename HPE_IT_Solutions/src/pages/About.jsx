import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Monitor, Activity, Users, ArrowRight } from 'lucide-react';

const About = () => {
    const capabilities = [
        {
            title: "Enterprise Digital Platforms",
            icon: <Monitor className="w-8 h-8 text-brand-cyan" />,
            desc: "Advanced digital systems integrated for seamless enterprise-wide operations with high availability."
        },
        {
            title: "Infrastructure Lifecycle Monitoring",
            icon: <Activity className="w-8 h-8 text-brand-orange" />,
            desc: "Real-time tracking and digitization of physical infrastructure projects, assets and life-cycle events."
        },
        {
            title: "Workforce Deployment Systems",
            icon: <Users className="w-8 h-8 text-brand-cyan" />,
            desc: "Decentralized field execution managed through centralized governance and smart resource allocation."
        },
        {
            title: "Compliance-Driven Governance",
            icon: <Shield className="w-8 h-8 text-brand-orange" />,
            desc: "Rigorous accountability and performance transparency at national scale ensuring regulatory standards."
        }
    ];

    return (
        <article className="min-h-screen bg-[#010a0f] text-slate-200 font-sans selection:bg-brand-orange/30 overflow-x-hidden">

            {/* Transparent Hero Section */}
            <header className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-[#011b26]">
                <div className="relative z-10 text-center px-6">
                    <span className="text-brand-orange font-black uppercase tracking-[0.6em] text-xs mb-6 block">
                        Global Infrastructure Leader
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-4">
                        About <span className="text-brand-cyan">HPE</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 font-light tracking-wide max-w-2xl mx-auto">
                        IT SOLUTIONS
                    </p>
                </div>
                {/* Fade to background */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#010a0f] to-transparent" />
            </header>

            {/* Content Section */}
            <main className="max-w-7xl mx-auto px-6 pb-32 -mt-16 relative z-20">

                {/* Strategic Overview (Highly Transparent Glass theme) */}
                <section className="bg-white/[0.01] backdrop-blur-[50px] rounded-[3rem] border border-white/5 p-8 md:p-16 mb-24 shadow-2xl">
                    <div className="grid lg:grid-cols-5 gap-16 items-center">
                        <div className="lg:col-span-3 space-y-8">
                            <h2 className="text-sm uppercase tracking-[0.5em] font-black text-brand-orange">
                                Strategic Overview
                            </h2>
                            <p className="text-2xl md:text-3xl font-light text-white leading-snug">
                                HPE IT Solutions is a multi-vertical enterprise delivering <span className="text-brand-cyan">structured IT services</span> across the Indian subcontinent.
                            </p>
                            <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-normal">
                                <p>
                                    Established through 70+ strategic mergers, the organization operates under a centralized governance
                                    architecture supported by decentralized field execution teams.
                                </p>
                                <p>
                                    Headquartered in Hyderabad, our operational hubs in Mumbai, Bangalore, Chennai, and Delhi
                                    integrate digital enterprise systems with complex infrastructure execution.
                                </p>
                            </div>
                        </div>

                        {/* Right Side Image */}
                        <div className="lg:col-span-2">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-brand-cyan/20 to-brand-orange/20 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
                                    <img
                                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                                        alt="Global Technology Infrastructure"
                                        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Capability Highlights (With Animated/Glow Borders) */}
                <section>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4">
                            Capability <span className="text-brand-orange">Highlights</span>
                        </h2>
                        <div className="w-20 h-1 bg-brand-cyan mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {capabilities.map((cap) => (
                            <div key={cap.title} className="group relative p-0.5 rounded-[2rem] overflow-hidden">
                                {/* Border Effect Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 group-hover:from-brand-cyan/40 group-hover:to-brand-orange/40 transition-all duration-500"></div>

                                <div className="relative h-full p-8 rounded-[1.95rem] bg-white/[0.02] backdrop-blur-3xl flex flex-col items-start transition-all duration-300 group-hover:bg-white/[0.06]">
                                    <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10 inline-block transition-colors group-hover:border-brand-cyan/30">
                                        {cap.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 leading-tight">
                                        {cap.title}
                                    </h3>
                                    <p className="text-slate-300 text-sm leading-relaxed font-medium">
                                        {cap.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Navigation CTA */}
                <div className="mt-32 flex justify-center">
                    <Link
                        to="/vision-mission"
                        className="group flex items-center space-x-4 px-12 py-5 rounded-full border border-white/20 bg-white/5 text-white font-black tracking-widest uppercase text-sm transition-all shadow-xl hover:bg-brand-orange hover:text-white hover:border-brand-orange hover:shadow-[0_0_30px_rgba(255,107,0,0.4)]"
                    >
                        <span>Vision & Mission</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                    </Link>
                </div>
            </main>

            {/* Static Ambient Glows */}
            <div className="fixed inset-0 pointer-events-none z-[-1]">
                <div className="absolute top-[20%] left-[5%] w-[40rem] h-[40rem] bg-brand-cyan/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-[20%] right-[5%] w-[40rem] h-[40rem] bg-brand-orange/5 rounded-full blur-[150px]" />
            </div>
        </article>
    );
};

export default About;
