import { useParams, Link } from 'react-router-dom';
import { journeys } from '../data/journeys';
import DetailNavbar from '../components/DetailNavbar/DetailNavbar';
import DetailHero from '../components/DetailHero/DetailHero';
import StatsBar from '../components/StatsBar/StatsBar';
import Timeline from '../components/Timeline/Timeline';
import StoryContent from '../components/StoryContent/StoryContent';
import PullQuoteSection from '../components/PullQuoteSection/PullQuoteSection';
import Reflection from '../components/Reflection/Reflection';
import DetailFooter from '../components/DetailFooter/DetailFooter';
import styles from './JourneyDetail.module.css';

export default function JourneyDetail() {
  const { slug } = useParams();
  const journey = journeys.find((j) => j.slug === slug);

  if (!journey) {
    return (
      <>
        <DetailNavbar />
        <div className={styles.notFound}>
          <h1>Perjalanan tidak ditemukan</h1>
          <Link to="/journeys">Kembali ke daftar perjalanan</Link>
        </div>
      </>
    );
  }

  return (
    <>
      <DetailNavbar />
      <DetailHero journey={journey} />

      <main className={styles.main}>
        <StatsBar stats={journey.stats} />

        <section className={styles.storyGrid}>
          <Timeline items={journey.timeline} />
          <StoryContent journey={journey} />
        </section>
      </main>

      <PullQuoteSection data={journey.pullQuote} />
      <Reflection data={journey.reflection} />
      <DetailFooter />
    </>
  );
}
