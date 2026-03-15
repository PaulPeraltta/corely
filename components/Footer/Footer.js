import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        Core<span>ly</span>
      </div>
      <p className={styles.copy}>© 2025 Corely. Todos los derechos reservados.</p>
      <ul className={styles.nav}>
        <li><a href="#sobre">Nosotros</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </footer>
  );
}
