import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import LevelTest from '@/components/LevelTest';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Level Test — English with Eka',
  description:
    'Take a quick 8-question test to find your English level and get a personalized program recommendation.',
};

export default function LevelTestPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.header}>
          <span className={styles.label}>Level Test</span>
          <h1 className={styles.heading}>
            Find your <em>level</em>
          </h1>
          <p className={styles.sub}>
            8 quick questions. Pick an answer and move straight on — no second-guessing.
            We'll tell you exactly where you are.
          </p>
        </div>
        <LevelTest />
      </main>
      <Footer />
    </>
  );
}
