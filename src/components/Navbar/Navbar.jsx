import { Link } from 'react-router-dom';
import { useScrollNav } from '../../hooks/useScrollNav';
import styles from './Navbar.module.css';

const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Perjalanan', href: '/journeys' },
  { label: 'Tentang', href: '/about' },
];

export default function Navbar({ transparentAtTop = false }) {
  const scrolled = useScrollNav();
  const isSolid = transparentAtTop ? scrolled : true;

  return (
    <nav className={styles.nav}>
      <div
        className={`${styles.navBackground} ${
          isSolid ? styles.navBackgroundSolid : styles.navBackgroundTransparent
        }`}
      />
      <div
        className={`${styles.navInner} ${isSolid ? styles.navInnerScrolled : ''}`}
      >
        <Link
          to="/"
          className={`${styles.brand} ${isSolid ? styles.brandDark : styles.brandLight}`}
        >
          Astera.
        </Link>

        <div className={styles.desktopLinks}>
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              to={item.href}
              className={`${styles.navLink} ${
                index === 0
                  ? isSolid
                    ? styles.navLinkDarkActive
                    : styles.navLinkLightActive
                  : isSolid
                    ? styles.navLinkDark
                    : styles.navLinkLight
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className={`${styles.mobileMenuBtn} ${isSolid ? styles.mobileMenuBtnDark : ''}`}
          aria-label="Menu"
        >
          <span className={`material-symbols-outlined ${styles.icon}`}>
            menu
          </span>
        </button>
      </div>
    </nav>
  );
}
