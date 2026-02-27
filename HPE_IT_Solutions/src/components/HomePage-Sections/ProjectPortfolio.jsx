import React from 'react';
import { ArrowRight, MapPin, Building2, Tag } from 'lucide-react';

const ProjectPortfolio = () => {
    const projects = [
        {
            title: "Digital Transformation for State Government",
            location: "Hyderabad",
            industry: "Government",
            tag: "ERP",
            image: "/src/assets/images/projects/gov_digital.png"
        },
        {
            title: "Smart Campus Infrastructure",
            location: "Bangalore",
            industry: "Education",
            tag: "IoT & Infra",
            image: "/src/assets/images/projects/smart_campus.png"
        },
        {
            title: "Enterprise Data Analytics Platform",
            location: "Mumbai",
            industry: "Financial Services",
            tag: "Analytics",
            image: "/src/assets/images/projects/data_analytics.png"
        },
        {
            title: "Highway Construction Monitoring",
            location: "Delhi NCR",
            industry: "Infrastructure",
            tag: "IoT",
            image: "/src/assets/images/projects/highway_monitoring.png"
        },
        {
            title: "Cloud Migration for Telecom Giant",
            location: "Chennai",
            industry: "Telecom",
            tag: "Cloud",
            image: "/src/assets/images/projects/telecom_cloud.png"
        },
        {
            title: "Multi-site ERP Deployment",
            location: "Pune",
            industry: "Manufacturing",
            tag: "Automation",
            image: "/src/assets/images/projects/data_analytics.png" // Re-using data center image
        }
    ];

    return (
        <section className="bg-slate-50 py-12 px-6 md:py-16" aria-labelledby="portfolio-heading">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-brand-orange text-xs font-black tracking-[0.3em] uppercase mb-3 block">
                        PORTFOLIO
                    </span>
                    <h2 id="portfolio-heading" className="text-3xl md:text-5xl font-black text-[#011b26] mb-4">
                        Project Portfolio
                    </h2>
                    <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto">
                        A selection of our transformative enterprise projects delivered across India.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full border border-slate-100"
                        >
                            {/* Image Container */}
                            <div className="relative h-40 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-3 left-3">
                                    <span className="bg-brand-orange text-white text-[9px] font-black px-2.5 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                                        {project.tag}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4 flex flex-col flex-grow">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="flex items-center text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                                        <MapPin className="w-2.5 h-2.5 mr-1 text-[#00b0d4]" />
                                        {project.location}
                                    </div>
                                    <div className="flex items-center text-slate-400 text-[10px] font-bold uppercase tracking-wider">
                                        <Building2 className="w-2.5 h-2.5 mr-1 text-[#00b0d4]" />
                                        {project.industry}
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-[#011b26] mb-3 leading-tight group-hover:text-[#00b0d4] transition-colors cursor-pointer">
                                    {project.title}
                                </h3>

                                <div className="mt-auto pt-2 flex items-center text-[#011b26] font-bold text-[11px] uppercase tracking-widest group-hover:translate-x-1 transition-transform cursor-pointer">
                                    View Details <ArrowRight className="w-4 h-4 ml-1.5" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <button className="bg-[#011b26] text-white px-10 py-4 rounded-full font-bold hover:bg-[#00b0d4] transition-all duration-300 shadow-xl shadow-slate-900/10 active:scale-95 flex items-center mx-auto space-x-3 cursor-pointer">
                        <span>View All Projects</span>
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectPortfolio;