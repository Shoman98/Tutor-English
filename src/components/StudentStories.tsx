import styles from './StudentStories.module.css';

const stories = [
  {
    name: 'Maria L.',
    country: 'Spain 🇪🇸',
    level: 'A2 → B2',
    program: 'Fluency & Confidence',
    quote:
      "I had lessons before but always felt stuck. With Eka, something clicked in the first session. She made me feel comfortable enough to actually speak — and now I can't stop.",
    initials: 'ML',
  },
  {
    name: 'Ahmed K.',
    country: 'UAE 🇦🇪',
    level: 'B1 → C1',
    program: 'Polish & Mastery',
    quote:
      "My job required me to present in English. After three months with Eka, I led a full board presentation in London. The difference in my confidence is night and day.",
    initials: 'AK',
  },
  {
    name: 'Yuki T.',
    country: 'Japan 🇯🇵',
    level: 'A1 → A2',
    program: 'Conversation Foundations',
    quote:
      "I was scared to speak English at all. Eka was so patient and encouraging. Now I have conversations at work without freezing up. I never thought that was possible for me.",
    initials: 'YT',
  },
  {
    name: 'Sofia R.',
    country: 'Brazil 🇧🇷',
    level: 'B2 → C1',
    program: 'Polish & Mastery',
    quote:
      "The sessions are nothing like a typical English class. It feels more like a conversation with a brilliant friend who happens to fix your English along the way.",
    initials: 'SR',
  },
  {
    name: 'Luca M.',
    country: 'Italy 🇮🇹',
    level: 'A2 → B1',
    program: 'Everyday English',
    quote:
      "I moved to London and was struggling daily. Within two months of working with Eka, I felt at home. My colleagues even commented on my progress.",
    initials: 'LM',
  },
  {
    name: 'Priya N.',
    country: 'India 🇮🇳',
    level: 'B2 → C1',
    program: 'Fluency & Confidence',
    quote:
      "Eka tailors every session to exactly what I need. No textbook exercises, just real conversations that push me to think and communicate better every time.",
    initials: 'PN',
  },
];

export default function StudentStories() {
  return (
    <section className={styles.section} id="stories">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Student Stories</span>
          <h2 className={styles.heading}>
            Real students.
            <br />
            <em>Real results.</em>
          </h2>
          <p className={styles.sub}>
            Over 200 students from 30+ countries have transformed their English with Eka.
          </p>
        </div>

        <div className={styles.grid}>
          {stories.map((s) => (
            <div key={s.name} className={styles.card}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.quote}>&ldquo;{s.quote}&rdquo;</p>
              <div className={styles.footer}>
                <div className={styles.avatar}>
                  {s.initials}
                </div>
                <div className={styles.info}>
                  <span className={styles.name}>{s.name}</span>
                  <span className={styles.meta}>
                    {s.country} · {s.level}
                  </span>
                </div>
                <span className={styles.program}>{s.program}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
