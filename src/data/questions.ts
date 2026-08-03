export interface Question {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
}

export const questions: Question[] = [
  {
    id: 1,
    question: 'How do you greet someone in the morning?',
    options: ['Good evening', 'Good morning', 'Good night', 'Goodbye'],
    correctIndex: 1,
  },
  {
    id: 2,
    question: 'Choose the correct sentence:',
    options: [
      "She don't like coffee",
      "She doesn't likes coffee",
      "She doesn't like coffee",
      'She not like coffee',
    ],
    correctIndex: 2,
  },
  {
    id: 3,
    question: 'Pick the correct past tense:',
    options: ['I goed home', 'I go home', 'I gone home', 'I went home'],
    correctIndex: 3,
  },
  {
    id: 4,
    question: 'If I _____ more time, I would travel.',
    options: ['have', 'had', 'has', 'having'],
    correctIndex: 1,
  },
  {
    id: 5,
    question: "Which word means 'a chance event'?",
    options: ['coincidence', 'serendipity', 'surprise', 'accident'],
    correctIndex: 1,
  },
  {
    id: 6,
    question: 'Choose the most natural phrasing:',
    options: [
      'I look forward to meet you',
      "I'm looking forward to meeting you",
      'I look forward meeting you',
      'I am looking forward meet you',
    ],
    correctIndex: 1,
  },
  {
    id: 7,
    question: "Identify the idiom meaning 'rarely':",
    options: [
      'Every other day',
      'Once in a blue moon',
      'On the dot',
      'In the nick of time',
    ],
    correctIndex: 1,
  },
  {
    id: 8,
    question: 'Best register for a business email opener:',
    options: ['Hey there!', "What's up,", 'Dear Mr. Smith,', 'Yo, Smith,'],
    correctIndex: 2,
  },
];

export interface LevelResult {
  level: string;
  program: string;
  description: string;
}

export function getLevel(score: number): LevelResult {
  if (score <= 2) {
    return {
      level: 'A1 · Beginner',
      program: 'Conversation Foundations',
      description:
        'Start from scratch with confidence-building basics and essential everyday phrases.',
    };
  } else if (score <= 4) {
    return {
      level: 'A2 · Elementary',
      program: 'Everyday English',
      description:
        'Handle everyday situations: shopping, travel, small talk, and simple routines.',
    };
  } else if (score <= 6) {
    return {
      level: 'B1–B2 · Intermediate',
      program: 'Fluency & Confidence',
      description:
        'Express ideas more freely, understand complex texts, and hold real conversations.',
    };
  } else {
    return {
      level: 'C1+ · Advanced',
      program: 'Polish & Mastery',
      description:
        'Refine your style, master nuance, and communicate with professional precision.',
    };
  }
}
