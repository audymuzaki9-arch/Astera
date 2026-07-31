import styles from './Reflection.module.css';

export default function Reflection({ data }) {
  return (
    <section className={styles.section}>
      <div className={styles.topLine} />
      <span className={`material-symbols-outlined ${styles.icon}`}>spa</span>
      <h3 className={styles.heading}>Refleksi</h3>
      <p className={styles.text}>{data.text}</p>
      <div className={styles.signature}>{data.signature}</div>
    </section>
  );
}
