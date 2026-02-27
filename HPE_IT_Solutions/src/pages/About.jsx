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
        <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-black text-[#011b26] mb-8 underline decoration-brand-orange decoration-8 underline-offset-8 uppercase">About Us</h1>
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                    <p>
                        HPE IT Solutions is a pioneer in digital infrastructure and software development. Founded with a vision to streamline complex enterprise operations, we have grown into a multi-national team of experts.
                    </p>
                    <p>
                        Our mission is to empower businesses with the technology they need to lead their industries. We don't just provide services; we build long-term partnerships that drive innovation.
                    </p>
                    <div className="pt-6 grid grid-cols-2 gap-8">
                        <div>
                            <span className="block text-3xl font-black text-brand-orange">10+</span>
                            <span className="text-sm uppercase tracking-widest font-black text-[#011b26]">Years Experience</span>
                        </div>
                        <div>
                            <span className="block text-3xl font-black text-brand-cyan">250+</span>
                            <span className="text-sm uppercase tracking-widest font-black text-[#011b26]">Projects Delivered</span>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="aspect-square bg-[#011b26]/5 rounded-3xl border border-[#011b26]/10 overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                            alt="Our Team"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-orange rounded-2xl -z-10 shadow-xl opacity-20" />
                </div>
            </div>
        </div>
    );
};

export default About;
