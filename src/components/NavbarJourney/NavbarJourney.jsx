import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';
import styles from './NavbarJourney.module.css';

const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Perjalanan', href: '/journeys' },
  { label: 'Tentang', href: '/about' },
];

export default function NavbarJourney() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

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

      <button
        className={styles.mobileMenuBtn}
        onClick={() => setMenuOpen(true)}
        aria-label="Buka menu"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {menuOpen && (
        <MobileMenu
          items={navItems}
          activePath={location.pathname}
          onClose={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}
