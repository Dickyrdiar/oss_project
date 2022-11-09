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

function Hero({ value }) {
  return (
    <Container maxW="5xl" backgroundColor="#ffff">
      <Stack
        as={Box}
        textAlign="center"
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight="80%"
          color="gray.900"
        >
          Explore the world’s leading
          {' '}
          <br />
          <Text as="span" color="gray.900">
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
            // onChange={handleSearchValue}
            value={value}
            style={{
              borderRadius: 40,
              background: 'white',
              color: 'black',
              maxWidth: '40em',
              top: '13px',
              border: '1px solid black',
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
