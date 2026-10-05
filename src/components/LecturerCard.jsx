import React from 'react';

export default function LecturerCard({ lecturer, onOpen }) {
  const photoUrl = lecturer.photo || `https://api.dicebear.com/7.x/personas/svg?seed=${lecturer.id}`;

  return (
    <article className="lecturer-card">
      <div className="lecturer-card__photo">
      <img src={photoUrl} alt={lecturer.name} />
      </div>
      <div className="lecturer-card__body">
        <h3>{lecturer.name}</h3>
        <p className="lecturer-card__meta">{lecturer.education}</p>
        <p className="lecturer-card__meta">
          Стаж: {lecturer.experience} · {lecturer.degree === 'нет' ? 'без учёной степени' : lecturer.degree}
        </p>
        <ul className="lecturer-card__subjects">
          {lecturer.subjects.map((s) => (
            <li key={s.title}>{s.title}</li>
          ))}
        </ul>
        <button className="btn btn--secondary" onClick={() => onOpen(lecturer.id)}>
          Подробнее и тарифы
        </button>
      </div>
    </article>
  );
}
