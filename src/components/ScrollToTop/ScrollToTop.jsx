import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styles from './ScrollToTop.module.css';

export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handler = () => setShow(window.scrollY > 400);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return (
    <button
      className={`${styles.btn} ${show ? styles.show : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <FaArrowUp />
    </button>
  );
}
