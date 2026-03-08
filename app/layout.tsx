import type { Metadata } from 'next';
import './globals.css';

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
            <body>{children}</body>
        </html>
    );
}