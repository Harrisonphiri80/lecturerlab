import React, { useState } from 'react';

const NAV_ITEMS = [
  { key: 'home', label: 'Главная' },
  { key: 'partners', label: 'Партнёры' },
  { key: 'about', label: 'О нас' },
  { key: 'lecturers', label: 'Лекторы' },
  { key: 'contacts', label: 'Контакты' }
];


export default function Header({ activePage, onNavigate, query, onQueryChange }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (key) => {
    onNavigate(key);
    setMenuOpen(false);
  };

  // Поиск в шапке: Enter открывает страницу «Лекторы» с уже применённым запросом
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleClick('lecturers');
  };

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__left">
          <button
            className="site-header__logo"
            onClick={() => handleClick('home')}
            aria-label="На главную"
          >
            <span className="site-header__logo-badge">Л</span>
            ЛекторHub
          </button>

          <form className="site-search" role="search" onSubmit={handleSearchSubmit}>
            <svg
              className="site-search__icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </svg>
            <input
              type="search"
              className="site-search__input"
              placeholder="Найти лектора…"
              aria-label="Поиск лектора"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
            />
          </form>
        </div>

        <nav className={`site-nav ${menuOpen ? 'site-nav--open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              className={`site-nav__link ${activePage === item.key ? 'site-nav__link--active' : ''}`}
              onClick={() => handleClick(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="site-header__burger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Открыть меню"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
