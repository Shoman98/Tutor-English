'use client';

import { useState } from 'react';
import styles from './Interactive.module.css';

const activities = [
  {
    id: 'vocab',
    title: 'Vocabulary Games',
    description:
      'Expand your word bank through engaging, game-like exercises. Learn new words in context — not by memorizing lists.',
    gradient: 'linear-gradient(135deg, #3d1a78, #7c5cfc)',
    emoji: '🎮',
  },
  {
    id: 'pronunciation',
    title: 'Pronunciation Drills',
    description:
      'Sound confident and clear. Practice tricky sounds, word stress, and natural intonation in focused drills.',
    gradient: 'linear-gradient(135deg, #005f73, #0a9396)',
    emoji: '🗣️',
  },
  {
    id: 'grammar',
    title: 'Grammar Practice',
    description:
      'Master the rules without the boredom. Structured exercises that build real understanding, not just test scores.',
    gradient: 'linear-gradient(135deg, #1d3461, #4a6fa5)',
    emoji: '✍️',
  },
  {
    id: 'conversation',
    title: 'Conversation Scenarios',
    description:
      'Practice real-life situations — job interviews, travel, business meetings, social events — with guided roleplay.',
    gradient: 'linear-gradient(135deg, #6d0f35, #c2185b)',
    emoji: '💬',
  },
  {
    id: 'reading',
    title: 'Reading & Comprehension',
    description:
      'Improve your understanding of authentic texts — news articles, short stories, emails, and more.',
    gradient: 'linear-gradient(135deg, #1a3a1a, #2e7d32)',
    emoji: '📖',
  },
];

export default function Interactive() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className={styles.section} id="interactive">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Interactive Learning</span>
          <h2 className={styles.heading}>
            Learning that feels like
            <br />
            <em>living</em>
          </h2>
          <p className={styles.sub}>
            Every session includes activities designed to make English stick — not just
            for the exam, but for life.
          </p>
        </div>

        <div className={styles.bars}>
          {activities.map((a) => (
            <div
              key={a.id}
              className={`${styles.bar} ${open === a.id ? styles.barOpen : ''}`}
              onClick={() => setOpen(open === a.id ? null : a.id)}
              style={open === a.id ? { background: a.gradient } : undefined}
            >
              <div className={styles.barHeader}>
                <div className={styles.barLeft}>
                  <span className={styles.barEmoji}>{a.emoji}</span>
                  <h3 className={styles.barTitle}>{a.title}</h3>
                </div>
                <span className={styles.barChevron}>
                  {open === a.id ? '−' : '+'}
                </span>
              </div>
              {open === a.id && (
                <p className={styles.barDesc}>{a.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
