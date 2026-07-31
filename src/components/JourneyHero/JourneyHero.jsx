import styles from './JourneyHero.module.css';

export default function JourneyHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIIos3yZ3hREx6ORj3X_Vna1kBEW_GvBwi3aEn9ai-tiqXr4AWAq3-7KIhnmDY2c2l-h1CSg-hxJunprRTfVC64zkwQyS4HOeyGesnM4hIfaGUA80oIYxV7sWB8x_jUxRglnGy4p4SSDWmzHnHfi0MYz7G7He7AlPnyVLlqQoOuKbVa8x3FYanlxobCEdM4bzMb_wt8oHDSI_sS_05hy9JuDQ72kazoCuQcQ3wbQtg5DjgO6G1V48y"
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
