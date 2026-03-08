// src/lib/gsap/index.js
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

// Exporting gsap and the plugin for use elsewhere
export { gsap, SplitText };
