import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingNav from '@/components/FloatingNav';
import Myself from '@/components/Myself';
import TechStack from '@/components/TechStack';

export default function Home() {
    return (
        <div className="min-h-screen bg-neutral-100 text-neutral-900">
            <Navbar />
            <Hero />
            <Myself />
            <Projects />
            <Experience />
            <TechStack />
            <Footer />
            <FloatingNav />
        </div>
    );
}