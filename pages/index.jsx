/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-filename-extension */
// import Filter from '../container/Filter';
import Footer from '../container/Footer';
// import Header from '../container/Header';
import Hero from '../container/Hero';
import Project from '../container/Projects';
// import ProjectList from '../container/Projects/projectList';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Header /> */}
      <Hero />
      {/* <Filter /> */}
      <Project />
      {/* <ProjectList /> */}
      <Footer />
    </div>
  );
}
