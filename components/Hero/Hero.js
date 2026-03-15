import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bgCircles}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.gridOverlay} />

      <div className={styles.content}>
        <div className={styles.tag}>
          <div className={styles.tagDot} />
          Agencia Creativa
        </div>
        <h1 className={styles.title}>
          core
          <em>ly</em>
        </h1>
        <p className={styles.desc}>
          Una agencia creativa especializada en branding, redes sociales y contenido estratégico. 
          Transformamos ideas en identidades memorables.
        </p>
        <a href="#contacto" className={styles.cta}>
          Trabajemos juntos
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3 9h12M10 4l5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>

      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
