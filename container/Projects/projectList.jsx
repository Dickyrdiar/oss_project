/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/destructuring-assignment */
import {
  Box, Container, Divider, Stack, Spacer, Heading,
} from '@chakra-ui/react';

function ProjectList({ data }) {
  console.log('data', data);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      <Container maxW="full">
        <Box
        // maxW="345px"
          w="full"
          bg="white"
          boxShadow="2xl"
          rounded="md"
          p={6}
          overflow="hidden"
        >
          <>
            {data && data?.map((val) => (
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
                    {/* {startGazer} */}
                    {/* {val?.stargazers_url} */}
                    {' '}
                    {/* <Icon icon="fa-regular:star" color="#f2f2f2" /> */}
                  </Box>
                </Heading>
                <Stack
                  style={{
                    marginTop: '-30px',
                    marginLeft: '-19px',
                  }}
                >
                  {/* <Avatar
                      size="sm"
                      src={image}
                      alt="Author"
                    /> */}
                </Stack>
              </Stack>
            ))}
          </>
        </Box>
        <Divider />
      </Container>
    </>
  );
}

export default ProjectList;
