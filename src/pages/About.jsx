import AboutNavbar from '../components/AboutNavbar/AboutNavbar';
import AboutHero from '../components/AboutHero/AboutHero';
import AboutStory from '../components/AboutStory/AboutStory';
import ValuesSection from '../components/ValuesSection/ValuesSection';
import AboutFooter from '../components/AboutFooter/AboutFooter';
import styles from './About.module.css';

export default function About() {
  return (
    <>
      <div className={styles.bgOrnament} />
      <AboutNavbar />

      <main className={styles.main}>
        <AboutHero />
        <AboutStory />
        <ValuesSection />
      </main>

      <AboutFooter />
    </>
  );
}
