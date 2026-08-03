'use client';

import { useState } from 'react';
import Link from 'next/link';
import { questions, getLevel } from '@/data/questions';
import styles from './LevelTest.module.css';

export default function LevelTest() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const [score, setScore] = useState(0);

  const total = questions.length;
  const q = questions[current];
  const progress = (current / total) * 100;

  function handleAnswer(idx: number) {
    if (selected !== null) return;
    setSelected(idx);

    setTimeout(() => {
      const newAnswers = [...answers, idx];
      setAnswers(newAnswers);

      if (current + 1 >= total) {
        const finalScore = newAnswers.filter(
          (a, i) => a === questions[i].correctIndex
        ).length;
        setScore(finalScore);
        setDone(true);
      } else {
        setCurrent((c) => c + 1);
        setSelected(null);
      }
    }, 650);
  }

  function retake() {
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
    setDone(false);
    setScore(0);
  }

  if (done) {
    const result = getLevel(score);
    const programEncoded = encodeURIComponent(result.program);

    return (
      <div className={styles.result}>
        <div className={styles.resultBadge}>
          <span>✦</span>
          Your Level
        </div>
        <h2 className={styles.resultLevel}>{result.level}</h2>
        <p className={styles.resultScore}>
          You got <strong>{score} out of {total}</strong> correct
        </p>
        <div className={styles.resultCard}>
          <span className={styles.resultCardLabel}>Recommended Program</span>
          <span className={styles.resultCardProgram}>{result.program}</span>
          <p className={styles.resultCardDesc}>{result.description}</p>
        </div>
        <div className={styles.resultActions}>
          <Link href={`/book?program=${programEncoded}`} className={styles.resultBook}>
            Book a session →
          </Link>
          <button onClick={retake} className={styles.resultRetake}>
            Retake the test
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.quiz}>
      <div className={styles.progressBar}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>
      <div className={styles.progressLabel}>
        Question {current + 1} of {total}
      </div>

      <h2 className={styles.question}>{q.question}</h2>

      <div className={styles.options}>
        {q.options.map((opt, idx) => {
          let cls = styles.option;
          if (selected !== null) {
            if (idx === q.correctIndex) cls = `${styles.option} ${styles.correct}`;
            else if (idx === selected && idx !== q.correctIndex)
              cls = `${styles.option} ${styles.wrong}`;
          }
          return (
            <button
              key={idx}
              className={cls}
              onClick={() => handleAnswer(idx)}
              disabled={selected !== null}
            >
              <span className={styles.optionLetter}>
                {['A', 'B', 'C', 'D'][idx]}
              </span>
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
