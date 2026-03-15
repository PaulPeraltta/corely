'use client';

import { useState } from 'react';
import styles from './Contacto.module.css';

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <section id="contacto" className={styles.section}>
      <div className={styles.layout}>
        {/* Columna izquierda */}
        <div>
          <p className="section-label reveal">Hablemos</p>
          <h2 className="section-title reveal reveal-delay-1">
            Trabajemos<br />juntos
          </h2>
          <p className={`${styles.intro} reveal reveal-delay-2`}>
            Si querés potenciar tu marca y trabajar con un equipo creativo,
            detallista y estratégico, Corely está para vos.
          </p>
          <div className={`${styles.direct} reveal reveal-delay-3`}>
            <a href="mailto:studiocorely@gmail.com" className={styles.link}>
              <div className={styles.linkIcon}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 4h12a1 1 0 011 1v8a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1z" stroke="white" strokeWidth="1.5" />
                  <path d="M2 5l7 5 7-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              studiocorely@gmail.com
            </a>
          </div>
        </div>

        {/* Formulario */}
        <div className="reveal reveal-delay-2">
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                placeholder="Tu nombre completo"
                required
                value={form.nombre}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="tu@email.com"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                placeholder="Contanos sobre tu proyecto y cómo podemos ayudarte..."
                required
                value={form.mensaje}
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className={styles.submit}
              disabled={loading || success}
            >
              <span>
                {loading ? 'Enviando...' : success ? '¡Enviado!' : 'Enviar mensaje'}
              </span>
              {!loading && !success && (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
            {success && (
              <div className={styles.successMsg}>
                ✓ ¡Mensaje enviado! Te contactamos muy pronto.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
