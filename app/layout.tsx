import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingNav from '@/components/FloatingNav';

export const metadata: Metadata = {
    title: 'Ahmad - Portfolio',
    description: 'Aspiring Data Engineer, Data Scientist, AI/ML Engineer',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                {children}
                <Footer />
                <FloatingNav />
            </body>
        </html>
    );
}