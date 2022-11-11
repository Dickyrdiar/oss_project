/* eslint-disable import/no-named-as-default */
// import { Box, StylesProvider } from '@chakra-ui/react';
import styles from '../../styles/Home.module.css';
import Header from '../../container/Header';
import Project from '../../container/Projects';
import Footer from '../../container/Footer';
// import TabRepo from '../../container/TabRepo';

function ProjectDisplay() {
  return (
    // <Box>this is project</Box>
    <div className={styles.container}>
      <Header />
      <Project />
      {/* <TabRepo /> */}
      <Footer />
    </div>
  );
}

export default ProjectDisplay;
