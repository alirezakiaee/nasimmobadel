import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/navbar';
import { Toaster } from '@/components/ui/sonner';
import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ThermalTech - Industrial Heat Exchanger Solutions',
  description: 'Leading manufacturer of industrial heat exchangers with cutting-edge technology and superior efficiency.',
  keywords: 'heat exchangers, industrial equipment, thermal solutions, manufacturing',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LazyMotion features={domAnimation} strict>
            <AnimatePresence mode="wait">
              <Navbar />
              {children}
              <Toaster />
            </AnimatePresence>
          </LazyMotion>
        </ThemeProvider>
      </body>
    </html>
  );
}