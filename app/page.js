'use client';

import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Sobre from '@/components/Sobre/Sobre';
import Servicios from '@/components/Servicios/Servicios';
import Proceso from '@/components/Proceso/Proceso';
import Diferenciador from '@/components/Diferenciador/Diferenciador';
import Portfolio from '@/components/Portfolio/Portfolio';
import Contacto from '@/components/Contacto/Contacto';
import Footer from '@/components/Footer/Footer';
import useScrollReveal from '@/hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sobre />
        <Servicios />
        <Proceso />
        <Diferenciador />
        {/* <Portfolio /> */}
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
