import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div>
          <p className="site-footer__logo">ЛекторHub</p>
          <p>Платформа для подбора и организации лекций.</p>
        </div>
        <nav className="site-footer__links">
          <button onClick={() => onNavigate('home')}>Главная</button>
          <button onClick={() => onNavigate('about')}>О нас</button>
          <button onClick={() => onNavigate('partners')}>Партнёры</button>
          <button onClick={() => onNavigate('lecturers')}>Лекторы</button>
          <button onClick={() => onNavigate('contacts')}>Контакты</button>
        </nav>
        <p className="site-footer__copy">© {new Date().getFullYear()} ЛекторHub. Все права защищены.</p>
      </div>
    </footer>
  );
}
