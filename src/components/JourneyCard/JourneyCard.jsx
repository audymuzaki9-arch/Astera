import { Link } from 'react-router-dom';
import styles from './JourneyCard.module.css';

function ImageOverlay({ variant, slug }) {
  const cls =
    variant === 'featured' ? styles.featuredOverlay
    : variant === 'medium' ? styles.mediumOverlay
    : styles.smallOverlay;

  const btnCls =
    variant === 'featured' ? styles.featuredBtn
    : variant === 'medium' ? styles.mediumBtn
    : styles.smallBtn;

  return (
    <div className={cls}>
      <Link to={`/journey/${slug}`} className={btnCls}>
        Baca Perjalanan
      </Link>
    </div>
  );
}

function ImageWrap({ variant, src, alt, slug }) {
  const wrapCls =
    variant === 'featured' ? styles.featuredImageWrap
    : variant === 'medium' ? styles.mediumImageWrap
    : styles.smallImageWrap;

  const imgCls =
    variant === 'featured' ? styles.featuredImage
    : variant === 'medium' ? styles.mediumImage
    : styles.smallImage;

  return (
    <div className={wrapCls}>
      <div className={styles.imageHoverLayer} />
      <img className={imgCls} src={src} alt={alt} />
      <ImageOverlay variant={variant} slug={slug} />
    </div>
  );
}

export function FeaturedCard({ journey }) {
  return (
    <Link to={`/journey/${journey.slug}`} className={`${styles.card} ${styles.featured}`}>
      <ImageWrap variant="featured" src={journey.image} alt={journey.title} slug={journey.slug} />
      <div className={styles.featuredBody}>
        <div className={styles.featuredMeta}>
          <span className={styles.featuredBadge}>
            <span className={styles.star}>&#11088;</span>
            {journey.rating}
          </span>
          <span className={styles.featuredDate}>
            {journey.location} &mdash; {journey.date}
          </span>
        </div>
        <h2 className={styles.featuredTitle}>{journey.title}</h2>
        <div className={styles.featuredTags}>
          <span className={styles.tag}>{journey.category}</span>
          <span className={styles.tagOutline}>{journey.duration}</span>
        </div>
        <p className={styles.featuredDesc}>{journey.description}</p>
      </div>
    </Link>
  );
}

export function MediumCard({ journey }) {
  return (
    <Link to={`/journey/${journey.slug}`} className={`${styles.card} ${styles.medium}`}>
      <ImageWrap variant="medium" src={journey.image} alt={journey.title} slug={journey.slug} />
      <div>
        <div className={styles.mediumMeta}>
          <span className={styles.mediumLocation}>{journey.location}</span>
          <span className={styles.mediumDate}>{journey.date}</span>
        </div>
        <h2 className={styles.mediumTitle}>{journey.title}</h2>
        <div className={styles.featuredTags}>
          <span className={styles.tag}>{journey.category}</span>
          <span className={styles.tagOutline}>{journey.duration}</span>
        </div>
        <p className={styles.mediumDesc}>{journey.description}</p>
      </div>
    </Link>
  );
}

export function SmallCard({ journey, side }) {
  const cardCls = side === 'right' ? styles.smallRight : styles.smallLeft;

  return (
    <Link to={`/journey/${journey.slug}`} className={`${styles.card} ${cardCls}`}>
      <ImageWrap variant="small" src={journey.image} alt={journey.title} slug={journey.slug} />
      <div className={styles.smallBody}>
        <div className={styles.smallHeader}>
          <h2 className={styles.smallTitle}>{journey.title}</h2>
          <span className={styles.smallLocation}>{journey.location}</span>
        </div>
        <div className={styles.smallMeta}>
          <div className={styles.smallTags}>
            <span className={styles.smallTag}>{journey.category}</span>
            <span className={styles.smallTagOutline}>{journey.date}</span>
          </div>
          <span className={styles.smallDuration}>{journey.duration}</span>
        </div>
        <p className={styles.smallDesc}>{journey.description}</p>
      </div>
    </Link>
  );
}
