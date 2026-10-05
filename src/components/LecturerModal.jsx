import React from 'react';


export default function LecturerModal({ lecturer, onClose }) {
  const photoUrl = lecturer.photo || `https://api.dicebear.com/7.x/personas/svg?seed=${lecturer.id}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Закрыть">
          ×
        </button>

        <div className="modal__header">
        <img src={photoUrl} alt={lecturer.name} />
          <div>
            <h2>{lecturer.name}</h2>
            <p>{lecturer.education}</p>
            <p>Стаж: {lecturer.experience}</p>
            <p>
              Учёная степень:{' '}
              {lecturer.degree === 'нет' ? 'нет' : lecturer.degree}
            </p>
          </div>
        </div>

        <div className="modal__subjects">
          <h3>Преподаваемые дисциплины</h3>
          {lecturer.subjects.map((s) => (
            <details className="subject" key={s.title} open={false}>
              <summary>
                <strong>{s.title}</strong> — {s.desc}
              </summary>
              <ul>
                {s.topics.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </details>
          ))}
        </div>

        <div className="modal__tariffs">
          <h3>Тарифы</h3>
          <table>
            <tbody>
              {lecturer.tariffs.map((t) => (
                <tr key={t.name}>
                  <td>{t.name}</td>
                  <td className="modal__price">{t.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button className="btn btn--primary modal__cta">Записаться на занятие</button>
      </div>
    </div>
  );
}
