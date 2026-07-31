import { Link } from 'react-router-dom';
import styles from './DetailFooter.module.css';

const footerLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Perjalanan', href: '/journeys' },
  { label: 'Tentang', href: '/about' },
];

export default function DetailFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.brand}>Astera</div>
      <div className={styles.dividerLine} />

      <div className={styles.links}>
        {footerLinks.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`${styles.link} ${
              item.href === '/journeys' ? styles.linkActive : styles.linkInactive
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <p className={styles.copyright}>
        &copy; 2024 Astera. Setiap Perjalanan Layak Dikenang.
      </p>
    </footer>
  );
}
