/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable max-len */
import React from 'react';
import {
  Link, Box, Flex, Text, Stack, Container, Button,
} from '@chakra-ui/react';
import { signIn, useSession } from 'next-auth/react';
import dataHeader from './dataHeader';

import Logo from './logo';

function NavBar(props) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (

    <NavBarContainer {...props}>
      {/* <Box maxW="7xl" mx="auto" pt={2} mt="-12rem" px={{ base: 2, sm: 12, md: 17 }}> */}
      <Logo />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
      {/* </Box> */}
    </NavBarContainer>

  );
}

function CloseIcon() {
  return (
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <title>Close</title>
      <path
        fill="gray.900"
        d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      width="24px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      fill="gray.900"
    >
      <title>Menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
    </svg>
  );
}

function MenuToggle({ toggle, isOpen }) {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
}

function MenuItem({
  children, isLast, to = '/', ...rest
}) {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
    </Link>
  );
}

function MenuLinks({ isOpen }) {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Container>
        <Stack
          spacing={8}
          align="center"
          justify={['center', 'space-between', 'flex-end', 'flex-end']}
          direction={['column', 'row', 'row', 'row']}
          pt={[4, 4, 0, 0]}
        >
          <>
            {dataHeader && dataHeader?.map((val) => (<MenuItem key={val.id} to={val.url}>{val.label}</MenuItem>))}
          </>
        </Stack>
      </Container>
    </Box>
  );
}

function NavBarContainer({ children, ...props }) {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={2}
      p={5}
      bg={['white']}
      color={['gray.900']}
      maxW="4xl"
      mx="auto"
      px={{ base: 2, sm: 12, md: 17 }}
      {...props}
    >
      {children}
    </Flex>
  );
}

export default NavBar;
