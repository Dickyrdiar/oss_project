// import { Box } from '@chakra-ui/react';
import Styles from '../../styles/Home.module.css';
import Header from '../../container/Header';
import Detai from '../../container/Detail';

function DetailProject() {
  return (
    // <Box>Detail Project</Box>
    <div className={Styles.container}>
      <Header />
      <Detai />
    </div>
  );
}

export default DetailProject;
