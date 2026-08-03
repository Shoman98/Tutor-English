'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isWeekend,
  isPast,
  startOfDay,
  isToday,
} from 'date-fns';
import { supabase } from '@/lib/supabase';
import styles from './BookingSection.module.css';

const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '12:00',
  '14:00', '15:00', '16:00', '17:00', '18:00',
];

const PROGRAMS = [
  'Conversation Foundations',
  'Everyday English',
  'Fluency & Confidence',
  'Polish & Mastery',
];

const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function MiniCalendar({
  selected,
  onSelect,
}: {
  selected: Date | null;
  onSelect: (d: Date) => void;
}) {
  const [view, setView] = useState(new Date());

  const monthStart = startOfMonth(view);
  const monthEnd = endOfMonth(view);
  const gridStart = startOfWeek(monthStart, { weekStartsOn: 1 });
  const gridEnd = endOfWeek(monthEnd, { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start: gridStart, end: gridEnd });

  const disabled = (d: Date) =>
    isWeekend(d) || isPast(startOfDay(d)) && !isToday(d);

  return (
    <div className={styles.cal}>
      <div className={styles.calNav}>
        <button
          type="button"
          onClick={() => setView(subMonths(view, 1))}
          className={styles.calNavBtn}
        >
          ‹
        </button>
        <span className={styles.calMonth}>{format(view, 'MMMM yyyy')}</span>
        <button
          type="button"
          onClick={() => setView(addMonths(view, 1))}
          className={styles.calNavBtn}
        >
          ›
        </button>
      </div>

      <div className={styles.calGrid}>
        {WEEK_DAYS.map((d) => (
          <div key={d} className={styles.calWeekDay}>
            {d}
          </div>
        ))}

        {days.map((day) => {
          const isOtherMonth = !isSameMonth(day, view);
          const isDisabled = disabled(day);
          const isSelected = selected !== null && isSameDay(day, selected);
          const isTodayDay = isToday(day);

          return (
            <button
              key={day.toISOString()}
              type="button"
              onClick={() => !isDisabled && onSelect(day)}
              disabled={isDisabled}
              className={`${styles.calDay}
                ${isOtherMonth ? styles.calDayOther : ''}
                ${isDisabled ? styles.calDayDisabled : ''}
                ${isSelected ? styles.calDaySelected : ''}
                ${isTodayDay && !isSelected ? styles.calDayToday : ''}
              `}
            >
              {format(day, 'd')}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function BookingSection() {
  const searchParams = useSearchParams();
  const preselectedProgram = searchParams.get('program') ?? '';

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    program: PROGRAMS.includes(preselectedProgram) ? preselectedProgram : PROGRAMS[0],
    notes: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime) {
      setError('Please select a date and time slot.');
      return;
    }
    setError('');
    setSubmitting(true);

    try {
      const { error: dbError } = await supabase.from('bookings').insert({
        name: form.name,
        email: form.email,
        phone: form.phone,
        program: form.program,
        date: format(selectedDate, 'yyyy-MM-dd'),
        time_slot: selectedTime,
        notes: form.notes,
        status: 'pending',
      });

      if (dbError) throw dbError;
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again or reach out on WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>✦</div>
        <h2 className={styles.successTitle}>You&apos;re booked!</h2>
        <p className={styles.successMsg}>
          Thank you, {form.name}. Eka will confirm your session shortly via
          email. Can&apos;t wait to start learning together!
        </p>
        <a
          href="https://wa.me/995599921396?text=Hi+Eka!+I+just+booked+a+session."
          target="_blank"
          rel="noopener noreferrer"
          className={styles.successWa}
        >
          Say hi on WhatsApp →
        </a>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.calCol}>
        <h3 className={styles.colTitle}>Pick a date</h3>
        <p className={styles.calHint}>Weekdays only — weekends are unavailable.</p>

        <MiniCalendar selected={selectedDate} onSelect={handleDateSelect} />

        {selectedDate && (
          <div className={styles.slots}>
            <h4 className={styles.slotsTitle}>
              {format(selectedDate, 'EEEE, MMMM d')}
            </h4>
            <div className={styles.slotsGrid}>
              {TIME_SLOTS.map((t) => (
                <button
                  key={t}
                  type="button"
                  className={`${styles.slot} ${selectedTime === t ? styles.slotActive : ''}`}
                  onClick={() => setSelectedTime(t)}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <form className={styles.formCol} onSubmit={handleSubmit}>
        <h3 className={styles.colTitle}>Your details</h3>

        <div className={styles.field}>
          <label>Full name</label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your name"
            required
          />
        </div>

        <div className={styles.field}>
          <label>Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="your@email.com"
            required
          />
        </div>

        <div className={styles.field}>
          <label>Phone / WhatsApp</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+1 234 567 8900"
            required
          />
        </div>

        <div className={styles.field}>
          <label>Program</label>
          <select
            value={form.program}
            onChange={(e) => setForm({ ...form, program: e.target.value })}
            required
          >
            {PROGRAMS.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <label>Notes (optional)</label>
          <textarea
            value={form.notes}
            onChange={(e) => setForm({ ...form, notes: e.target.value })}
            placeholder="Tell Eka your goals or anything relevant..."
            rows={3}
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.submit} disabled={submitting}>
          {submitting ? 'Booking...' : 'Book session →'}
        </button>
      </form>
    </div>
  );
}
