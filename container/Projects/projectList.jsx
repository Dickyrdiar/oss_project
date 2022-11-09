/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-extraneous-dependencies */
import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py="5"
      shadow="xl"
      border="1px solid"
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded="lg"
    >
      <StatLabel fontWeight="medium" fontSize="2xl" isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize="medium" fontWeight="medium">
        {stat}
      </StatNumber>
      <Stack>
        <Box
          textAlign="center"
        >
          <Icon icon="fa-regular:star" color="black" />
        </Box>
      </Stack>
    </Stat>
  );
}

export default function ProjectList({ data }) {
  return (
    <Box maxW="7xl" mx="auto" pt={2} mt="-12rem" px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign="center"
        fontSize="2xl"
        py={10}
        fontWeight="bold"
      >
        what is your contribution?
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        { data && data.map((val) => (
          <Link href="#">
            <StatsCard title={val?.name} />
          </Link>
        )) }
      </SimpleGrid>
    </Box>
  );
}
