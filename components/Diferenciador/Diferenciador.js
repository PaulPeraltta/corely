import styles from './Diferenciador.module.css';

const resultados = [
  { icon: '📈', title: 'Mayor visibilidad de marca', desc: 'Presencia consistente y coherente en todos los canales donde está tu audiencia.' },
  { icon: '🎯', title: 'Comunicación más clara', desc: 'Mensajes que conectan, que se entienden y que inspiran acción.' },
  { icon: '✨', title: 'Identidad visual sólida', desc: 'Una marca que se ve profesional, coherente y memorable en cada punto de contacto.' },
  { icon: '💡', title: 'Contenido que genera valor', desc: 'Piezas que educan, entretienen o inspiran, y que construyen comunidad alrededor de tu marca.' },
  { icon: '🤝', title: 'Confianza y credibilidad', desc: 'Una marca en la que la gente confía, porque se ve seria, profesional y auténtica.' },
  { icon: '🚀', title: 'Crecimiento sostenido', desc: 'Resultados que se construyen con el tiempo, con estrategia y con consistencia.' },
];

export default function Diferenciador() {
  return (
    <section id="diferenciador" className={styles.section}>
      <div className={styles.layout}>
        <div className={styles.left}>
          <p className="section-label reveal">Por qué elegirnos</p>
          <h2 className="section-title reveal reveal-delay-1">Lo que nos hace diferentes</h2>
          <blockquote className={`${styles.quote} reveal reveal-delay-2`}>
            Somos detallistas y creativos, nos involucramos en el negocio del cliente y aportamos ideas
            cuando es posible, respetando su identidad cuando ya tienen un camino definido. Todo lo que
            hacemos se centra en calidad por encima de todo.
          </blockquote>
          <p className={`${styles.body} reveal reveal-delay-3`}>
            No somos una agencia más. Somos un equipo que se involucra de verdad, que escucha antes de
            hablar y que entiende que cada marca tiene su propia voz y su propio camino.
          </p>
        </div>

        <div className={styles.right}>
          <p className={`section-label reveal`} style={{ marginBottom: '1.5rem' }}>Resultados que generamos</p>
          <div className={styles.resultadosGrid}>
            {resultados.map((r, i) => (
              <div key={i} className={`${styles.resultadoItem} resultado-item reveal reveal-delay-${(i % 4) + 1}`}>
                <div className={styles.resultadoIcon}>{r.icon}</div>
                <div className={styles.resultadoText}>
                  <strong>{r.title}</strong>
                  {r.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
