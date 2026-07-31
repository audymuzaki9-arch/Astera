import styles from './PullQuoteSection.module.css';

export default function PullQuoteSection({ data }) {
  return (
    <section className={styles.section}>
      <div className={styles.bgPattern} />
      <div className={styles.inner}>
        <div className={styles.imageCol}>
          {data.video ? (
            <video
              src={data.video}
              className={`${styles.image} ${styles.video}`}
              autoPlay
              muted
              loop
              playsInline
              poster={data.image}
            />
          ) : (
            <img className={styles.image} src={data.image} alt={data.label} />
          )}
        </div>
        <div className={styles.textCol}>
          <div className={styles.labelLine}>
            <div className={styles.line} />
            <span className={styles.label}>{data.label}</span>
          </div>
          <h2 className={styles.quote}>{data.quote}</h2>
          <p className={styles.description}>{data.description}</p>
        </div>
      </div>
    </section>
  );
}
