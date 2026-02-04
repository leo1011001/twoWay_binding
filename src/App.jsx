import React from 'react';
import RegistrationForm from './RegistrationForm';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>React Two-Way Binding Демо</h1>
        <p className="subtitle">Фрагменти и Two-Way Binding в действие</p>
      </header>
      
      <main className="app-main">
        <RegistrationForm />
      </main>
      
      <footer className="app-footer">
        <div className="concept-explanation">
          <h3>Какво се демонстрира в този проект?</h3>
          <div className="concepts">
            <div className="concept">
              <h4>📦 Фрагменти (Fragments)</h4>
              <p>Групиране на елементи без добавяне на допълнителен DOM елемент като &lt;div&gt;</p>
            </div>
            <div className="concept">
              <h4>🔄 Two-Way Binding</h4>
              <p>Синхронизация между състоянието и интерфейса в двете посоки</p>
            </div>
            <div className="concept">
              <h4>📝 Форма за регистрация</h4>
              <p>Реално приложение на концепциите с валидация</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;