'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    q: 'How long is each session?',
    a: 'Sessions are 50 minutes by default. Shorter 30-minute sessions are also available for focused practice or busy schedules.',
  },
  {
    q: 'How many sessions per week do I need?',
    a: 'Most students progress well with 2–3 sessions per week. Even one session a week makes a meaningful difference if you practice in between.',
  },
  {
    q: 'What platform do we use for lessons?',
    a: 'All sessions are held online via Zoom or Google Meet — whatever works best for you. All you need is a device and a quiet space.',
  },
  {
    q: 'Do I need to prepare anything before a session?',
    a: 'No preparation required, especially at the start. Eka comes prepared with a plan based on your level and goals. As you progress, light practice between sessions is encouraged.',
  },
  {
    q: 'What if I need to cancel or reschedule?',
    a: 'Life happens. You can reschedule up to 12 hours before your session at no charge. Just send a quick message on WhatsApp.',
  },
  {
    q: 'How do I know which program is right for me?',
    a: 'Take the free Level Test — it takes about 3 minutes and maps you to the right program instantly. You can also message Eka directly if you want a personal recommendation.',
  },
  {
    q: 'Can I switch programs if my level improves?',
    a: "Absolutely. Eka continuously tracks your progress and will recommend moving up when you're ready. Many students advance multiple levels over a few months.",
  },
  {
    q: 'Is there a trial session?',
    a: 'Yes! Book a first session and come with no commitment. Use it to meet Eka, ask questions, and see if the approach works for you before signing up for a full program.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>FAQ</span>
          <h2 className={styles.heading}>
            Questions?
            <br />
            <em>Answered.</em>
          </h2>
        </div>

        <div className={styles.list}>
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`${styles.item} ${open === i ? styles.itemOpen : ''}`}
            >
              <button
                className={styles.question}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{f.q}</span>
                <span className={styles.chevron}>{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <p className={styles.answer}>{f.a}</p>}
            </div>
          ))}
        </div>

        <div className={styles.still}>
          <p>Still have a question?</p>
          <a
            href="https://wa.me/995599921396"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.stillBtn}
          >
            Ask Eka on WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
