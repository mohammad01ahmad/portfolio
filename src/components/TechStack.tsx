'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

// Helper component for the individual scrolling letters
const ScrollingLetter = ({ char, progress, range }: { char: string, progress: any, range: [number, number] }) => {
    // Maps scroll progress to a -100% to 0% translation
    const y = useTransform(progress, range, ["100%", "0%"]);

    return (
        <span className="relative inline-block overflow-hidden">
            <motion.span
                style={{ y }}
                className="flex flex-col"
            >
                {/* The "Hidden" letter that slides in */}
                <span className="absolute bottom-full left-0">{char}</span>
                {/* The "Primary" letter that slides out */}
                <span>{char}</span>
            </motion.span>
        </span>
    );
};

const TechStack = () => {
    const scrollContainer = useRef(null);
    const gridRef = useRef<HTMLDivElement>(null);

    // State for the magnetic highlight box
    const [highlight, setHighlight] = useState({ opacity: 0, left: 0, top: 0, width: 0, height: 0 });

    // Scroll progress for the "MODERN TECH STACK" text
    const { scrollYProgress } = useScroll({
        target: scrollContainer,
        offset: ["start end", "end start"]
    });

    const handleMouseMove = (e: React.MouseEvent) => {
        const grid = gridRef.current;
        if (!grid) return;

        const target = e.target as HTMLElement;
        const link = target.closest('a'); // Find the parent anchor tag

        if (link) {
            const rect = link.getBoundingClientRect();
            const gridRect = grid.getBoundingClientRect();

            setHighlight({
                opacity: 1,
                left: rect.left - gridRect.left,
                top: rect.top - gridRect.top,
                width: rect.width,
                height: rect.height,
            });
        } else {
            setHighlight(prev => ({ ...prev, opacity: 0 }));
        }
    };

    const modern = "MODERN".split("");
    const techstack = "TECHSTACK".split("");

    return (
        <section className="pb-24 px-4 lg:px-8 bg-white" ref={scrollContainer}>
            {/* 1. Animated Title Section */}
            <div className="flex flex-col justify-center items-center h-[60vh] lg:h-[80vh] py-24 select-none">
                <div className="text-[clamp(48px,14vw,250px)] font-bold tracking-tighter leading-[0.8] flex">
                    {modern.map((char, i) => (
                        <ScrollingLetter
                            key={i}
                            char={char}
                            progress={scrollYProgress}
                            range={[0.1 + (i * 0.02), 0.4 + (i * 0.02)]}
                        />
                    ))}
                </div>
                <div className="text-[clamp(48px,14vw,250px)] font-bold tracking-tighter leading-[0.8] flex">
                    {techstack.map((char, i) => (
                        <ScrollingLetter
                            key={i}
                            char={char}
                            progress={scrollYProgress}
                            range={[0.2 + (i * 0.02), 0.5 + (i * 0.02)]}
                        />
                    ))}
                </div>
            </div>

            <h4 className="font-semibold uppercase mb-8 text-neutral-500 text-sm tracking-widest">Professional at</h4>

            {/* 2. Magnetic Grid Section */}
            <div className="relative group/grid" ref={gridRef} onMouseMove={handleMouseMove} onMouseLeave={() => setHighlight(prev => ({ ...prev, opacity: 0 }))}>

                {/* The Floating Highlight Box */}
                <motion.div
                    className="absolute bg-neutral-900 pointer-events-none z-0 hidden lg:block"
                    animate={{
                        x: highlight.left,
                        y: highlight.top,
                        width: highlight.width,
                        height: highlight.height,
                        opacity: highlight.opacity
                    }}
                    transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                />

                <div className="hidden lg:grid grid-rows-2 border-t border-neutral-200">
                    {/* Top Row */}
                    <div className="grid grid-cols-3 border-b border-neutral-200 h-[300px]">
                        {[
                            { name: 'React', src: '/images/svg/react-logo.svg', href: 'https://reactjs.org', w: 90 },
                            { name: 'Next.js', src: '/images/svg/nextjs-logotype-light-background.svg', href: 'https://nextjs.org', w: 150 },
                            { name: 'TypeScript', src: '/images/svg/typescript-logo.svg', href: 'https://typescriptlang.org', w: 70 }
                        ].map((tech) => (
                            <a key={tech.name} href={tech.href} target="_blank" className="flex items-center justify-center border-r border-neutral-200 relative z-10 hover:invert transition-all duration-300">
                                <Image alt={tech.name} width={tech.w} height={90} src={tech.src} className="object-contain" />
                            </a>
                        ))}
                    </div>

                    {/* Bottom Row */}
                    <div className="grid grid-cols-7 border-b border-neutral-200 h-[200px]">
                        {[
                            { name: 'GSAP', src: '/images/svg/gsap-black.svg', w: 80 },
                            { name: 'Motion', src: '/images/svg/motion.svg', w: 60 },
                            { name: 'Tailwind', src: '/images/svg/tailwindcss-logo.svg', w: 70 },
                            { name: 'Contentful', src: '/images/svg/contentful-logo.svg', w: 50 },
                            { name: 'Supabase', src: '/images/svg/supabase-logo.svg', w: 50 },
                            { name: 'Vercel', src: '/images/svg/vercel-logotype-light.svg', w: 90 },
                            { name: 'Figma', src: '/images/svg/figma-logo.svg', w: 50 }
                        ].map((tech) => (
                            <a key={tech.name} href="#" className="flex items-center justify-center border-r last:border-r-0 border-neutral-200 relative z-10 hover:invert transition-all duration-300">
                                <Image alt={tech.name} width={tech.w} height={80} src={tech.src} className="object-contain" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Mobile Grid (Simplified) */}
                <div className="grid grid-cols-2 lg:hidden border-t border-l border-neutral-200">
                    {/* Map your items here for mobile as well... */}
                </div>
            </div>
        </section>
    );
};

export default TechStack;