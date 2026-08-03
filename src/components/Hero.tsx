import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.bgImage} />
      <div className={styles.bgGradient} />

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeStar}>✦</span>
            Boutique English coaching
          </div>

          <h1 className={styles.heading}>
            Where English
            <br />
            <em>comes alive.</em>
          </h1>

          <p className={styles.subtitle}>
            Personalized lessons with Eka — designed around your level, your goals,
            and the way <em>you</em> learn best. No memorization. Real communication.
          </p>

          <div className={styles.actions}>
            <Link href="/book" className={styles.btnPrimary}>
              Book a session →
            </Link>
            <Link href="/level-test" className={styles.btnSecondary}>
              Take the level test
            </Link>
          </div>

          <div className={styles.proof}>
            <div className={styles.avatars}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className={`${styles.avatar} ${styles[`av${i}`]}`} />
              ))}
            </div>
            <div className={styles.proofText}>
              <div className={styles.stars}>★★★★★</div>
              <span>Loved by 200+ students worldwide</span>
            </div>
          </div>
        </div>

        <div className={styles.imageWrap}>
          <Image
            src="/eka-portrait.jpeg"
            alt="Eka — English coach"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
            priority
          />
          <div className={styles.imageFade} />
        </div>
      </div>

      <div className={styles.todayWord}>
        <span className={styles.wordLabel}>Today&apos;s word</span>
        <span className={styles.word}>Serendipity</span>
        <span className={styles.wordDef}>
          <em>/ˌserənˈdipədē/</em> — a pleasant surprise
        </span>
      </div>
    </section>
  );
}
