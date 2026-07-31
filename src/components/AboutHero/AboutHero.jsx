import styles from './AboutHero.module.css';

export default function AboutHero() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>
        <span className={styles.labelLine} />
        Catatan Editor
        <span className={styles.labelLine} />
      </p>

      <h1 className={styles.title}>
        Setiap Perjalanan Layak<br />untuk Dikenang.
      </h1>

      <div className={styles.editorialLine} />

      <p className={styles.description}>
        Astera lahir dari sebuah kesadaran sederhana: di era ribuan foto
        digital, kenangan sejati kita terlepas begitu saja, tanpa kurasi dan
        tanpa dokumentasi.
      </p>
    </section>
  );
}
