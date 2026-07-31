import styles from './AboutStory.module.css';

export default function AboutStory() {
  return (
    <section className={styles.section}>
      <div className={styles.decorCircle} />

      <div className={styles.inner}>
        <div className={styles.imageCol}>
          <div className={styles.imageBorder}>
            <img
              className={styles.image}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKyYrn5aXrBVyMIAjY7XCTLKqcBwYCsCm0EgViz8f_CsLdFGhaF4iI4ccQigscUnJnu9ZsM7rwumtVZ1POr7dHqhnx-SPcO1O0upr6zAVWXz7XmX2iEm4PDDFv_wzeYX-QDPDX_oI9a-AUhzdhdMaO1D2Hq_U_L1MpHrflCm4wQbBCUjHlzZdTq4Tp5K6aU74cVo5zn_2_cfUdIxYy4VF30sKow6pPk5M-93H-HOP0wLgXK0pzH3MF"
              alt="Linen-bound travel journal on a wooden table next to a vintage camera"
            />
          </div>
        </div>

        <div className={styles.textCol}>
          <div className={styles.decorCorner} />

          <h2 className={styles.heading}>Awal Mula Astera</h2>

          <div className={styles.body}>
            <p>
              Saya mendapati diri saya menggulir ribuan gambar di ponsel,
              mencoba mengingat perasaan di pagi yang sejuk di Kyoto atau aroma
              hujan di Dataran Tinggi Skotlandia. Foto-fotonya ada, tetapi
              ceritanya hilang.
            </p>
            <p>
              Astera dirancang untuk menjadi penawar dari sifat fana kehidupan
              digital modern. Ini adalah ruang yang tenang dan
              disengaja&mdash;sebuah warisan digital&mdash;di mana Anda dapat
              memadukan fotografi evokatif Anda dengan prosa yang penuh
              pemikiran.
            </p>
            <p className={styles.quote}>
              Kami percaya bahwa meluangkan waktu untuk menuliskan apa yang Anda
              rasakan, bukan hanya apa yang Anda lihat, adalah sebuah tindakan
              pelestarian.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
