import styles from "./Sobre.module.css";

const valores = [
  {
    icon: "✦",
    title: "Creatividad con propósito",
    desc: "Cada idea tiene un objetivo claro detrás.",
  },
  {
    icon: "◈",
    title: "Detalle y calidad",
    desc: "Cuidamos cada pixel, cada palabra, cada decisión.",
  },
  {
    icon: "◎",
    title: "Involucramiento real",
    desc: "Nos metemos de lleno en el negocio del cliente.",
  },
  {
    icon: "⬡",
    title: "Estrategia + Ejecución",
    desc: "Pensamos y hacemos. Sin dejar nada a medias.",
  },
];

const stats = [
  { n: "+40", label: "Proyectos completados" },
  { n: "100%", label: "Clientes satisfechos" },
  { n: "+15", label: "Marcas rediseñadas" },
  { n: "3x", label: "Crecimiento promedio" },
];

export default function Sobre() {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.layout}>
        {/* Columna texto */}
        <div className={styles.text}>
          <div>
            <p className="section-label reveal">Quiénes somos</p>
            <h2 className="section-title reveal reveal-delay-1">
              Una agencia que
              <br />
              se involucra de verdad
            </h2>
            <p className="reveal reveal-delay-2">
              Corely nació con la convicción de que el marketing y el diseño
              bien hechos transforman negocios. No somos una agencia más: somos
              un equipo creativo y estratégico que se involucra profundamente en
              cada proyecto.
            </p>
            <p className="reveal reveal-delay-3">
              Trabajamos con marcas que quieren crecer de forma inteligente, con
              identidad propia y comunicación coherente. Aportamos ideas cuando
              es necesario y respetamos la esencia de cada cliente cuando ya
              tienen un camino definido.
            </p>

            <div className={`${styles.visionBlock} reveal reveal-delay-3`}>
              <h3>Nuestra visión</h3>
              <p>
                Ser el equipo creativo que toda marca desea tener: comprometido,
                talentoso y genuinamente interesado en el éxito del negocio del
                cliente.
              </p>
            </div>
          </div>
        </div>

        <ul className={`${styles.valoresList} ${styles.visual} valores-list`}>
          {valores.map((v, i) => (
            <li key={i} className={`reveal reveal-delay-${i + 1}`}>
              <div className={styles.valorIcon}>{v.icon}</div>
              <div className={styles.valorText}>
                <strong>{v.title}</strong>
                <span>{v.desc}</span>
              </div>
            </li>
          ))}
        </ul>
        {/* Columna visual */}
        {/* <div className={`${styles.visual} reveal reveal-delay-2`}>
          <div className={styles.card}>
            <div className={styles.cardNum}>03</div>
            <div className={styles.cardStat}>años construyendo marcas</div>
            <p className={styles.cardDesc}>
              Desde branding hasta campañas digitales, acompañamos a nuestros
              clientes en cada etapa de su crecimiento.
            </p>
            <div className={styles.statsGrid}>
              {stats.map((s, i) => (
                <div key={i} className={styles.statItem}>
                  <div className={styles.statNum}>{s.n}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
            <div className={styles.abstract}>
              <div className={styles.abstractInner}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <svg
                width="100%"
                height="200"
                viewBox="0 0 300 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.abstractSvg}
              >
                <circle cx="150" cy="100" r="70" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
                <circle cx="150" cy="100" r="45" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                <circle cx="150" cy="100" r="20" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                <line x1="80" y1="100" x2="220" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <line x1="150" y1="30" x2="150" y2="170" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                <line x1="100" y1="50" x2="200" y2="150" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <line x1="200" y1="50" x2="100" y2="150" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <circle cx="150" cy="30" r="4" fill="rgba(153,151,247,0.8)" />
                <circle cx="220" cy="100" r="4" fill="rgba(153,151,247,0.6)" />
                <circle cx="150" cy="170" r="4" fill="rgba(153,151,247,0.4)" />
                <circle cx="80" cy="100" r="4" fill="rgba(153,151,247,0.5)" />
              </svg>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
