import styles from "./Servicios.module.css";

const servicios = [
  {
    // num: '01',
    title: "Gestión de Redes Sociales",
    desc: "Administración integral de tus canales sociales con estrategia, consistencia y enfoque en el crecimiento de comunidad.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"
          stroke="#6D44FB"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    // num: '02',
    title: "Diseño de Contenido",
    desc: "Creación de piezas visuales y textuales que reflejan la esencia de tu marca y generan conexión genuina con tu audiencia.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="3"
          stroke="#6D44FB"
          strokeWidth="1.75"
        />
        <path
          d="M8 12h8M8 8h8M8 16h4"
          stroke="#6D44FB"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    // num: '03',
    title: "Estrategia de Redes",
    desc: "Planificación táctica y estratégica orientada a objetivos concretos: engagement, crecimiento, conversión y posicionamiento.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M2 20h20M6 20V10l6-8 6 8v10"
          stroke="#6D44FB"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 20v-5h4v5"
          stroke="#6D44FB"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    // num: '04',
    title: "Identidad Visual",
    desc: "Desarrollo de sistemas visuales coherentes y memorables: paleta, tipografía, iconografía y todo lo que hace reconocible a una marca.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#6D44FB" strokeWidth="1.75" />
        <path
          d="M12 7v5l3 3"
          stroke="#6D44FB"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    // num: '05',
    title: "Branding",
    desc: "Construcción de marca desde los cimientos: posicionamiento, personalidad, tono de comunicación y elementos diferenciadores.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
          stroke="#6D44FB"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    // num: '06',
    title: "Campañas Creativas",
    desc: "Conceptualización y ejecución de campañas con idea fuerza, con creatividad que impacta y resultados que se miden.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
          stroke="#6D44FB"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className={styles.section}>
      <div className={styles.header}>
        <div>
          <p className="section-label reveal">Qué hacemos</p>
          <h2 className="section-title reveal reveal-delay-1">Servicios</h2>
        </div>
        <p className={`${styles.intro} reveal reveal-delay-2`}>
          Soluciones creativas y estratégicas diseñadas para llevar tu marca al
          siguiente nivel.
        </p>
      </div>
      <div className={styles.grid}>
        {servicios.map((s, i) => (
          <div
            key={i}
            className={`${styles.card} servicio-card reveal reveal-delay-${(i % 3) + 1}`}
          >
            {/* <div className={styles.num}>{s.num}</div> */}
            <div className={styles.iconTitle}>
              <div className={styles.icon}>{s.icon}</div>
              <h3>{s.title}</h3>
            </div>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
