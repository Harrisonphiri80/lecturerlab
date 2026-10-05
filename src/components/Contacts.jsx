import React, { useState } from 'react';

/**
 * Contacts — блок "Контакты", отсутствовавший в исходном макете,
 * но необходимый пользователю сайта для обратной связи с платформой.
 */
export default function Contacts() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // В реальном проекте здесь будет запрос к API платформы.
    setSent(true);
  };

  return (
    <section className="page-section contacts">
      <h2>Контакты</h2>
      <div className="contacts__grid">
        <div className="contacts__info">
          <h3>Свяжитесь с нами</h3>
          <p>По вопросам сотрудничества, подбора лектора или партнёрства:</p>
          <ul>
            <li>Email: hello@lectorhub.ru</li>
            <li>Телефон: +7 (900) 000-00-00</li>
            <li>Адрес: г. Москва, ул. Примерная, д. 1</li>
          </ul>
        </div>

        <form className="contacts__form" onSubmit={handleSubmit}>
          <label>
            Имя
            <input
              type="text"
              required
              value={form.name}
              onChange={handleChange('name')}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              required
              value={form.email}
              onChange={handleChange('email')}
            />
          </label>
          <label>
            Сообщение
            <textarea
              rows={4}
              required
              value={form.message}
              onChange={handleChange('message')}
            />
          </label>
          <button className="btn btn--primary" type="submit">
            Отправить
          </button>
          {sent && <p className="contacts__success">Спасибо! Мы свяжемся с вами в ближайшее время.</p>}
        </form>
      </div>
    </section>
  );
}
