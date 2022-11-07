/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useEffect, useState } from 'react';
import {
  Box,
  Center,
  Heading,
  Stack,
  LinkBox,
  LinkOverlay,
  Avatar,
  Spacer,
} from '@chakra-ui/react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import GetHitApi from '../../pages/api/GetHitApi';

function Card({ data }) {
  // console.log("data", data.name)
  const [image, setImage] = useState('');

  const dataImage = data.map((val) => val.owner.avatar_url);
  const { response: imageResponse } = GetHitApi({
    url: dataImage,
  });

  useEffect(() => {
    if (imageResponse) {
      setImage(imageResponse);
    }
  }, [imageResponse]);

  console.log('image', image);

  return (
    <>
      {data && data?.map((val) => (
        <LinkBox>
          <LinkOverlay href={val?.name}>
            <Center py={6}>
              <Box
                maxW="345px"
                w="full"
                bg={('white', 'gray.900')}
                boxShadow="2xl"
                rounded="md"
                p={6}
                overflow="hidden"
              >
                <Box
                  h="140px"
                  bg="gray.100"
                  mt={-6}
                  mx={-6}
                  mb={6}
                  pos="relative"
                >
                  <Image
                    // src={val.owner.avatar_url}
                    src={image}
                    layout="fill"
                  />
                </Box>
                <Stack>
                  <Heading
                    padding="6px"
                    color={('gray.700', 'white')}
                    fontSize="13px"
                    // bg="green"
                    // fontFamily="body"
                    marginLeft="13px"
                    display="flex"
                    w="13rem"
                  >
                    <Box>
                      {val?.name}
                    </Box>
                    <Spacer />
                    <Box
                      justifyContent="space-between"
                    >
                      <Icon icon="fa-regular:star" color="#f2f2f2" />
                    </Box>
                  </Heading>
                  <Stack
                    style={{
                      marginTop: '-30px',
                      marginLeft: '-19px',
                    }}
                  >
                    <Avatar
                      size="sm"
                      src={image}
                      alt="Author"
                    />
                  </Stack>
                </Stack>
              </Box>
            </Center>
          </LinkOverlay>
        </LinkBox>
      ))}
    </>
  );
}

export default Card;
