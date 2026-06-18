import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import projects from '../../data/projects';
import styles from './Projects.module.css';

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section className={`section ${styles.sec}`} id="projects" ref={ref}>
      <div className="container">
        <div className="sec-hdr">
          <span className="sec-tag">04 / Projects</span>
          <h2 className="sec-title">Featured Work</h2>
          <p className="sec-sub">Things I've built that I'm proud of</p>
        </div>

        <div className={styles.grid}>
          {projects.map((p, i) => (
            <motion.div
              className={`${styles.card} ${i === 0 ? styles.featured : ''}`}
              key={p.id}
              initial={{ opacity:0, y:32 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ duration:.6, delay: i*.12, ease:'easeOut' }}
            >
              {/* Image */}
              <div className={styles.imgWrap}>
                <img src={p.image} alt={p.title} onError={e => e.target.src = `https://placehold.co/700x400/6366F1/ffffff?text=${encodeURIComponent(p.title)}`} />
                <div className={styles.overlay}>
                  <a href={p.live} target="_blank" rel="noreferrer" className="btn btn-primary btn-sm">
                    <FaExternalLinkAlt /> Live
                  </a>
                  <Link to={`/project/${p.id}`} className="btn btn-outline btn-sm">
                    <FaInfoCircle /> Details
                  </Link>
                </div>
              </div>

              {/* Body */}
              <div className={styles.body}>
                <div className={styles.chips}>
                  {p.chips.map(c => <span className="pchip" key={c}>{c}</span>)}
                </div>
                <h3>{p.title}</h3>
                <p>{p.short}</p>
                <div className={styles.links}>
                  <Link to={`/project/${p.id}`} className="btn btn-primary btn-sm">
                    <FaInfoCircle /> View More
                  </Link>
                  <a href={p.github} target="_blank" rel="noreferrer" className="btn btn-outline btn-sm">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
