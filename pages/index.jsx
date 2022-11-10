/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-filename-extension */
// import Filter from '../container/Filter';
import Footer from '../container/Footer';
import Header from '../container/Header';
import Headline from '../container/Headline';
import Hero from '../container/Hero';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Headline />
      <Footer />
    </div>
  );
}
