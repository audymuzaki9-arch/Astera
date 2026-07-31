import styles from './Timeline.module.css';

export default function Timeline({ items }) {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sticky}>
        <div className={styles.header}>
          <span className={styles.headerNum}>01</span>
          <div className={styles.headerLine} />
          <h3 className={styles.headerTitle}>Alur Perjalanan</h3>
        </div>

        <ul className={styles.list}>
          {items.map((item, i) => (
            <li key={i} className={styles.item}>
              <div className={`${styles.dot} ${item.active ? styles.dotActive : ''}`}>
                <div className={styles.dotInner} />
              </div>
              <p className={`${styles.time} ${item.active ? styles.timeActive : ''}`}>
                {item.day} &middot; {item.time}
              </p>
              <h4 className={`${styles.itemTitle} ${item.active ? styles.itemTitleActive : ''}`}>
                {item.title}
              </h4>
              <p className={styles.itemDesc}>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
