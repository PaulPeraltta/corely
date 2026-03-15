'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  var Logo = <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="50" height="50" viewBox="0 0 500.000000 500.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
fill="currentColor" stroke="none">
<path d="M3415 4615 c-285 -53 -570 -200 -767 -397 l-68 -67 -132 34 c-200 51
-272 60 -488 59 -157 0 -217 -4 -310 -22 -441 -83 -803 -284 -1091 -605 -222
-247 -380 -565 -450 -907 -21 -103 -24 -140 -24 -355 1 -223 3 -249 28 -370
35 -161 81 -303 145 -437 553 -1170 2084 -1454 3024 -560 270 258 465 610 540
978 l22 112 91 27 c329 97 655 356 819 648 263 472 182 1080 -200 1486 -171
182 -374 301 -619 363 -108 27 -403 34 -520 13z m333 -551 c46 -9 115 -34 172
-62 78 -38 110 -61 181 -132 153 -151 218 -298 226 -505 6 -148 -9 -223 -72
-350 -158 -323 -524 -487 -870 -391 -201 56 -380 211 -471 410 -48 105 -66
206 -62 340 3 103 8 134 34 207 84 236 304 430 549 484 83 18 221 18 313 -1z
m-1557 -420 c52 -9 98 -19 102 -23 4 -4 0 -52 -9 -107 -19 -119 -15 -318 11
-439 72 -342 278 -647 563 -833 94 -61 257 -135 340 -153 52 -12 53 -13 46
-43 -23 -114 -99 -286 -177 -402 -244 -365 -668 -594 -1102 -594 -621 0 -1153
448 -1277 1075 -24 125 -26 342 -4 465 79 436 391 810 816 978 83 33 214 68
305 81 100 14 285 12 386 -5z"/>
</g>
</svg>

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>{Logo}</Link>
      <ul className={styles.links}>
        <li><a href="#sobre">Nosotros</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#proceso">Proceso</a></li>
        <li><a href="#portfolio">Proyectos</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}
