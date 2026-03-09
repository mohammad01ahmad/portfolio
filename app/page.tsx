import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import FloatingNav from '@/components/FloatingNav';
import Myself from '@/components/Myself';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import ExperienceExpanded from '@/components/ExperienceExpanded';

export default function Home() {
    return (
        <div className="min-h-screen bg-neutral-100 text-neutral-900">
            <Hero />
            <Myself />
            <Experience />
            <ExperienceExpanded />
            <Projects />
            <TechStack />
        </div>
    );
}