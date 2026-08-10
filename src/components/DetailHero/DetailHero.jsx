import styles from './DetailHero.module.css';

export default function DetailHero({ journey }) {
  return (
    <header className={styles.hero}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={journey.heroImage}
          alt={journey.title}
          style={
            journey.heroImagePosition
              ? { objectPosition: journey.heroImagePosition }
              : undefined
          }
        />
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.contentInner}>
          <div className={styles.textBlock}>
            <div className={styles.meta}>
              <span className={`material-symbols-outlined ${styles.metaIcon}`}>
                location_on
              </span>
              <span className={styles.metaText}>{journey.location}</span>
              <span className={styles.metaDivider}>|</span>
              <span className={`material-symbols-outlined ${styles.metaIcon}`}>
                calendar_month
              </span>
              <span className={styles.metaText}>{journey.date}</span>
            </div>
            <h1 className={styles.title}>{journey.title}</h1>
            <p className={styles.description}>{journey.description}</p>
          </div>

          <div className={styles.sideStats}>
            <div className={styles.statItem}>
              <div className={styles.statLabel}>
                <span className={`material-symbols-outlined ${styles.statLabelIcon}`}>
                  schedule
                </span>
                <span className={styles.statLabelText}>Durasi</span>
              </div>
              <span className={styles.statValue}>{journey.duration}</span>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statLabel}>
                <span className={`material-symbols-outlined ${styles.statLabelIcon}`}>
                  mood
                </span>
                <span className={styles.statLabelText}>Suasana</span>
              </div>
              <span className={styles.statValue}>{journey.mood}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
