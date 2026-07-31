import styles from './StatsBar.module.css';

const icons = ['route', 'landscape', 'ac_unit', 'group'];

export default function StatsBar({ stats }) {
  const items = [
    { label: 'Total Jarak', value: stats.distance },
    { label: 'Kenaikan Elevasi', value: stats.elevation },
    { label: 'Cuaca', value: stats.weather },
    { label: 'Teman', value: stats.companions },
  ];

  return (
    <section className={styles.bar}>
      <div className={styles.inner}>
        {items.map((item, i) => (
          <div key={item.label} className={styles.item}>
            <div className={styles.iconWrap}>
              <span className={`material-symbols-outlined ${styles.icon}`}>
                {icons[i]}
              </span>
            </div>
            <div>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.value}>{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
