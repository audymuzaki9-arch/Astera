import styles from './JourneyHero.module.css';
import bgSemua from '../../assets/images/bg-semua.jpg';

export default function JourneyHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={bgSemua}
          alt="Mountain landscape hero"
        />
        <div className={styles.overlay} />
        <div className={styles.gradient} />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>Semua Perjalanan</h1>
        <p className={styles.description}>
          Setiap perjalanan memiliki cerita, tantangan, dan kenangan yang
          berbeda. Jelajahi setiap langkah yang pernah saya abadikan.
        </p>
      </div>
    </section>
  );
}
