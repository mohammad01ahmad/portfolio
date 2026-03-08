// app/components/SplitTextAnimation.jsx

'use client'; // This directive makes the component a Client Component

import { useRef } from 'react';
import { gsap } from 'gsap'; // Import the pre-configured gsap if you made the config file
// Or import directly if not using a config file: 
// import gsap from 'gsap';
// import { SplitText } from 'gsap/SplitText'; 
// gsap.registerPlugin(SplitText); // Register here if you didn't do it globally

import { useGSAP } from '@gsap/react';

const SplitTextAnimation = () => {
    const containerRef = useRef(null); // Ref for the element you want to split

    useGSAP(() => {
        // Ensure the text is visible before SplitText runs to prevent a "flicker"
        gsap.set(containerRef.current, { opacity: 1 });

        // Create the SplitText instance
        let split = new SplitText(containerRef.current, {
            type: "words, chars", // Split into words and characters
            // mask: "lines", // Use the mask option for a clean reveal effect
        });

        // Animate the characters
        gsap.from(split.chars, {
            duration: 1,
            y: 100, // Animate from 100px below
            autoAlpha: 0, // Fade in from opacity: 0 and visibility: hidden
            stagger: 0.05, // 0.05 seconds between each character
            ease: 'power3.out',
        });

        // Clean up the animation on component unmount
        return () => {
            if (split) {
                split.revert();
            }
        };
    }, { scope: containerRef }); // Use the scope to contain the GSAP context

    return (
        <div ref={containerRef} style={{ opacity: 0 }}> {/* Set initial opacity to 0 in JSX/CSS to prevent flicker before JS runs */}
            Hello Next.js and GSAP SplitText!
        </div>
    );
};

export default SplitTextAnimation;
