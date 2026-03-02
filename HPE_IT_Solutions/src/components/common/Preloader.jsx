import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        y: -100,
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[999] bg-[#011b26] flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Geometric Grid Animation */}
                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                    </div>

                    {/* Scanning Line Effect */}
                    <motion.div
                        initial={{ top: "-10%" }}
                        animate={{ top: "110%" }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-hpe-cyan/30 to-transparent z-10 pointer-events-none"
                    />

                    {/* Background Accents */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-hpe-cyan/10 blur-[120px] rounded-full"
                        />
                        <motion.div
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.2, 0.4, 0.2]
                            }}
                            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                            className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-orange/10 blur-[120px] rounded-full"
                        />
                    </div>

                    <div className="relative z-10 flex flex-col items-center">
                        {/* Logo Container */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="relative mb-12"
                        >
                            {/* Rotating Rings with different speeds */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-8 border border-white/5 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-12 border border-hpe-cyan/10 rounded-full border-dashed"
                            />
                            <motion.div
                                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.3, 0.1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute -inset-16 border border-brand-orange/10 rounded-full"
                            />

                            <motion.img
                                animate={{
                                    filter: ["brightness(1)", "brightness(1.3)", "brightness(1)"],
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                src="/HPE LOGO.png"
                                alt="HPE IT Solutions"
                                className="h-24 md:h-32 w-auto object-contain brightness-110 drop-shadow-[0_0_30px_rgba(0,176,212,0.3)]"
                            />
                        </motion.div>

                        {/* Loading Text */}
                        <div className="text-center space-y-6">
                            <div className="flex flex-col items-center">
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-white font-rajdhani font-bold tracking-[0.5em] text-xs uppercase mb-2"
                                >
                                    {"INITIALIZING INFRASTRUCTURE".split("").map((char, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, scale: 2 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.03 * i }}
                                        >
                                            {char}
                                        </motion.span>
                                    ))}
                                </motion.h2>
                                <motion.p
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                    className="text-hpe-cyan/60 text-[8px] font-mono tracking-widest uppercase"
                                >
                                    System Protocol: Secure_Gate_v4.2
                                </motion.p>
                            </div>

                            {/* Progress Bar Container */}
                            <div className="relative">
                                <div className="w-72 h-[3px] bg-white/5 rounded-full overflow-hidden relative">
                                    <motion.div
                                        className="absolute inset-0 bg-gradient-to-r from-hpe-cyan via-white to-brand-orange"
                                        initial={{ width: "0%" }}
                                        animate={{ width: `${progress}%` }}
                                        transition={{ duration: 0.2 }}
                                    />
                                </div>
                                {/* Glow under progress bar */}
                                <motion.div
                                    style={{ width: `${progress}%` }}
                                    className="absolute -bottom-1 h-2 bg-hpe-cyan/20 blur-md transition-all duration-200"
                                />
                            </div>

                            {/* Percentage with character shuffle effect */}
                            <div className="flex items-center justify-center space-x-2">
                                <span className="text-white/20 font-mono text-[10px] uppercase tracking-widest">Load_Status:</span>
                                <motion.p
                                    key={Math.floor(progress)}
                                    initial={{ opacity: 0, x: -5 }}
                                    animate={{ opacity: 0.8, x: 0 }}
                                    className="text-hpe-orange font-mono text-sm tracking-widest font-bold"
                                >
                                    {Math.min(100, Math.floor(progress))}%
                                </motion.p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Indicator with Data Stream animation */}
                    <div className="absolute bottom-12 left-0 w-full flex flex-col items-center gap-2">
                        <div className="flex space-x-1">
                            {[1, 2, 3].map((dot) => (
                                <motion.div
                                    key={dot}
                                    animate={{ opacity: [0.2, 1, 0.2] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: dot * 0.2 }}
                                    className="w-1 h-1 bg-hpe-cyan rounded-full"
                                />
                            ))}
                        </div>
                        <p className="text-white/20 text-[8px] uppercase tracking-[0.8em] font-black">
                            Secure Enterprise Network | Layer 7 Protection
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
