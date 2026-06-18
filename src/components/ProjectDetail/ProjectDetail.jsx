import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaCheck, FaExclamationTriangle, FaRocket, FaAlignLeft } from 'react-icons/fa';
import projects from '../../data/projects';
import styles from './ProjectDetail.module.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const p = projects.find(x => x.id === Number(id));

  if (!p) return (
    <div className={styles.notFound}>
      <h2>Project not found</h2>
      <Link to="/" className="btn btn-primary" style={{marginTop:'1rem'}}>← Go Home</Link>
    </div>
  );

  return (
    <div className={styles.page}>
      {/* Top hero */}
      <div className={styles.top}>
        <div className="container">
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.55}}>
            <Link to="/#projects" className={styles.back}><FaArrowLeft /> Back to Projects</Link>
            <h1>{p.title}</h1>
            <p className={styles.sub}>{p.subtitle}</p>
            <div className={styles.chips}>
              {p.chips.map(c => <span className="pchip" key={c}>{c}</span>)}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Body */}
      <div className={styles.body}>
        <div className="container">
          <motion.img
            src={p.image} alt={p.title} className={styles.img}
            initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6,delay:.1}}
            onError={e => e.target.src=`https://placehold.co/1100x500/6366F1/ffffff?text=${encodeURIComponent(p.title)}`}
          />

          <div className={styles.layout}>
            {/* Main */}
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.6,delay:.2}}>

              <div className={styles.dsec}>
                <h2><FaAlignLeft /> About This Project</h2>
                {p.description.split('\n\n').map((para, i) => <p key={i}>{para.trim()}</p>)}
              </div>

              <div className={styles.dsec}>
                <h2><FaExclamationTriangle /> Challenges Faced</h2>
                <ul>{p.challenges.map((c,i) => <li key={i}>{c}</li>)}</ul>
              </div>

              <div className={styles.dsec}>
                <h2><FaRocket /> Future Improvements</h2>
                <ul>{p.improvements.map((im,i) => <li key={i}>{im}</li>)}</ul>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div className={styles.sidebar}
              initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{duration:.6,delay:.25}}>
              <div className={styles.sCard}>
                <h3>🔗 Project Links</h3>
                <a href={p.live} target="_blank" rel="noreferrer" className={styles.sLink}>
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a href={p.github} target="_blank" rel="noreferrer" className={styles.sLink}>
                  <FaGithub /> GitHub (Client)
                </a>

                <h3 style={{marginTop:'1.5rem'}}>⚙️ Tech Stack</h3>
                {p.stack.map((s,i) => (
                  <div className={styles.sItem} key={i}>
                    <FaCheck className={styles.chk} /> {s}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
