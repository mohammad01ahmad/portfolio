'use client';

import React from 'react';
import { experiences } from '../data/experiences';

const Experience = () => {
  return (
    <section id="experience" className="pt-20">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="flex justify-between w-full">
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
                  Experience
                </div>
              </div>
            </span>
            <span className="text-[clamp(48px,12vw,200px)] font-bold tracking-tight leading-[0.8] uppercase" aria-label="'25">
              <div
                className="line-mask line1-mask"
                aria-hidden="true"
                style={{ position: 'relative', display: 'block', textAlign: 'start', overflow: 'clip' }}
              >
                <div
                  className="line line1"
                  aria-hidden="true"
                  style={{ position: 'relative', display: 'block', textAlign: 'start', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)' }}>
                  '26
                </div>
              </div>
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Experience;