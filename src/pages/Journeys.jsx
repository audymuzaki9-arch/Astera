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

          {medium[0] && <MediumCard journey={medium[0]} />}
          {medium[1] && <MediumCard journey={medium[1]} offset />}

          {small[0] && <SmallCard journey={small[0]} side="left" />}
          {small[1] && <SmallCard journey={small[1]} side="right" />}
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
