import NavbarJourney from '../components/NavbarJourney/NavbarJourney';
import JourneyHero from '../components/JourneyHero/JourneyHero';
import SearchFilter from '../components/SearchFilter/SearchFilter';
import {
  FeaturedCard,
  MediumCard,
  SmallCard,
} from '../components/JourneyCard/JourneyCard';
import FooterJourney from '../components/FooterJourney/FooterJourney';
import { journeys } from '../data/journeys';
import styles from './Journeys.module.css';

export default function Journeys() {
  const featured = journeys.find((j) => j.featured);
  const medium = journeys.filter(
    (j) => !j.featured && j.category !== 'Traveling'
  );
  const small = journeys.filter((j) => j.category === 'Traveling');

  return (
    <>
      <NavbarJourney />
      <JourneyHero />

      <main className={styles.main}>
        <SearchFilter />

        <section className={styles.grid}>
          {featured && <FeaturedCard journey={featured} />}

          {medium.map((j, i) => (
            <MediumCard key={j.slug} journey={j} offset={i % 2 === 1} />
          ))}

          {small.map((j, i) => (
            <SmallCard
              key={j.slug}
              journey={j}
              side={i % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </section>

        <div className={styles.loadmore}>
          <button className={styles.loadmoreBtn}>
            Muat Lebih Banyak Arsip
          </button>
        </div>
      </main>

      <FooterJourney />
    </>
  );
}
