import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import styles from './Skills.module.css';

const frontend = [
  { name: 'HTML5',            pct: 92 },
  { name: 'CSS3 / Tailwind',  pct: 88 },
  { name: 'JavaScript ES6+',  pct: 83 },
  { name: 'React.js',         pct: 80 },
];
const backend = [
  { name: 'Node.js',    pct: 72 },
  { name: 'Express.js', pct: 70 },
  { name: 'MongoDB',    pct: 68 },
  { name: 'REST API',   pct: 75 },
  { name: 'Firebase',   pct: 78 },
  { name: 'JWT Auth',   pct: 72 },
];
const tools = [
  'Git','GitHub','Vercel','Netlify','Figma','Vite',
  'npm / yarn','React Router','Framer Motion','Axios',
  'React Hook Form','Recharts','Stripe','SweetAlert2',
];

function BarGroup({ items, inView }) {
  return (
    <div className={styles.bars}>
      {items.map(({ name, pct }) => (
        <div className={styles.barRow} key={name}>
          <div className={styles.barHd}>
            <span>{name}</span><span>{pct}%</span>
          </div>
          <div className={styles.track}>
            <div
              className={styles.fill}
              style={{ width: inView ? `${pct}%` : '0%' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const rv = { hidden:{opacity:0,y:24}, show:(i)=>({opacity:1,y:0,transition:{duration:.55,delay:i*.1,ease:'easeOut'}}) };

  return (
    <section className={`section ${styles.skills}`} id="skills" ref={ref}>
      <div className="container">
        <div className="sec-hdr">
          <span className="sec-tag">02 / Skills</span>
          <h2 className="sec-title">My Tech Stack</h2>
        </div>

        <div className={styles.grid}>
          {/* Frontend */}
          <motion.div className={styles.box} variants={rv} custom={0} initial="hidden" animate={inView?'show':'hidden'}>
            <h3 className={styles.boxTitle}>🎨 Frontend</h3>
            <BarGroup items={frontend} inView={inView} />
          </motion.div>

          {/* Backend */}
          <motion.div className={styles.box} variants={rv} custom={1} initial="hidden" animate={inView?'show':'hidden'}>
            <h3 className={styles.boxTitle}>⚙️ Backend</h3>
            <BarGroup items={backend} inView={inView} />
          </motion.div>

          {/* Tools */}
          <motion.div className={`${styles.box} ${styles.wide}`} variants={rv} custom={2} initial="hidden" animate={inView?'show':'hidden'}>
            <h3 className={styles.boxTitle}>🛠️ Tools &amp; Libraries</h3>
            <div className={styles.chips}>
              {tools.map(t => (
                <span className={styles.chip} key={t}>{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
