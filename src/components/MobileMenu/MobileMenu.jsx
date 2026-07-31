import { Link } from 'react-router-dom';
import styles from './MobileMenu.module.css';

export default function MobileMenu({ items, activePath, onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.header}>
        <Link to="/" className={styles.brand} onClick={onClose}>
          Astera
        </Link>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Tutup menu">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <nav className={styles.menu}>
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`${styles.link} ${
              item.href !== '#' &&
              (activePath === item.href ||
                (item.href !== '/' && activePath.startsWith(item.href)))
                ? styles.linkActive
                : ''
            }`}
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
