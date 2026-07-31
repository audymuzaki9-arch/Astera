import { Link } from 'react-router-dom';
import styles from './NavbarJourney.module.css';

const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Perjalanan', href: '/journeys' },
  { label: 'Tentang', href: '/about' },
];

export default function NavbarJourney() {
  return (
    <nav className={styles.nav}>
      <span className={`${styles.sideLabel} ${styles.sideLabelLeft}`}>
        Vol. IV
      </span>

      <Link to="/" className={styles.brand}>
        Astera
      </Link>

      <div className={styles.links}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`${styles.link} ${
              item.href === '/journeys' ? styles.linkActive : ''
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>

      <span className={`${styles.sideLabel} ${styles.sideLabelRight}`}>
        Est. 2024
      </span>

      <button className={styles.mobileMenuBtn} aria-label="Menu">
        <span className="material-symbols-outlined">menu</span>
      </button>
    </nav>
  );
}
