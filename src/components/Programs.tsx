import styles from './Programs.module.css';

const programs = [
  {
    level: 'A1 · Beginner',
    name: 'Conversation Foundations',
    description:
      'Build confidence from the ground up with essential vocabulary, basic grammar, and simple everyday conversations.',
    icon: '🌱',
    topics: ['Introductions & greetings', 'Numbers, dates & time', 'Shopping & transport', 'Daily routines'],
  },
  {
    level: 'A2 · Elementary',
    name: 'Everyday English',
    description:
      'Handle real-life situations — travel, work basics, social interactions — with growing ease and confidence.',
    icon: '🌍',
    topics: ['Travel & accommodation', 'Work & office basics', 'Making plans & appointments', 'Describing people & places'],
  },
  {
    level: 'B1–B2 · Intermediate',
    name: 'Fluency & Confidence',
    description:
      'Break through the plateau. Express complex ideas, understand native speakers, and hold real-world conversations.',
    icon: '🚀',
    topics: ['Opinions & debates', 'Professional communication', 'Complex grammar structures', 'Idiomatic expressions'],
    featured: true,
  },
  {
    level: 'C1+ · Advanced',
    name: 'Polish & Mastery',
    description:
      'Refine every nuance of your English — precision, style, and sophistication at the highest professional level.',
    icon: '✦',
    topics: ['Business & academic writing', 'Subtle language & tone', 'Presentations & public speaking', 'Cultural fluency'],
  },
];

export default function Programs() {
  return (
    <section className={styles.section} id="programs">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Programs</span>
          <h2 className={styles.heading}>A program for every level</h2>
          <p className={styles.sub}>
            Not sure where you fit?{' '}
            <a href="/level-test">Take the level test →</a>
          </p>
        </div>

        <div className={styles.grid}>
          {programs.map((p) => (
            <div key={p.name} className={`${styles.card} ${p.featured ? styles.featured : ''}`}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{p.icon}</span>
                <span className={styles.levelBadge}>{p.level}</span>
              </div>
              <h3 className={styles.cardTitle}>{p.name}</h3>
              <p className={styles.cardDesc}>{p.description}</p>
              <ul className={styles.topics}>
                {p.topics.map((t) => (
                  <li key={t}>
                    <span className={styles.dot}>·</span>
                    {t}
                  </li>
                ))}
              </ul>
              <a href="/book" className={styles.cardCta}>
                Book this program →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
