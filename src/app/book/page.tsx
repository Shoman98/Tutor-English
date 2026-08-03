import { Suspense } from 'react';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Book a Session — English with Eka',
  description: 'Book your personalized English coaching session with Eka.',
};

export default function BookPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.header}>
          <span className={styles.label}>Booking</span>
          <h1 className={styles.heading}>
            Book your <em>session</em>
          </h1>
          <p className={styles.sub}>
            Pick a date and time that works for you. Eka will confirm within 24 hours.
          </p>
        </div>
        <Suspense fallback={null}>
          <BookingSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
