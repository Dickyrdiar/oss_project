/* eslint-disable import/no-extraneous-dependencies */
import {
  Box,
  VStack,
  // Button,
  // Flex,
  Divider,
  chakra,
  Grid,
  GridItem,
  Container,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';

function Feature({ heading, icon }) {
  return (
    <GridItem>
      <chakra.h3 fontSize="xl" fontWeight="600" textAlign="center">
        {heading}
      </chakra.h3>
      <chakra.p
        style={{
          marginTop: '-60px',
          // marginLeft: '5.5rem',
          padding: '82px',
        }}
      >
        {icon}

      </chakra.p>
    </GridItem>
  );
}

export default function Headline() {
  return (
    <Box as={Container} maxW="4xl" mt={-15} p={4} textAlign="center">
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(1, 1fr)',
          md: 'repeat(1, 1fr)',
        }}
        gap={4}
      >
        <VStack maxW="100%" alignItems="center" spacing="20px">
          <chakra.h2 fontSize="3xl" fontWeight="700">
            Collaboration with
          </chakra.h2>
        </VStack>
      </Grid>
      <Divider mt={12} mb={12} />
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(3, 1fr)',
        }}
        gap={{ base: '8', sm: '12', md: '16' }}
      >
        <Feature
          heading="GitHub"
          // text="Short text describing one of you features/service"
          icon={<Icon icon="akar-icons:github-fill" width="70" height="70" />}

        />
        <Feature
          heading="GitLab"
          icon={<Icon icon="logos:gitlab" width="70" height="70" />}
        />
        <Feature
          heading="BitBucket"
          icon={<Icon icon="logos:bitbucket" width="70" height="70" />}
        />
      </Grid>
    </Box>
  );
}
