/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Container,
  Heading,
  Stack,
  Text,
  Button,

} from '@chakra-ui/react';
import Link from 'next/link';

// import { useState } from 'react';
// import ModalLogin from '../../shared/Modal';

export default function CallToActionWithIllustration() {
  // const [openPopup, setOpenPopup] = useState(false);

  // const handleClick = () => {
  //   setOpenPopup(true);
  // };

  // const handleClickClose = () => {
  //   setOpenPopup(false);
  // };

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
          to help developers find and contribute to the open source projects they dream of and want
        </Text>
        <Stack spacing={6} direction="row">
          <Button
            rounded="full"
            px={6}
            colorScheme="black"
            bg="gray.900"
            _hover={{ bg: 'gray.900' }}
            // onClick={handleClick}
          >
            <Link href="/Login">
              Get started
            </Link>
          </Button>
          <Button rounded="full" px={6}>
            Learn more
          </Button>
        </Stack>
        {/* <ModalLogin isOpen={openPopup} onClose={handleClickClose} /> */}
      </Stack>
    </Container>
  );
}
