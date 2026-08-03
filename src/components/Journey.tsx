import Image from 'next/image';
import Link from 'next/link';
import styles from './Journey.module.css';

const milestones = [
  {
    num: 1,
    title: 'Beginner Forest',
    desc: 'Build the roots: greetings, basics, first conversations.',
  },
  {
    num: 2,
    title: 'Conversation City',
    desc: 'Navigate everyday life with ease and personality.',
  },
  {
    num: 3,
    title: 'Fluency Mountain',
    desc: 'Speak with nuance, opinion, and rhythm.',
  },
  {
    num: 4,
    title: 'Confidence Universe',
    desc: 'Own any room — interview, exam, stage.',
  },
];

export default function Journey() {
  return (
    <section className={styles.section} id="journey">
      <div className={styles.container}>
        <div className={styles.imageWrap}>
          <Image
            src="/journey-map.jpg"
            alt="Your English journey"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className={styles.textBlock}>
          <span className={styles.label}>Your Journey</span>
          <h2 className={styles.heading}>
            From first hello to full
            <br />
            <em>fluency</em>.
          </h2>
          <p className={styles.sub}>
            Every student has a visual roadmap. Unlock milestones, track
            streaks, see how far you&apos;ve come.
          </p>
        </div>

        <div className={styles.milestones}>
          {milestones.map((m) => (
            <div key={m.num} className={styles.card}>
              <div className={styles.num}>{m.num}</div>
              <div className={styles.cardText}>
                <h3 className={styles.cardTitle}>{m.title}</h3>
                <p className={styles.cardDesc}>{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Link href="/level-test" className={styles.ctaBtn}>
            Start your journey →
          </Link>
        </div>
      </div>
    </section>
  );
}
