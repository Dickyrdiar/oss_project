/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable array-callback-return */
/* eslint-disable camelcase */
import {
  Container, Flex, Grid, Divider,
} from '@chakra-ui/react';
import Link from 'next/link';
import Product from '../../container/Product';

function ProjectLlist({ data }) {
  console.log('data detail', data);

  return (
    <Container maxW="3xl">
      <Flex
        direction="column"
        justifyContent="flex-start"
        maxW={{ xl: '1200px' }}
        m="0 auto"
        minH="100vh"
      >
        <Grid
          w="full"
          gridGap="5"
          gridTemplateColumns="repeat( auto-fit minmax(300px, 1fr) )"
        >
          <>
            {data && data.map((val) => (
              <>
                <Link href={{
                  pathname: '/DetailProject/',
                  query: { name: val?.name },
                }}
                >
                  <Product startGazzer={val.tags_url} repoName={val.owner.login} title={val?.name} imageSrc={val.owner?.avatar_url} price={val?.description} />
                </Link>
                <Divider />
              </>
            ))}
          </>
        </Grid>
      </Flex>
    </Container>
  );
}

export default ProjectLlist;
