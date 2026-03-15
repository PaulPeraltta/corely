import styles from './Proceso.module.css';

const pasos = [
  { num: '01', title: 'Escucha y diagnóstico', desc: 'Nos sentamos con el cliente a entender su negocio, sus objetivos, su audiencia y sus desafíos. Primero escuchamos, después proponemos.' },
  { num: '02', title: 'Estrategia y planificación', desc: 'Definimos el enfoque, los canales y las acciones a implementar. Todo tiene un porqué claro, alineado con los objetivos del negocio.' },
  { num: '03', title: 'Creación y producción', desc: 'Desarrollamos las piezas, los contenidos y los materiales con la más alta calidad creativa. Cada detalle cuenta y se cuida al máximo.' },
  { num: '04', title: 'Revisión conjunta', desc: 'Compartimos el trabajo con el cliente antes de publicar o lanzar. La retroalimentación es parte del proceso, no un obstáculo.' },
  { num: '05', title: 'Implementación', desc: 'Ponemos en marcha lo planificado con precisión, cuidando los tiempos, los formatos y la coherencia en cada punto de contacto.' },
  { num: '06', title: 'Seguimiento y optimización', desc: 'Medimos, analizamos y ajustamos. El trabajo no termina con la entrega: seguimos mejorando con base en los resultados reales.' },
];

export default function Proceso() {
  return (
    <section id="proceso" className={styles.section}>
      <p className="section-label reveal">Cómo trabajamos</p>
      <h2 className="section-title reveal reveal-delay-1">
        Nuestro proceso
      </h2>
      <div className={styles.grid}>
        {pasos.map((p, i) => (
          <div key={i} className={`${styles.paso} reveal reveal-delay-${(i % 4) + 1}`}>
            <div className={styles.num}>{p.num}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
