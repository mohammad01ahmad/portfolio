'use client';

import React, { useState, useRef } from 'react';
import { ArrowDown, VolumeX, Volume2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ["start start", "end start"]
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

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
            <div className="relative md:hidden">
              <video
                src="/coverr-developing-coding-sequences-3909-1080p.mp4"
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
          <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-2 lg:gap-0">
            <div className="overflow-hidden">
              <div className="w-full pointer-events-none lg:pr-[4vw]">
                <h1 className="text-[15vw] md:text-[16vw] lg:text-[17vw] font-bold uppercase">SOFTWARE</h1>
              </div>
            </div>
            <div className="overflow-hidden w-full">
              <div>
                <h1 className="text-[15vw] md:text-[16vw] lg:text-[17vw] font-bold uppercase w-full">ENGINEER</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Layout */}
      <section className="hidden lg:block">
        <div className="flex flex-col uppercase font-semibold absolute bottom-[15vh] lg:bottom-[20vh] left-8 right-8">
          <div className="overflow-hidden mb-2 lg:mb-0 lg:w-full relative mx-auto lg:mx-0">
            <div className="flex justify-between w-full">
              <p className="text-[clamp(14px,1.2vw,20px)] uppercase block">A</p>
              <p className="text-[clamp(14px,1.2vw,20px)] uppercase absolute left-1/2 -translate-x-1/2">Seriously</p>
              <p className="text-[clamp(14px,1.2vw,20px)] uppercase block">Good</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-2 lg:gap-3">
            <div className="">
              <div className="w-full pointer-events-none lg:pr-[4vw]">
                <h1 className="text-[15vw] md:text-[16vw] lg:text-[9vw] font-bold uppercase">SOFTWARE</h1>
              </div>
            </div>
            <div className="w-full">
              <div>
                <h1 className="text-[15vw] md:text-[16vw] lg:text-[9vw] font-bold uppercase w-full">ENGINEER</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden absolute left-8 bottom-6">
          <div className="flex items-center gap-1">
            <ArrowDown className="w-[clamp(16px,1.3vw,24px)] h-[clamp(16px,1.3vw,24px)] text-neutral-900" />
            <p className="text-[clamp(12px,1.2vw,20px)] font-medium">Scroll for</p>
          </div>
        </div>
        <div className="overflow-hidden absolute right-8 bottom-6">
          <div className="flex items-center gap-1">
            <p className="text-[clamp(12px,1.2vw,20px)] font-medium">cool sh*t</p>
            <ArrowDown className="w-[clamp(16px,1.3vw,24px)] h-[clamp(16px,1.3vw,24px)] text-neutral-900" />
          </div>
        </div>
      </section>

      {/* Desktop Video Section */}
      <section className="hidden md:block intro h-[100svh] px-8" ref={videoRef}>
        <motion.div
          className="video-preview relative w-full aspect-video overflow-hidden rounded-3xl will-change-transform cursor-pointer group"
          style={{
            translateX,
            scale,
            clipPath: "inset(0px)"
          }}
        >
          <div className="video-wrapper absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl">
            <video
              src="public/coverr-developing-coding-sequences-3909-1080p.mp4"
              muted={isMuted}
              loop
              autoPlay
              playsInline
              className="absolute top-0 left-0 w-full h-full rounded-2xl pointer-events-none"
            />
          </div>
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="absolute bottom-8 right-8 z-10 scale-0 group-hover:scale-100 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            <div className="bg-neutral-100/50 shadow-2xl backdrop-blur-2xl w-[4vw] h-[4vw] rounded-full flex items-center justify-center">
              {isMuted ? <VolumeX className="w-[2vw] h-[2vw] text-neutral-900" /> : <Volume2 className="w-[2vw] h-[2vw] text-neutral-900" />}
            </div>
          </button>
        </motion.div>
      </section>
    </>
  );
};

export default Hero;