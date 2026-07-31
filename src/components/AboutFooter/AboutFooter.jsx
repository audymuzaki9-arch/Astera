import { Link } from 'react-router-dom';
import styles from './AboutFooter.module.css';

const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Perjalanan', href: '/journeys' },
  { label: 'Tentang', href: '/about' },
];

export default function AboutFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>Astera</div>

        <nav className={styles.links}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`${styles.link} ${
                item.href === '/about' ? styles.linkActive : styles.linkInactive
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className={styles.copyright}>
          &copy; 2024 Astera. Setiap Perjalanan Layak untuk Dikenang.
        </p>

        <div className={styles.ornament}>
          <span className={styles.ornamentLine} />
          <span className={styles.ornamentNumber}>&mdash; 04 &mdash;</span>
          <span className={styles.ornamentLine} />
        </div>
      </div>
    </footer>
  );
}
