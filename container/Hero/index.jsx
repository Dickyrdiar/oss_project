/* eslint-disable react/jsx-filename-extension */
import {
  Container,
  Heading,
  Stack,
  Box,
  Input,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
// import dataHero from './dataHero';

function Hero() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  console.log('value', searchValue);

  return (
    <Container maxW="9xl" backgroundColor="#0e1117">
      <Stack
        as={Box}
        textAlign="center"
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight="110%"
          color="white"
        >
          Explore the world’s leading
          {' '}
          <br />
          <Text as="span" color="green.400">
            Open Source Projets
          </Text>
        </Heading>
        <Stack
          direction="column"
          align="center"
          position="relative"
          marginTop="12px"
        >
          <Input
            onChange={handleSearchValue}
            value={searchValue}
            style={{
              borderRadius: 40,
              background: 'white',
              color: 'black',
              maxWidth: '40em',
              top: '13px',
            }}
            placeholder="search project.."
          />
        </Stack>

        <Container maxW="3xl">
          <SimpleGrid columns={[1, 2, 3, 4, 5, 6]} gap={3} spacing="20px" />
        </Container>
      </Stack>
    </Container>
  );
}

export default Hero;
