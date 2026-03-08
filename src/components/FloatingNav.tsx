"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const FloatingNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Animation variants for the menu expansion
    const menuVariants = {
        closed: { height: 0, opacity: 0, marginBottom: 0 },
        open: { height: "auto", opacity: 1, marginBottom: 16 }
    };

    const navItems = [
        { name: 'Home', href: '/', icon: '/images/pages/home-icon.png' },
        { name: 'Work', href: '/work', icon: '/images/work.png' },
        { name: 'Lab', href: '/lab', icon: '/images/pages/lab-icon.png' }
    ];

    return (
        <div className="py-2 pl-2 pr-4 md:pr-8 rounded-2xl md:rounded-[20px] bg-neutral-900 border border-neutral-800 fixed left-4 md:left-1/2 right-4 md:right-auto md:-translate-x-1/2 bottom-4 md:bottom-6 md:w-[700px] z-50 overflow-hidden shadow-2xl">

            {/* 1. Animated Expandable Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                        className="overflow-hidden"
                    >
                        <nav className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <a key={item.name} className="flex items-center gap-5 group cursor-pointer " href={item.href}>
                                    <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] bg-white rounded-lg md:rounded-xl overflow-hidden relative">
                                        <Image
                                            fill={true}
                                            objectFit="cover"
                                            alt={item.name}
                                            className="group-hover:scale-100 transition-transform duration-700"
                                            src={item.icon}
                                        />
                                    </div>

                                    {/* 2. Hover Slide Effect */}
                                    <div className="overflow-hidden h-8">
                                        <div className="flex flex-col transition-transform duration-500 ease-out group-hover:-translate-y-1/2">
                                            <span className="text-lg md:text-xl font-semibold text-neutral-100 mb-1.5">{item.name}</span>
                                            <span className="text-lg md:text-xl font-semibold text-neutral-100 mb-1.5">{item.name}</span>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </nav>
                        <div className="pt-4 pb-4">
                            <div className="h-px bg-neutral-800 w-full" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Bottom Bar (Always Visible) */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 md:gap-5">
                    <div className="h-[60px] w-[60px] md:h-[80px] md:w-[80px] rounded-lg md:rounded-xl bg-neutral-100 overflow-hidden relative">
                        <video src="/video/memoji-video-bg-white.mp4" autoPlay muted loop playsInline className="absolute top-[52%] left-[47%] -translate-x-1/2 -translate-y-1/2 h-full w-full scale-140" />
                    </div>

                    <div className="flex flex-col gap-1.5 md:gap-2 w-[180px] sm:w-[400px] relative">
                        <a className="md:text-lg font-semibold text-neutral-100 uppercase" href="/">Muhammad Ahmad</a>

                        {/* 3. Marquee Animation */}
                        <div className="flex items-center h-4 overflow-hidden relative w-full">
                            <div className="absolute left-0 h-full w-8 bg-gradient-to-r from-neutral-900 to-transparent z-10" />
                            <div className="absolute right-0 h-full w-8 bg-gradient-to-l from-neutral-900 to-transparent z-10" />

                            <motion.div
                                animate={{ x: [0, -1000] }}
                                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                                className="flex whitespace-nowrap gap-4"
                            >
                                <p className="text-[10px] md:text-xs tracking-widest text-neutral-300 uppercase">
                                    Software Engineer • Product Builder • Next.js Enthusiast • Full-stack developer •
                                </p>
                                <p className="text-[10px] md:text-xs tracking-widest text-neutral-300 uppercase">
                                    Software Engineer • Product Builder • Next.js Enthusiast • Full-stack developer •
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 hover:bg-neutral-800 rounded-full transition-colors"
                >
                    <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-100"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-100"><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                        )}
                    </motion.div>
                </button>
            </div>
        </div>
    );
};

export default FloatingNav;