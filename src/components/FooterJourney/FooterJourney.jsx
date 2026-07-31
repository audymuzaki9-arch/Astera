import { Link } from 'react-router-dom';
import styles from './FooterJourney.module.css';

const footerLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Perjalanan', href: '/journeys' },
  { label: 'Tentang', href: '/about' },
];

export default function FooterJourney() {
  return (
    <footer className={styles.footer}>
      <h2 className={styles.brand}>Astera</h2>

      <div className={styles.links}>
        {footerLinks.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`${styles.link} ${
              item.href === '/journeys'
                ? styles.linkActive
                : styles.linkInactive
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <p className={styles.copyright}>
        &copy; 2024 Astera. Setiap Perjalanan Pantas untuk Dikenang.
      </p>
    </footer>
  );
}
