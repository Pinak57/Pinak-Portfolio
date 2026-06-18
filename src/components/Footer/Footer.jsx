import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <a href="/#home" className={styles.logo}>
          <span className={styles.lb}>&lt;</span>Pinak<span className={styles.lb}>/&gt;</span>
        </a>
        <p>Designed &amp; built with ❤️ by <strong>Pinak Datta</strong></p>
        <p className={styles.copy}>© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
}
