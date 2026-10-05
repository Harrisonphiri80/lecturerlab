import React from 'react';
import partners from '../data/partners.js';

function PartnerCard({ partner }) {
  return (
    <article className="partner-card">
      <div className="partner-card__top">
        <div className="partner-card__logo">
          {partner.logo ? (
            <img src={partner.logo} alt={partner.name} />
          ) : (
            partner.logoText
          )}
        </div>
        {partner.url && (
          <a
            className="partner-card__arrow"
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Перейти на сайт ${partner.name}`}
          >
            <svg
              viewBox="0 0 24 24"
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M8 7h9v9" />
            </svg>
          </a>
        )}
      </div>
      <div className="partner-card__body">
        <p>{partner.description}</p>
      </div>
    </article>
  );
}

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