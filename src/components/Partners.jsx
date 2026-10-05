import React from 'react';
import partners from '../data/partners.js';

/**
 * PartnerCard — карточка одного партнёра.
 * Свойства (props):
 *  - partner: { id, name, logoText, description }
 */
function PartnerCard({ partner }) {
  return (
    <article className="partner-card">
      <div className="partner-card__logo">{partner.logoText}</div>
      <div className="partner-card__body">
        <h3>{partner.name}</h3>
        <p>{partner.description}</p>
      </div>
    </article>
  );
}

/**
 * Partners — блок "Партнёры" из макета.
 */
export default function Partners() {
  return (
    <section className="page-section partners">
      <h2>Партнёры</h2>
      <p className="page-section__lead">
        Компании, которые доверяют нашей платформе подготовку и развитие
        своих сотрудников.
      </p>
      <div className="partners__grid">
        {partners.map((p) => (
          <PartnerCard partner={p} key={p.id} />
        ))}
      </div>
    </section>
  );
}
