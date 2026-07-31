import styles from './ValuesSection.module.css';

const values = [
  {
    icon: 'edit_document',
    title: 'Kesengajaan',
    description:
      'Melambat untuk mendokumentasikan. Beralih dari menggulir tanpa berpikir ke refleksi yang sadar.',
  },
  {
    icon: 'photo_library',
    title: 'Kurasi',
    description:
      'Memilih sedikit gambar yang benar-benar penting, membingkainya sebagai seni, bukan sekadar data.',
  },
  {
    icon: 'public',
    title: 'Keabadian',
    description:
      'Membangun catatan perjalanan Anda yang bertahan lama, sebuah warisan digital yang akan dihargai seiring berjalannya waktu.',
  },
];

export default function ValuesSection() {
  return (
    <section className={styles.section}>
      <p className={styles.label}>Prinsip Kami</p>

      <div className={styles.grid}>
        <div className={styles.topLine} />

        {values.map((v) => (
          <div key={v.title} className={styles.item}>
            <span className={`material-symbols-outlined ${styles.icon}`}>
              {v.icon}
            </span>
            <h3 className={styles.itemTitle}>{v.title}</h3>
            <p className={styles.itemDesc}>{v.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
