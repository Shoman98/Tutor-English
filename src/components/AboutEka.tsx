import Image from 'next/image';
import styles from './AboutEka.module.css';

export default function AboutEka() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.imageWrap}>
            <Image
              src="/eka-portrait.jpeg"
              alt="Eka — English coach"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
          <div className={styles.stat}>
            <span className={styles.statNum}>200+</span>
            <span className={styles.statLabel}>Students taught</span>
          </div>
          <div className={styles.stat2}>
            <span className={styles.statNum}>5+</span>
            <span className={styles.statLabel}>Years teaching</span>
          </div>
        </div>

        <div className={styles.textCol}>
          <span className={styles.label}>About Eka</span>
          <h2 className={styles.heading}>
            Lessons built on real
            <br />
            <em>connection</em>
          </h2>
          <p className={styles.body}>
            Hi, I&apos;m Eka — a certified English coach passionate about making
            language learning feel natural, not stressful.
          </p>
          <p className={styles.body}>
            I believe the best way to learn English is to actually <em>use</em> it.
            My sessions are conversation-first, built around your real goals — whether
            you&apos;re preparing for interviews, planning to travel, or simply wanting
            to express yourself with confidence.
          </p>
          <p className={styles.body}>
            Every student learns differently. That&apos;s why I design every lesson
            around <em>you</em> — your level, your pace, and what actually interests you.
          </p>

          <div className={styles.highlights}>
            {[
              { icon: '🎓', text: 'CELTA certified English teacher' },
              { icon: '🌍', text: 'Students from 30+ countries' },
              { icon: '💬', text: 'Conversation-first approach' },
              { icon: '📱', text: 'Flexible online sessions' },
            ].map((h) => (
              <div key={h.text} className={styles.highlight}>
                <span>{h.icon}</span>
                <span>{h.text}</span>
              </div>
            ))}
          </div>

          <a href="/book" className={styles.cta}>
            Book a session with Eka →
          </a>
        </div>
      </div>
    </section>
  );
}
