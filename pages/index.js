/* eslint-disable react/jsx-filename-extension */
import Header from '../container/Header';
import Hero from '../container/Hero';
import Project from '../container/Projects';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Project />
    </div>
  );
}
