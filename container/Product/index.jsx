/* eslint-disable import/no-extraneous-dependencies */
import {
  Box, Stack, Heading, Avatar, HStack,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';

function Product({
  imageSrc, title, price,
}) {
  return (
    <Stack p={{ base: '0 2rem' }}>
      <Heading color="grey.900" size="md" textTransform="capitalize" textAlign="initial">
        {title}
      </Heading>
      <Box
        color="gray.400"
        display="flex"
        justifyContent="flex-start"
        textAlign="initial"
      >
        {price}
      </Box>
      <HStack spacing="24px">

        <Stack>
          <Avatar
            size="sm"
            src={imageSrc}
            alt="Author"
          />
        </Stack>
        <Box as="span" color="gray.600" fontSize="sm" alignItems="center" mt="7px">
          <Icon icon="fa-regular:star" color="black" />
        </Box>
        <Box as="span" color="gray.600" fontSize="sm" alignItems="center" mt="7px">
          <Icon icon="charm:git-fork" />
        </Box>

      </HStack>
    </Stack>
  );
}

export default Product;
