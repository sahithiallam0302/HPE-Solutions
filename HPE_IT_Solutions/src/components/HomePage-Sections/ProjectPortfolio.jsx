import React from 'react';
import { ArrowRight, MapPin, Building2 } from 'lucide-react';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';

// Animation variants
const fadeIn = (direction = 'up', delay = 0) => ({
    hidden: {
        y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
        x: direction === 'left' ? 50 : direction === 'right' ? -50 : 0,
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

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            variants={fadeIn('up', index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="group relative flex flex-col h-full"
        >
            {/* Lighting Hover Effect (Gradient Glow) */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-hpe-cyan/20 to-hpe-orange/20 blur-2xl rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none z-0" />

            <div className="h-full relative z-10 p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent group-hover:from-hpe-cyan group-hover:to-hpe-orange transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2">
                <div className="h-full bg-white dark:bg-[#022534] rounded-2xl border border-slate-100 dark:border-white/5 flex flex-col overflow-hidden transition-colors duration-500">
                    {/* Image Container */}
                    <div className="relative h-44 overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                            <span className="bg-brand-orange text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-xl ring-2 ring-white/20">
                                {project.tag}
                            </span>
                        </div>
                        {/* Overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-grow relative">
                        <div className="flex items-center space-x-5 mb-3">
                            <div className="flex items-center text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
                                <MapPin className="w-3.5 h-3.5 mr-2 text-hpe-cyan" />
                                {project.location}
                            </div>
                            <div className="flex items-center text-slate-400 dark:text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
                                <Building2 className="w-3.5 h-3.5 mr-2 text-hpe-cyan" />
                                {project.industry}
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-[#011b26] dark:text-white mb-4 leading-snug group-hover:text-hpe-cyan transition-colors duration-300">
                            {project.title}
                        </h3>

                        <div className="mt-auto pt-4 flex items-center text-brand-orange font-black text-[12px] uppercase tracking-[0.3em] group-hover:text-hpe-cyan group-hover:translate-x-3 transition-all duration-300 cursor-pointer">
                            <span>Project Case Study</span>
                            <ArrowRight className="w-5 h-5 ml-3" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ProjectPortfolio = () => {
    const navigate = useNavigate();
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
            image: "/src/assets/images/projects/data_analytics.png"
        }
    ];

    return (
        <section id="projects" className="bg-slate-50 dark:bg-[#011b26] py-12 px-6 md:py-16 transition-colors duration-500 overflow-hidden" aria-labelledby="portfolio-heading">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-14 px-4">
                    <span className="inline-block font-rajdhani text-brand-orange tracking-[0.4em] font-black text-xs uppercase mb-4 px-4 py-2 bg-brand-orange/10 rounded-full">
                        PORTFOLIO
                    </span>
                    <h2 id="portfolio-heading" className="text-4xl md:text-5xl lg:text-6xl font-black text-[#011b26] dark:text-white mb-6 tracking-tight">
                        Impact at <span className="text-transparent bg-clip-text bg-gradient-to-r from-hpe-cyan to-hpe-orange">Scale</span>
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
                        A selection of our transformative enterprise projects delivered across India.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-brand-orange text-white px-12 py-5 rounded-full font-black text-sm uppercase tracking-[0.3em] hover:shadow-[0_0_30px_rgba(255,141,0,0.4)] transition-all duration-300 flex items-center mx-auto space-x-4 cursor-pointer"
                        onClick={() => navigate('/projects')}
                    >
                        <span>View All Experience</span>
                        <ArrowRight className="w-6 h-6" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default ProjectPortfolio;
