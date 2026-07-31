import styles from './AboutSection.module.css';

export default function AboutSection() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>01</span>
          <div className={styles.sectionLine} />
          <span className={styles.sectionLabel}>Filosofi</span>
        </div>

        <div className={styles.grid}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>
              Mengapa <br />
              <span className={styles.titleItalic}>Astera?</span>
            </h2>

            <div className={styles.body}>
              <p className={styles.dropCap}>
                Kami percaya bahwa perjalanan lebih dari sekadar tempat yang
                Anda kunjungi; melainkan momen tenang refleksi, pemandangan yang
                berubah, dan cerita yang terkumpul di sepanjang jalan.
              </p>
              <p>
                Astera dibangun untuk menjadi pusaka digital&mdash;ruang yang
                tenang dan tidak berantakan, dirancang untuk menyimpan kenangan
                Anda dengan perhatian dan intensionalitas yang sama seperti
                jurnal bersampul linen premium.
              </p>
              <p className={styles.quote}>
                Jauhi utilitas aplikasi modern yang serba cepat. Melambatlah.
                Amati. Ingat.
              </p>
            </div>

            <div className={styles.linkWrapper}>
              <a className={styles.link} href="/about">
                Baca Filosofi Kami
                <span className={`material-symbols-outlined ${styles.linkIcon}`}>
                  arrow_right_alt
                </span>
              </a>
            </div>
          </div>

          <div className={styles.imageContent}>
            <div className={styles.decorBorder} />

            <img
              className={styles.image}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkyjrSm499GemeIAuBEdw1PD4xeNZQAdvCj779uq9Nifglnrlo0qnRCSSrzLhdS1bZNYo1tq6LwcYEmYb7ZvL3Jg7p7k1L21qWMahjOW1G3vI_VGsKAJ54yT2i_uufBfAkUgoqAQhNV0ZsoHmKfykMnU2ngDq7SSoAv2iGISXz2FnZKnXQdEgYGBQeA8LZvnnwBmZ0TEb-vZbXA8oqmRYmdfSlxnJJVGz48D7pYHIiyg8D5mIabJ48"
              alt="Vintage compass resting on an open leather journal alongside faded maps"
            />

            <div className={styles.chip}>
              <span className={`material-symbols-outlined ${styles.chipIcon}`}>
                auto_stories
              </span>
              <span className={styles.chipText}>
                Mendokumentasikan
                <br />
                Cerita
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
