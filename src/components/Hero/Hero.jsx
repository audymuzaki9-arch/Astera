import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import bgBeranda from '../../assets/images/bg-beranda.jpg';

export default function Hero() {
  return (
    <header
      className={styles.hero}
      style={{
        backgroundImage: `url(${bgBeranda})`,
      }}
    >
      <div className={styles.overlay} />

      <div className={styles.content}>
        <div className={styles.location}>
          <span className={`material-symbols-outlined ${styles.locationIcon}`}>
            location_on
          </span>
          <span className={styles.locationText}>Pegunungan Bromo Tengger Semeru</span>
        </div>

        <h1 className={styles.headline}>
          Setiap Perjalanan
          <br />
          <span className={styles.headlineItalic}>Layak</span> Dikenang.
        </h1>

        <p className={styles.description}>
          Astera adalah galeri tenang untuk cerita dan kenangan Anda. Tempat
          untuk mendokumentasikan esensi perjalanan Anda, bukan sekadar tujuan.
        </p>

        <div className={styles.cta}>
          <Link to="/journeys" className={styles.ctaButton}>
            Jelajahi Perjalanan
            <span className={`material-symbols-outlined ${styles.ctaIcon}`}>
              arrow_right_alt
            </span>
          </Link>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLabel}>Gulir</span>
        <div className={styles.scrollLine}>
          <div className={styles.scrollDot} />
        </div>
      </div>
    </header>
  );
}
