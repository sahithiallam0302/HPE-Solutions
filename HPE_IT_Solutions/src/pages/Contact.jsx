import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <h1 className="text-5xl font-black text-[#011b26] mb-12 uppercase">Contact Us</h1>

            <div className="grid lg:grid-cols-3 gap-16">
                <div className="lg:col-span-1 space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-black text-brand-orange uppercase tracking-wider">Get in Touch</h2>
                        <p className="text-slate-600 text-lg">We're here to help and answer any questions you might have. We look forward to hearing from you.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center space-x-4 group">
                            <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-brand-orange border border-slate-100 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                                <Mail size={24} />
                            </div>
                            <div>
                                <span className="block text-slate-400 text-xs font-bold uppercase tracking-widest">Email us</span>
                                <span className="text-[#011b26] font-bold">contact@hpe-it.com</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 group">
                            <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-brand-cyan border border-slate-100 group-hover:bg-brand-cyan group-hover:text-white transition-colors">
                                <Phone size={24} />
                            </div>
                            <div>
                                <span className="block text-slate-400 text-xs font-bold uppercase tracking-widest">Call us</span>
                                <span className="text-[#011b26] font-bold">+91 (80) 4567 8901</span>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4 group">
                            <div className="w-12 h-12 bg-white shadow-sm rounded-xl flex items-center justify-center text-[#011b26] border border-slate-100 group-hover:bg-[#011b26] group-hover:text-white transition-colors">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <span className="block text-slate-400 text-xs font-bold uppercase tracking-widest">Visit us</span>
                                <span className="text-[#011b26] font-bold">Bangalore, India</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <form className="bg-white border border-slate-100 p-10 rounded-3xl shadow-xl shadow-slate-200/50 space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Full Name</label>
                                <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-[#011b26] focus:border-brand-orange outline-none transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                                <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-[#011b26] focus:border-brand-orange outline-none transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Subject</label>
                            <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-[#011b26] focus:border-brand-orange outline-none transition-colors" placeholder="How can we help?" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
                            <textarea rows="6" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-4 text-[#011b26] focus:border-brand-orange outline-none transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                        </div>
                        <button className="w-full bg-brand-orange hover:bg-orange-600 text-white py-5 rounded-xl font-black uppercase tracking-widest transition-all shadow-xl shadow-brand-orange/20 flex items-center justify-center space-x-3 active:scale-[0.98]">
                            <span>Send Message</span>
                            <Send size={20} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;