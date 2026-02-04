import React, { useState } from "react";
import './RegistrationForm.css';

const RegistrationForm = () => {
  // Състояние за полетата на формата
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Състояние за показване на паролата
  const [showPassword, setShowPassword] = useState(false);

  // Two-Way Binding функция за обработка на промени
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Функция за изчистване на всички полета
  const handleClearForm = () => {
    setFormData({
      name: "",
      email: "",
      password: ""
    });
  };

  // Функция за обработка на подаването на формата
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Проста валидация
    if (!formData.name || !formData.email || !formData.password) {
      alert("Моля, попълнете всички полета!");
      return;
    }

    if (formData.password.length < 6) {
      alert("Паролата трябва да бъде поне 6 символа!");
      return;
    }

    // Имитация на изпращане на данни
    alert(`Регистрацията е успешна!\nИме: ${formData.name}\nИмейл: ${formData.email}`);
    
    // Опционално: Изчистване на формата след успешна регистрация
    // handleClearForm();
  };

  // Използваме фрагмент (React.Fragment) за групиране без допълнителен div
  return (
    <>
      {/* Форма за регистрация - използва фрагмент вместо div */}
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2 className="form-title">📝 Форма за регистрация</h2>
        
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            👤 Име:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Въведете вашето име"
            className="form-input"
          />
          <div className="input-hint">
            {formData.name.length > 0 && `Въвели сте: ${formData.name.length} символа`}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            📧 Имейл:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="example@email.com"
            className="form-input"
          />
          <div className="input-hint">
            {formData.email.includes('@') ? '✓ Валиден имейл формат' : 'Въведете валиден имейл'}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            🔒 Парола:
          </label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Поне 6 символа"
              className="form-input password-input"
            />
            <button
              type="button"
              className="show-password-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🙈 Скрий' : '👁 Покажи'}
            </button>
          </div>
          <div className="input-hint">
            {formData.password.length > 0 && (
              <span className={formData.password.length >= 6 ? 'valid' : 'invalid'}>
                Дължина: {formData.password.length} {formData.password.length >= 6 ? '✓' : '✗'}
              </span>
            )}
          </div>
        </div>

        <div className="form-buttons">
          <button type="submit" className="submit-btn">
            📄 Регистрирай се
          </button>
          <button 
            type="button" 
            className="clear-btn"
            onClick={handleClearForm}
          >
            🗑 Изчисти формата
          </button>
        </div>
      </form>

      {/* Показване на въведените данни в реално време - използва фрагмент */}
      <div className="live-preview">
        <h3 className="preview-title">🔍 Въведени данни (Two-Way Binding)</h3>
        
        <div className="preview-grid">
          <div className="preview-card">
            <div className="preview-label">Име:</div>
            <div className="preview-value">
              {formData.name || <span className="empty">Очаква въвеждане...</span>}
            </div>
          </div>
          
          <div className="preview-card">
            <div className="preview-label">Имейл:</div>
            <div className="preview-value">
              {formData.email || <span className="empty">Очаква въвеждане...</span>}
            </div>
          </div>
          
          <div className="preview-card">
            <div className="preview-label">Парола:</div>
            <div className="preview-value">
              {formData.password 
                ? '•'.repeat(Math.min(formData.password.length, 10))
                : <span className="empty">Очаква въвеждане...</span>
              }
            </div>
          </div>
        </div>

        {/* Допълнителна информация за Two-Way Binding */}
        <div className="binding-info">
          <h4>🎯 Как работи Two-Way Binding?</h4>
          <ul>
            <li>
              <strong>От състоянието към интерфейса:</strong> Когато промените стойността в кода (setFormData), 
              input полетата се обновяват автоматично.
            </li>
            <li>
              <strong>От интерфейса към състоянието:</strong> Когато пишете в полетата (onChange), 
              стойността в състоянието се обновява в реално време.
            </li>
            <li>
              <strong>Резултат:</strong> Данните винаги са синхронизирани в двете посоки!
            </li>
          </ul>
        </div>

        {/* Демонстрация на фрагменти */}
        <div className="fragment-demo">
          <h4>🧩 Демонстрация на фрагменти</h4>
          <p>
            Този компонент използва <code>&lt;&gt;...&lt;/&gt;</code> вместо <code>&lt;div&gt;...&lt;/div&gt;</code>
          </p>
          <div className="code-example">
            <pre>{`
return (
  <>  {/* Това е React Fragment */}
    <form>...</form>
    <div className="live-preview">...</div>
  </>
);`}</pre>
          </div>
          <p className="fragment-benefit">
            <strong>Предимство:</strong> Без излишни <code>&lt;div&gt;</code> елементи в DOM дървото!
          </p>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;