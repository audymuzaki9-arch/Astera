import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const footerLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Perjalanan', href: '/journeys' },
  { label: 'Tentang', href: '/about' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.decorTop}>
        <span className={`material-symbols-outlined ${styles.decorIcon}`}>
          landscape
        </span>
      </div>

      <div className={styles.brand}>
        <span className={styles.brandName}>Astera.</span>
        <p className={styles.tagline}>
          Galeri tenang untuk pikiran dan foto-foto Anda.
        </p>
      </div>

      <div className={styles.links}>
        {footerLinks.map((item, index) => (
          <Link
            key={item.href}
            to={item.href}
            className={`${styles.link} ${
              index === 0 ? styles.linkActive : styles.linkInactive
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <div className={styles.divider} />

      <p className={styles.copyright}>
        &copy; 2024 Astera. Setiap Perjalanan Layak Dikenang.
      </p>
    </footer>
  );
}
