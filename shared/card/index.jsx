/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import Image from 'next/image';

function Card({ data }) {
  // console.log("data", data.name)
  // const [dataImage, setDataImage] = useState(null);
  return (
    <>
      {data && data?.map((val) => (
        <LinkBox>
          <LinkOverlay href={val?.url}>
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
                    src={val.owner.image_url}
                    layout="fill"
                  />
                </Box>
                <Stack>
                  <Text
                    color="green.500"
                    textTransform="uppercase"
                    fontWeight={300}
                    fontSize="sm"
                    letterSpacing={1.1}
                  >
                    {val?.topics}
                  </Text>
                  <Heading
                    color={('gray.700', 'white')}
                    fontSize="sm"
                    fontFamily="body"
                  >
                    {val?.name}
                  </Heading>
                  {/* <Text color={'gray.500'}>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                        erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                        et ea rebum.
                      </Text> */}
                </Stack>
                {/* <Stack mt={6}  spacing={4} >
                      <Avatar
                        src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                        alt={'Author'}
                      />
                      <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                        <Text fontWeight={600}>Achim Rolle</Text>
                      </Stack>
                    </Stack> */}
              </Box>
            </Center>
          </LinkOverlay>
        </LinkBox>
      ))}
    </>
  );
}

export default Card;
