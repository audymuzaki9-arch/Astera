import styles from './SearchFilter.module.css';

export default function SearchFilter() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.searchGroup}>
          <span className={`material-symbols-outlined ${styles.searchIcon}`}>
            search
          </span>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Cari entri, lokasi, atau catatan..."
          />
        </div>

        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Kategori</label>
            <select className={styles.select}>
              <option>Semua Kategori</option>
              <option>Hiking</option>
              <option>Traveling</option>
              <option>Camping</option>
              <option>Road Trip</option>
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Tahun</label>
            <select className={styles.select}>
              <option>Semua Tahun</option>
              <option>2026</option>
              <option>2025</option>
            </select>
          </div>

          <div className={styles.filterGroup}>
            <label className={styles.filterLabel}>Urutkan</label>
            <select className={styles.select}>
              <option>Terbaru</option>
              <option>Terlama</option>
              <option>Nama A-Z</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
