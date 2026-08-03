import styles from './StoryContent.module.css';

export default function StoryContent({ journey }) {
  return (
    <article className={styles.story}>
      {/* Mobile header */}
      <div className={styles.header}>
        <span className={styles.headerNum}>02</span>
        <div className={styles.headerLine} />
        <h3 className={styles.headerTitle}>Cerita</h3>
      </div>

      {/* Opening paragraphs */}
      {journey.storyParagraphs.map((text, i) => (
        <p key={i} className={`${styles.paragraph} ${i === 0 ? styles.firstParagraph : ''}`}
          style={i > 0 ? { marginTop: 24 } : undefined}>
          {text}
        </p>
      ))}

      {/* Story images with captions */}
      {journey.storyImages && journey.storyImages.length > 0 && (
        <div className={styles.imageGallery}>
          {journey.storyImages.map((src, i) => (
            <figure key={i} className={styles.imageWrap}>
              <img
                className={styles.image}
                src={src}
                alt={journey.title}
                style={
                  journey.storyImagePositions?.[i]
                    ? { objectPosition: journey.storyImagePositions[i] }
                    : undefined
                }
              />
              {journey.storyCaptions && journey.storyCaptions[i] && (
                <figcaption className={styles.caption}>
                  {journey.storyCaptions[i]}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}

      {/* Heading */}
      {journey.storyHeading && (
        <h3 className={styles.heading}>{journey.storyHeading}</h3>
      )}

      {/* Paragraphs after heading */}
      {journey.storyParagraphsAfter.map((text, i) => (
        <p key={i} className={styles.paragraph} style={i > 0 ? { marginTop: 24 } : undefined}>
          {text}
        </p>
      ))}

      {/* Asymmetrical aside with quote */}
      <div className={styles.aside}>
        <div className={styles.asideImageCol}>
          <div className={styles.asideBorder} />
          <img className={styles.asideImage} src={journey.asideImage} alt="Detail perjalanan" />
        </div>
        <div className={styles.asideQuoteCol}>
          <span className={`material-symbols-outlined ${styles.quoteIcon}`} data-weight="fill">
            format_quote
          </span>
          <blockquote className={styles.blockquote}>
            {journey.blockQuote}
          </blockquote>
        </div>
      </div>

      {/* Closing paragraph */}
      <p className={styles.paragraph}>{journey.storyEnding}</p>
    </article>
  );
}
