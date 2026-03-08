'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

                {/* Mobile Video */}
                <div className="lg:hidden col-span-12 aspect-video rounded-lg overflow-hidden mb-4">
                    <motion.video
                        src="/videos/about-video.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="pointer-events-none w-full h-full object-cover"
                        style={{ clipPath: videoClipPath }}
                    />
                </div>

                {/* Desktop Text with Animation */}
                <motion.p
                    className="hidden lg:block text-[clamp(28px,3.5vw,96px)] font-semibold tracking-tight leading-none"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    Passionate about turning <span className="text-purple-600">data</span> into actionable insights, I build{' '}
                    <span className="text-orange-500">intelligent systems</span> that solve real-world problems. With expertise in{' '}
                    <span className="text-yellow-600">machine learning</span>, data engineering, and analytics, I help organizations{' '}
                    unlock the power of their data to drive informed decisions and create meaningful impact.
                </motion.p>

                {/* Mobile Text */}
                <motion.p
                    className="lg:hidden text-[clamp(28px,3.5vw,96px)] font-semibold tracking-tight leading-none"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Passionate about turning data into actionable insights, I build intelligent systems that solve real-world problems. With expertise in machine learning, data engineering, and analytics, I help organizations unlock the power of their data to drive informed decisions and create meaningful impact.
                </motion.p>
            </div>

            {/* Desktop Sticky Video */}
            <div className="hidden lg:block h-full col-span-5">
                <div className="sticky top-[calc(100vh-20vw-172px)] w-full aspect-video rounded-lg lg:rounded-xl overflow-hidden">
                    <video
                        src="/videos/about-video.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="pointer-events-none w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Myself;