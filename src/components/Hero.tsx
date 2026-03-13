'use client';

import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { ArrowDown, VolumeX, Volume2 } from 'lucide-react';
import { motion, useInView, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const Hero = () => {
  // Video related
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Text animation
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const mobileRef = useRef(null)
  const isMobileInView = useInView(mobileRef, { once: true })

  const { scrollYProgress } = useScroll({ target: videoRef, offset: ["start end", "start start"] });

  const scale = useTransform(scrollYProgress, [0, 1], [0.35, 1]);
  const y = useTransform(scrollYProgress, [0, 1], ["-115vh", "10vh"]);

  // Track mouse movement
  const mouseX = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 800 });

  useLayoutEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized value between -1 and 1 based on screen width
      const xOffset = (e.clientX / window.innerWidth - 0.5) * 6;
      mouseX.set(xOffset);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX]);

  // Combine the scroll effect with the mouse movement.
  // The mouse effect should be at 100% (-5vw to +5vw) at the top, and scale down to 0 as we scroll so the video centers perfectly.
  const mouseMovementRange = useTransform(scrollYProgress, [0, 1], [10, 0]); // 10vw range at top, 0vw range at bottom

  // Create a combined X value using a custom useTransform
  const x = useTransform(
    [smoothMouseX, mouseMovementRange],
    ([latestMouseX, latestRange]) => `${(latestMouseX as number) * (latestRange as number)}vw`
  );

  return (
    <>
      <section id="home" className="h-[100svh] relative px-4 lg:px-8 overflow-x-hidden">
        {/* Mobile Layout */}
        <div className="flex flex-col justify-between h-full py-32 lg:hidden">
          <div className="flex flex-col gap-1">
            <div className="overflow-hidden mb-1 w-full relative">
              <div className="flex justify-between w-full">
                <p className="text-[clamp(14px,1.2vw,20px)] uppercase font-semibold">A</p>
                <p className="text-[clamp(14px,1.2vw,20px)] uppercase font-semibold absolute left-1/2 -translate-x-1/2">Seriously</p>
                <p className="text-[clamp(14px,1.2vw,20px)] uppercase font-semibold">Good</p>
              </div>
            </div>
            <div className="relative lg:hidden">
              <video
                src="/video/hero-video.mp4"
                muted={isMuted}
                loop
                autoPlay
                playsInline
                preload="metadata"
                className="w-full h-full pointer-events-none aspect-video rounded-xl overflow-hidden"
              />
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-2 right-2 z-10"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
              >
                <div className="bg-neutral-100/50 shadow-2xl backdrop-blur-2xl w-10 h-10 rounded-full flex items-center justify-center">
                  {isMuted ? <VolumeX className="w-5 h-5 text-neutral-900" /> : <Volume2 className="w-5 h-5 text-neutral-900" />}
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-1 lg:gap-0" ref={mobileRef}>
            <div className="overflow-hidden">
              <div className="w-full pointer-events-none lg:pr-[4vw]">
                <motion.h1
                  className="text-[17vw] md:text-[16vw] lg:text-[17vw] font-extrabold lg:font-bold uppercase text-center leading-[0.85] lg:leading-[0.8]"
                  initial={{ y: "100%" }}
                  animate={isMobileInView ? { y: 0 } : { y: "100%" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  SOFTWARE
                </motion.h1>
              </div>
            </div>
            <div className="overflow-hidden w-full">
              <div>
                <motion.h1
                  className="text-[19vw] md:text-[16vw] lg:text-[17vw] font-extrabold lg:font-bold uppercase w-full text-center leading-[0.85] lg:leading-[0.8]"
                  initial={{ y: "100%" }}
                  animate={isMobileInView ? { y: 0 } : { y: "100%" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                >
                  ENGINEER
                </motion.h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Layout */}
      <section className="hidden lg:block">
        <div className="flex flex-col uppercase font-semibold absolute bottom-[15vh] lg:bottom-[20vh] left-8 right-8">
          <div className="overflow-hidden mb-2 lg:mb-0 lg:w-full lg:pt-15 relative mx-auto lg:mx-0">
            <div className="flex justify-between w-full">
              <motion.p
                className="text-[clamp(14px,1.2vw,20px)] uppercase block"
                initial={{ y: "-100%" }}
                animate={isInView ? { y: 0 } : { y: "100%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                A
              </motion.p>

              <motion.p
                className="text-[clamp(14px,1.2vw,20px)] uppercase absolute left-1/2 -translate-x-1/2"
                initial={{ y: "-100%" }}
                animate={isInView ? { y: 0 } : { y: "100%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Seriously
              </motion.p>
              <motion.p
                className="text-[clamp(14px,1.2vw,20px)] uppercase block"
                initial={{ y: "-100%" }}
                animate={isInView ? { y: 0 } : { y: "100%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                Good
              </motion.p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-2 lg:gap-3" ref={ref}>
            <span className="text-[clamp(48px,12vw,200px)] font-bold tracking-tight leading-[0.8] uppercase" aria-label="Work">
              <div
                className="line-mask line1-mask"
                aria-hidden="true"
                style={{ position: 'relative', display: 'block', textAlign: 'start', overflow: 'clip' }}
              >
                <div
                  className="line line1"
                  aria-hidden="true"
                  style={{ position: 'relative', display: 'block', textAlign: 'start', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)' }}>
                  <motion.h1
                    className="text-[15vw] md:text-[16vw] lg:text-[9.5vw] font-bold uppercase"
                    initial={{ y: "100%" }}
                    animate={isInView ? { y: 0 } : { y: "100%" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    SOFTWARE
                  </motion.h1>
                </div>
              </div>
            </span>
            <span className="text-[clamp(48px,12vw,200px)] font-bold tracking-tight leading-[0.8] uppercase" aria-label="Work">
              <div
                className="line-mask line1-mask"
                aria-hidden="true"
                style={{ position: 'relative', display: 'block', textAlign: 'start', overflow: 'clip' }}
              >
                <div
                  className="line line1"
                  aria-hidden="true"
                  style={{ position: 'relative', display: 'block', textAlign: 'start', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)' }}>
                  <motion.h1
                    className="text-[15vw] md:text-[16vw] lg:text-[9.5vw] font-bold uppercase"
                    initial={{ y: "100%" }}
                    animate={isInView ? { y: 0 } : { y: "100%" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    ENGINEER
                  </motion.h1>
                </div>
              </div>
            </span>
          </div>
        </div>
        <div className="overflow-hidden absolute left-8 bottom-6">
          <motion.div
            className="flex items-center gap-1"
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}>
            <ArrowDown className="w-[clamp(16px,1.3vw,24px)] h-[clamp(16px,1.3vw,24px)] text-neutral-900" />
            <p className="text-[clamp(12px,1.2vw,20px)] font-medium">Scroll for</p>
          </motion.div>
        </div>
        <div className="overflow-hidden absolute right-8 bottom-6">
          <motion.div
            className="flex items-center gap-1"
            initial={{ y: "100%" }}
            animate={isInView ? { y: 0 } : { y: "100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}>
            <p className="text-[clamp(12px,1.2vw,20px)] font-medium">cool sh*t</p>
            <ArrowDown className="w-[clamp(16px,1.3vw,24px)] h-[clamp(16px,1.3vw,24px)] text-neutral-900" />
          </motion.div>
        </div>
      </section>

      {/* Desktop Video Section */}
      <section className="hidden lg:block intro h-[100svh] px-8" ref={videoRef}>
        <motion.div className="video-preview relative w-full aspect-video overflow-hidden rounded-3xl will-change-transform cursor-pointer group"
          // Should be on top of the section initially and scales down to 100% when scrolling down
          style={{
            clipPath: "inset(0px)",
            scale,
            y,
            x: x as any,
          }}
        >
          <div className="video-wrapper absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl">
            <video
              src="/video/hero-video.mp4"
              autoPlay
              muted
              loop
              className="absolute top-0 left-0 w-full h-full rounded-2xl pointer-events-none" />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;
