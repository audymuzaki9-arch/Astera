import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileMenu.module.css';

export default function MobileMenu({ items, activePath, onClose }) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, [onClose]);

  return (
    <nav className={styles.dropdown} ref={ref}>
      <div className={styles.header}>
        <span className={styles.brand}>Menu</span>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Tutup menu">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.href}>
            <Link
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
          </li>
        ))}
      </ul>
    </nav>
  );
}
