/* eslint-disable import/no-extraneous-dependencies */
import {
  Box, Stack, Heading, Avatar, HStack, Tag, TagLabel,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useEffect } from 'react';
import GetHitApi from '../../pages/api/GetHitApi';

function Product({
  imageSrc, title, price, startGazzer, forkRepo, repoName,
}) {
  const { response: responseStart } = GetHitApi({
    url: startGazzer,
  });

  useEffect(() => {
    if (responseStart) {
      console.log('data', responseStart);
    }
  }, [responseStart]);

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
          <Tag size="lg" colorScheme="black" borderRadius="full">
            <Avatar
              src={imageSrc}
              size="xs"
              name="Segun Adebayo"
              ml={-1}
              mr={2}
            />
            <TagLabel>{repoName}</TagLabel>
          </Tag>
        </Stack>
        <Box as="span" color="gray.600" fontSize="sm" alignItems="center" mt="7px">
          <Icon icon="fa-regular:star" color="black" />
          {startGazzer}
        </Box>
        <Box as="span" color="gray.600" fontSize="sm" alignItems="center" mt="7px">
          <Icon icon="charm:git-fork" />
          {forkRepo}
        </Box>

      </HStack>
    </Stack>
  );
}

export default Product;
