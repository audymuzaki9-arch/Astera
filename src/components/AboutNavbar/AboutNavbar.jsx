import { Link, useLocation } from 'react-router-dom';
import styles from './AboutNavbar.module.css';

const activePaths = { '/': 'Beranda', '/journeys': 'Perjalanan', '/about': 'Tentang' };

const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Perjalanan', href: '/journeys' },
  { label: 'Peta Perjalanan', href: '#' },
  { label: 'Tentang', href: '/about' },
];

export default function AboutNavbar() {
  const location = useLocation();
  const currentPath = location.pathname;

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

        <button className={styles.mobileBtn} aria-label="Menu">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
}
