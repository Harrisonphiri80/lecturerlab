import React, { useMemo, useState } from 'react';
import lecturers from '../data/lecturers.js';
import LecturerCard from './LecturerCard.jsx';
import LecturerModal from './LecturerModal.jsx';

const FILTERS = [
  { key: 'all', label: 'Все' },
  { key: 'male', label: 'Мужчины' },
  { key: 'female', label: 'Женщины' }
];

/**
 * Lecturers — блок "Лекторы" из макета, расширенный фильтром по полу,
 * поиском по имени/дисциплине и модальным окном с полной информацией.
 */
export default function Lecturers({ query, onQueryChange }) {
  const [filter, setFilter] = useState('all');
  const [openId, setOpenId] = useState(null);

  const filtered = useMemo(() => {
    return lecturers.filter((l) => {
      const matchesGender = filter === 'all' || l.gender === filter;
      const q = query.trim().toLowerCase();
      const matchesQuery =
        q === '' ||
        l.name.toLowerCase().includes(q) ||
        l.subjects.some((s) => s.title.toLowerCase().includes(q));
      return matchesGender && matchesQuery;
    });
  }, [filter, query]);

  const activeLecturer = lecturers.find((l) => l.id === openId) || null;

  return (
    <section className="page-section lecturers">
      <h2>Лекторы</h2>
      <p className="page-section__lead">
        Найдите преподавателя по имени или дисциплине — от алгоритмов и
        биохимии до архитектуры и международных отношений.
      </p>

      <div className="lecturers__controls">
        <input
          type="search"
          className="lecturers__search"
          placeholder="Поиск по имени или дисциплине…"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
        <div className="lecturers__filters">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`chip ${filter === f.key ? 'chip--active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="lecturers__empty">По вашему запросу лекторов не найдено.</p>
      ) : (
        <div className="lecturers__grid">
          {filtered.map((l) => (
            <LecturerCard lecturer={l} key={l.id} onOpen={setOpenId} />
          ))}
        </div>
      )}

      {activeLecturer && (
        <LecturerModal lecturer={activeLecturer} onClose={() => setOpenId(null)} />
      )}
    </section>
  );
}
