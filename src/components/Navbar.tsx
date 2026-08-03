'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>✦</div>
          <span>
            <span className={styles.logoText}>English with </span>
            <span className={styles.logoAccent}>Eka</span>
          </span>
        </Link>

        <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <Link href="/#home" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/#programs" onClick={() => setMenuOpen(false)}>Programs</Link>
          <Link href="/level-test" onClick={() => setMenuOpen(false)}>Level Test</Link>
          <Link href="/#about" onClick={() => setMenuOpen(false)}>About Eka</Link>
          <Link href="/book" onClick={() => setMenuOpen(false)}>Book</Link>
        </div>

        <Link href="/book" className={styles.cta}>
          Book a session
        </Link>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.barOpen1 : ''} />
          <span className={menuOpen ? styles.barOpen2 : ''} />
          <span className={menuOpen ? styles.barOpen3 : ''} />
        </button>
      </div>
    </nav>
  );
}
