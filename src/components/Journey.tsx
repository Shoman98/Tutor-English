import Link from 'next/link';
import styles from './Journey.module.css';

const steps = [
  {
    title: 'Take the Level Test',
    desc: 'A quick 8-question quiz reveals exactly where you are — no guessing, no wasted time.',
  },
  {
    title: 'Get Your Custom Plan',
    desc: 'Eka designs a program around your level, goals, and schedule. No one-size-fits-all.',
  },
  {
    title: 'Learn Through Conversation',
    desc: 'Real sessions, real communication. You speak from day one — no memorization drills.',
  },
  {
    title: 'Reach Your Goal',
    desc: 'Feel the difference in every conversation — at work, while travelling, or in daily life.',
  },
];

export default function Journey() {
  return (
    <section className={styles.section} id="journey">
      <div className={styles.bg} />
      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Your Journey</span>
          <h2 className={styles.heading}>
            From first word to
            <br />
            <em>full fluency</em>
          </h2>
          <p className={styles.sub}>
            Every great English speaker started exactly where you are now.
            Here&apos;s how the journey looks with Eka.
          </p>
        </div>

        <div className={styles.steps}>
          {steps.map((s, i) => (
            <div key={s.title} className={styles.step}>
              <div className={styles.stepLeft}>
                <div className={styles.stepDot} />
                {i < steps.length - 1 && <div className={styles.stepLine} />}
              </div>
              <div className={styles.stepBody}>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
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
