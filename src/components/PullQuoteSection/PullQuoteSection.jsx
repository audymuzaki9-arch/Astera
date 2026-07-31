import styles from './PullQuoteSection.module.css';

export default function PullQuoteSection({ data }) {
  return (
    <section className={styles.section}>
      <div className={styles.bgPattern} />
      <div className={styles.inner}>
        <div className={styles.imageCol}>
          <img className={styles.image} src={data.image} alt={data.label} />
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
