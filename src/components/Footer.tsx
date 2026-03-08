'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Footer = () => {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [0, -2.5]);

  return (
    <footer className="bg-neutral-100" ref={footerRef}>
      <div className="px-2 lg:px-4 pt-8 lg:pt-16 pb-8 lg:pb-4 grid grid-cols-12 gap-2 lg:gap-4 relative">
        <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-[clamp(100px,14vw,250px)] tracking-tight" style={{ transform: 'translateY(-4.71207vh)' }}>
          Ahmad
        </h2>

        <a
          className="col-span-12 lg:col-span-8 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-sm h-[200px] lg:h-[350px] rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500"
          href="#projects"
        >
          Projects
        </a>

        <a
          className="col-span-12 lg:col-span-4 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-sm h-[200px] lg:h-[350px] rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500"
          href="#experience"
        >
          Experience
        </a>

        <div className="col-span-12 lg:col-span-4 grid grid-cols-2 lg:grid-rows-2 gap-2 lg:gap-4">
          <a
            href="mailto:mohammad01ahmad@gmail.com"
            className="lg:col-span-12 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-sm h-[120px] lg:h-full rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500"
          >
            Contact
          </a>
          <a
            href="https://github.com/mohammad01ahmad"
            target="_blank"
            rel="noopener noreferrer"
            className="lg:col-span-12 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-sm h-[120px] lg:h-full rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500"
          >
            Github
          </a>
        </div>

        <a
          href="https://www.instagram.com/yourusername/"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-6 lg:col-span-4 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-sm h-[120px] lg:h-[350px] rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500"
        >
          Instagram
        </a>

        <a
          href="https://www.linkedin.com/in/yourprofile/"
          target="_blank"
          rel="noopener noreferrer"
          className="col-span-6 lg:col-span-4 flex items-end p-4 lg:p-6 bg-neutral-300/50 backdrop-blur-sm h-[120px] lg:h-[350px] rounded-lg lg:rounded-xl text-[clamp(16px,1.4vw,24px)] font-medium leading-tight cursor-pointer hover:backdrop-blur-md transition-all duration-500"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;