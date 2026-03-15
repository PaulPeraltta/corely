import styles from './Portfolio.module.css';

const proyectos = [
  {
    bg: styles.projBg1,
    tag: 'Branding',
    title: 'Identidad de Marca — Startup Tech',
    desc: 'Desarrollo completo de identidad visual para empresa de tecnología: logo, paleta, tipografía y sistema de marca.',
    svg: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M10 30 L30 10 L50 30 L30 50Z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
        <circle cx="30" cy="30" r="8" fill="rgba(255,255,255,0.2)" />
      </svg>
    ),
  },
  {
    bg: styles.projBg2,
    tag: 'Social Media',
    title: 'Estrategia Social — Retail de Moda',
    desc: 'Gestión mensual de Instagram y TikTok con crecimiento de +180% en seguidores orgánicos en 3 meses.',
    svg: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <circle cx="30" cy="30" r="20" stroke="rgba(153,151,247,0.8)" strokeWidth="1.5" />
        <circle cx="30" cy="30" r="12" stroke="rgba(153,151,247,0.5)" strokeWidth="1" />
        <circle cx="30" cy="30" r="5" fill="rgba(153,151,247,0.6)" />
      </svg>
    ),
  },
  {
    bg: styles.projBg6,
    tag: 'Campaña',
    title: 'Campaña de Lanzamiento — App Fitness',
    desc: 'Concepto creativo, producción de contenido y gestión del lanzamiento con más de 500K impresiones en primera semana.',
    shapeStyle: { background: 'rgba(109,68,251,0.2)', borderColor: 'rgba(109,68,251,0.4)' },
    svg: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <rect x="10" y="10" width="40" height="40" rx="8" stroke="#6D44FB" strokeWidth="1.5" strokeOpacity="0.7" />
        <path d="M20 30h20M30 20v20" stroke="#6D44FB" strokeWidth="1.5" strokeOpacity="0.7" />
      </svg>
    ),
  },
  {
    bg: styles.projBg4,
    tag: 'Identidad Visual',
    title: 'Rebrand — Consultora de RRHH',
    desc: 'Renovación de identidad visual completa para empresa consolidada que necesitaba modernizar su imagen sin perder su esencia.',
    svg: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M15 45L30 15L45 45" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20 35h20" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    bg: styles.projBg5,
    tag: 'Contenido',
    title: 'Contenido Orgánico — Gastronomía',
    desc: 'Estrategia y producción de contenido mensual que posicionó al restaurante como referente gastronómico en redes sociales locales.',
    svg: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <path d="M10 40 C20 20, 40 40, 50 20" stroke="rgba(153,151,247,0.8)" strokeWidth="2" fill="none" />
        <circle cx="10" cy="40" r="3" fill="rgba(153,151,247,0.8)" />
        <circle cx="50" cy="20" r="3" fill="rgba(153,151,247,0.6)" />
      </svg>
    ),
  },
  {
    bg: styles.projBg3,
    tag: 'Branding',
    title: 'Brand Book Completo — Fintech',
    desc: 'Construcción del manual de marca desde cero: valores, voz, estilo visual y guías de uso para todo el equipo interno.',
    shapeStyle: { background: 'rgba(109,68,251,0.15)', borderColor: 'rgba(109,68,251,0.3)' },
    svg: (
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        <rect x="15" y="20" width="30" height="22" rx="4" stroke="#6D44FB" strokeWidth="1.5" strokeOpacity="0.6" />
        <path d="M22 20v-5a8 8 0 0116 0v5" stroke="#6D44FB" strokeWidth="1.5" strokeOpacity="0.5" strokeLinecap="round" />
        <circle cx="30" cy="31" r="3" fill="#6D44FB" fillOpacity="0.4" />
      </svg>
    ),
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.section}>
      <div className={styles.header}>
        <div>
          <p className="section-label reveal">Nuestro trabajo</p>
          <h2 className="section-title reveal reveal-delay-1">
            Proyectos<br />Destacados
          </h2>
        </div>
        <p className={`${styles.intro} reveal reveal-delay-2`}>
          Una selección de trabajos que reflejan nuestra forma de entender la creatividad y la estrategia.
        </p>
      </div>

      <div className={styles.grid}>
        {proyectos.map((p, i) => (
          <div key={i} className={`${styles.card} proyecto-card reveal reveal-delay-${(i % 4) + 1}`}>
            <div className={styles.image}>
              <div className={`${styles.imageInner} ${p.bg}`}>
                <div className={styles.abstract}>
                  <div className={styles.abstractInner}>
                    <div className={styles.shape} style={p.shapeStyle || {}} />
                    <div className={styles.svgWrapper}>{p.svg}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.info}>
              <span className={styles.tag}>{p.tag}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
