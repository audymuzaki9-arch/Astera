import { useState, useEffect, useCallback } from 'react';
import { getJourneyMedia } from '../../utils/images';
import styles from './Gallery.module.css';

export default function Gallery({ journey }) {
  const [isOpen, setIsOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const media = getJourneyMedia(journey);

  const closeGallery = useCallback(() => {
    setIsOpen(false);
    setLightboxIndex(null);
  }, []);

  const next = useCallback(
    () => setLightboxIndex((i) => (i + 1) % media.length),
    [media.length]
  );
  const prev = useCallback(
    () => setLightboxIndex((i) => (i - 1 + media.length) % media.length),
    [media.length]
  );

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') closeGallery();
      if (lightboxIndex !== null) {
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft') prev();
      }
    };

    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, lightboxIndex, next, prev, closeGallery]);

  if (media.length === 0) return null;

  const active = lightboxIndex !== null ? media[lightboxIndex] : null;

  return (
    <>
      <section className={styles.section}>
        <div className={styles.header}>
          <span className={styles.headerNum}>03</span>
          <div className={styles.headerLine} />
          <h3 className={styles.headerTitle}>Galeri</h3>
        </div>

        <button className={styles.trigger} onClick={() => setIsOpen(true)}>
          <span className={`material-symbols-outlined ${styles.triggerIcon}`}>
            photo_library
          </span>
          Lihat Semua Gambar ({media.length})
        </button>
      </section>

      {isOpen && (
        <div className={styles.modal} onClick={closeGallery}>
          <div
            className={styles.modalInner}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <span className={styles.modalTitle}>{journey.title}</span>
              <button
                className={styles.closeBtn}
                onClick={closeGallery}
                aria-label="Tutup galeri"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className={styles.grid}>
              {media.map((item, i) => (
                <button
                  key={`${item.src}-${i}`}
                  className={styles.gridItem}
                  onClick={() => setLightboxIndex(i)}
                  aria-label={`Perbesar media ${i + 1}`}
                >
                  {item.type === 'video' ? (
                    <>
                      <video
                        src={item.src}
                        className={styles.gridVideo}
                        muted
                        playsInline
                        preload="metadata"
                      />
                      <span
                        className={`material-symbols-outlined ${styles.playIcon}`}
                      >
                        play_circle
                      </span>
                    </>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className={styles.gridImg}
                      loading="lazy"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {lightboxIndex !== null && (
        <div className={styles.lightbox} onClick={() => setLightboxIndex(null)}>
          <button
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Media sebelumnya"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>

          {active.type === 'video' ? (
            <video
              src={active.src}
              className={styles.lightboxVideo}
              controls
              autoPlay
              playsInline
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              src={active.src}
              alt={active.alt}
              className={styles.lightboxImg}
              onClick={(e) => e.stopPropagation()}
            />
          )}

          <button
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Media berikutnya"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>

          <button
            className={styles.lightboxClose}
            onClick={() => setLightboxIndex(null)}
            aria-label="Tutup"
          >
            <span className="material-symbols-outlined">close</span>
          </button>

          <span className={styles.counter}>
            {lightboxIndex + 1} / {media.length}
          </span>
        </div>
      )}
    </>
  );
}
