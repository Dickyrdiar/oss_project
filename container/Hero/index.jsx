/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Container,
  Heading,
  Stack,
  Text,
  Button,
  // IconProps,
} from '@chakra-ui/react';
import Link from 'next/link';

export default function CallToActionWithIllustration() {
  return (
    <Container maxW="5xl">
      <Stack
        textAlign="center"
        align="center"
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight="110%"
        >
          Explore the world’s leading
          {' '}
          <Text as="span">
            Open Source Projets
          </Text>
        </Heading>
        <Text color="gray.500" maxW="3xl">
          {/* Never miss a meeting. Never be late for one too. Keep track of your
          meetings and receive smart reminders in appropriate times. Read your
          smart “Daily Agenda” every morning. */}
          to help developers find and contribute to the open source projects they dream of and want
        </Text>
        <Stack spacing={6} direction="row">
          <Button
            rounded="full"
            px={6}
            colorScheme="black"
            bg="gray.900"
            _hover={{ bg: 'gray.900' }}
          >
            <Link href="/projects">
              Get started
            </Link>
          </Button>
          <Button rounded="full" px={6}>
            Learn more
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
}
