import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';
import styles from './AboutNavbar.module.css';

const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Perjalanan', href: '/journeys' },
  { label: 'Peta Perjalanan', href: '#' },
  { label: 'Tentang', href: '/about' },
];

export default function AboutNavbar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          Astera
        </Link>

        <nav className={styles.links}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`${styles.link} ${
                currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href))
                  ? styles.linkActive
                  : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className={styles.mobileBtn}
          onClick={() => setMenuOpen(true)}
          aria-label="Buka menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

      {menuOpen && (
        <MobileMenu
          items={navItems}
          activePath={currentPath}
          onClose={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
}
