'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const Myself = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const videoClipPath = useTransform(
        scrollYProgress,
        [0, 0.5],
        ["inset(0 0 100% 0)", "inset(0 0 0% 0)"]
    );

    return (
        <section id="myself" className="grid grid-cols-12 gap-4 lg:gap-8 pt-56 pb-28 p-4 lg:px-8" ref={sectionRef}>
            <div className="flex flex-col col-span-12 lg:col-span-7">
                <motion.h4
                    className="font-semibold uppercase mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Myself
                </motion.h4>

                {/* Mobile Image */}
                <motion.div
                    className="lg:hidden col-span-12 aspect-video rounded-lg overflow-hidden mb-4 relative"
                    style={{ clipPath: videoClipPath }} // Apply animation to the container
                >
                    <Image
                        src="/images/coding-workspace.png"
                        alt="work"
                        fill // Replaces w-full h-full
                        priority // Loads it early (LCP optimization)
                        className="pointer-events-none object-cover"
                        sizes="(max-width: 1024px) 100vw" // Helps browser pick right size
                    />
                </motion.div>

                {/* Desktop Text with Animation */}
                <motion.p
                    className="hidden lg:block text-[clamp(28px,3.5vw,96px)] font-semibold tracking-tight leading-none"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    I'm a software engineer passionate about building reliable and scalable systems. My expertise lies{' '}
                    in backend development, system architecture, and designing maintainable applications. I enjoy turning{' '}
                    complex ideas into practical solutions and delivering software, that is efficient, secure,{' '}
                    and built to perform in real-world environments.
                </motion.p>

                {/* Mobile Text */}
                <motion.p
                    className="lg:hidden text-[clamp(28px,3.5vw,96px)] font-semibold tracking-tight leading-none"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    I'm a software engineer passionate about building reliable and scalable systems. My expertise lies{' '}
                    in backend development, system architecture, and designing maintainable applications. I enjoy turning{' '}
                    complex ideas into practical solutions and delivering software, that is efficient, secure,{' '}
                    and built to perform in real-world environments.
                </motion.p>
            </div>

            {/* Desktop Sticky Video */}
            <div className="hidden lg:block h-full col-span-5">
                <div className="sticky top-[calc(100vh-20vw-172px)] w-full aspect-video rounded-lg lg:rounded-xl overflow-hidden">
                    <img
                        src="/images/coding-workspace.png"
                        className="pointer-events-none w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Myself;