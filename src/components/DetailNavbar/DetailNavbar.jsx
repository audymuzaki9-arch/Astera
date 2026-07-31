import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useScrollNav } from '../../hooks/useScrollNav';
import MobileMenu from '../MobileMenu/MobileMenu';
import styles from './DetailNavbar.module.css';

const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Perjalanan', href: '/journeys' },
  { label: 'Tentang', href: '/about' },
];

export default function DetailNavbar() {
  const scrolled = useScrollNav();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={`${styles.inner} ${scrolled ? styles.innerScrolled : ''}`}>
        <Link
          to="/"
          className={`${styles.brand} ${scrolled ? styles.brandDark : ''}`}
        >
          Astera
        </Link>

        <div className={styles.links}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`${styles.link} ${
                item.href === '/journeys'
                  ? scrolled
                    ? styles.linkDarkActive
                    : styles.linkLightActive
                  : scrolled
                    ? styles.linkDark
                    : styles.linkLight
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className={`${styles.mobileBtn} ${scrolled ? styles.mobileBtnDark : ''}`}
          onClick={() => setMenuOpen(true)}
          aria-label="Buka menu"
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>

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
