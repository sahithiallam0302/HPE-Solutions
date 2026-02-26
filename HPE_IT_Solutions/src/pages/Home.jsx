import React from 'react';

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
            <h1 className="text-6xl font-black text-white mb-6 tracking-tighter uppercase">
                Welcome to <span className="text-brand-orange">HPE</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
                Leading the way in digital transformation and innovative IT solutions.
                Our team of experts is dedicated to building excellence through technology.
            </p>
            <div className="mt-10 flex space-x-4">
                <button className="bg-brand-orange text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform active:scale-95">
                    Explore Services
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-colors">
                    Our Projects
                </button>
            </div>
        </div>
    );
};

export default Home;
