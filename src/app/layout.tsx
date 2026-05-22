import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import ThemeProviderClient from '@components/ThemeProviderClient';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins', display: 'swap' });

export const metadata: Metadata = {
  title: 'Siddharth Babbur | Full Stack Developer',
  description: 'Portfolio of Siddharth Babbur — Full Stack Developer, AI enthusiast, and creator of modern web experiences.',
  metadataBase: new URL('https://siddharthbabbur.dev'),
  openGraph: {
    title: 'Siddharth Babbur | Full Stack Developer',
    description: 'Modern developer portfolio showcasing AI, web apps, and premium design.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} bg-surface text-slate-100 antialiased`}>
        <ThemeProviderClient>{children}</ThemeProviderClient>
      </body>
    </html>
  );
}

