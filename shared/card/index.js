import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  LinkBox,
  LinkOverlay
} from '@chakra-ui/react';
import Image from "next/image";

const Card = ({ data }) => {
  console.log("data", data.label)

  return (
    <>
      {data && data.map((val) => {
        return (
          <>
            <LinkBox>
             <LinkOverlay href="#">
              <Center py={6}>
                  <Box
                    maxW={'345px'}
                    w={'full'}
                    bg={('white', 'gray.900')}
                    boxShadow={'2xl'}
                    rounded={'md'}
                    p={6}
                    overflow={'hidden'}>
                    <Box
                      h={'140px'}
                      bg={'gray.100'}
                      mt={-6}
                      mx={-6}
                      mb={6}
                      pos={'relative'}>
                      {/* <Image
                        src={
                          'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        }
                        layout={'fill'}
                      /> */}
                    </Box>
                    <Stack>
                      <Text
                        color={'green.500'}
                        textTransform={'uppercase'}
                        fontWeight={300}
                        fontSize={'sm'}
                        letterSpacing={1.1}>
                        {val?.category}
                      </Text>
                      <Heading
                        color={('gray.700', 'white')}
                        fontSize={'sm'}
                        fontFamily={'body'}>
                        {val?.label}
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
          </>
        )
      })}
    </>
  )
}

export default Card