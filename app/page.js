'use client';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Footer />
    </main>
  );
}
