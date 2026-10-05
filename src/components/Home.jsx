import React from 'react';
import lecturers from '../data/lecturers.js';

export default function Home({ onNavigate }) {
  const subjectsCount = new Set(
    lecturers.flatMap((l) => l.subjects.map((s) => s.title))
  ).size;

  const stats = [
    { value: `${lecturers.length}`, label: 'преподавателей' },
    { value: `${subjectsCount}+`, label: 'курсов и дисциплин' },
    { value: '2', label: 'партнёра-работодателя' },
    { value: '100%', label: 'онлайн и оффлайн формат' }
  ];

  return (
    <>
      <section className="hero">
        <div className="hero__text">
          <p className="hero__eyebrow">Учебная платформа нового поколения</p>
          <h1>
            Наши лекторы — признанные специалисты в своих областях, готовые
            делиться опытом и&nbsp;знаниями.
          </h1>
          <p className="hero__subtitle">
            Мы соединяем компании, образовательные учреждения и НКО с
            профессиональными лекторами, спикерами и тренерами. Упрощаем
            подбор, бронирование и организацию лекций.
          </p>
          <div className="hero__actions">
            <button className="btn btn--primary" onClick={() => onNavigate('lecturers')}>
              Найти лектора
            </button>
            <button className="btn btn--ghost" onClick={() => onNavigate('about')}>
              Узнать больше
            </button>
          </div>
        </div>
        <div className="hero__media">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=900&q=80"
            alt="Лектор проводит занятие в аудитории"
          />
        </div>
      </section>

      <section className="stats">
        {stats.map((s) => (
          <div className="stats__item" key={s.label}>
            <span className="stats__value">{s.value}</span>
            <span className="stats__label">{s.label}</span>
          </div>
        ))}
      </section>

      <section className="how-it-works">
        <h2>Как это работает</h2>
        <div className="how-it-works__grid">
          <div className="how-it-works__step">
            <span className="how-it-works__num">1</span>
            <h3>Выбираете лектора</h3>
            <p>Смотрите профиль, дисциплины и тарифы каждого преподавателя.</p>
          </div>
          <div className="how-it-works__step">
            <span className="how-it-works__num">2</span>
            <h3>Согласовываете формат</h3>
            <p>Индивидуальные занятия, пакеты или интенсивы — онлайн или оффлайн.</p>
          </div>
          <div className="how-it-works__step">
            <span className="how-it-works__num">3</span>
            <h3>Начинаете обучение</h3>
            <p>Мы берём на себя организацию — вы фокусируетесь на знаниях.</p>
          </div>
        </div>
      </section>
    </>
  );
}
