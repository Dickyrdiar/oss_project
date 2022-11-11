/* eslint-disable react/no-unescaped-entities */
import {
  Container,
  // Button,
  Flex,
  // Heading,
  Image,
  Stack,
  Heading,
  Text,
  Tabs, TabList, TabPanels, Tab, TabPanel,
  // useBreakpointValue,
} from '@chakra-ui/react';

export default function SplitScreen() {
  return (
    <Container maxW="4xl">
      <Stack direction={{ base: 'column' }}>
        <Flex p={8} flex={1} align="center" justify="center" display="flex" justifyContent="flex-start" mt="20">
          <Stack spacing={3} w="20rem" maxW="lg">
            <Flex flex={1}>
              <Image
                borderRadius="3rem"
                boxSize="150px"
                src="https://bit.ly/dan-abramov"
                alt="Dan Abramov"
              />
            </Flex>
          </Stack>

          <Heading
            fontWeight={300}
            fontSize={{ base: '4xl' }}
            lineHeight="100%"
            width="140%"
            mt="-2rem"
          >
            Explore the world’s leading
            {' '}
            <Text
              mt="1rem"
              fontWeight={300}
              fontSize={{ base: '2xl' }}
              lineHeight="100%"
            >
              @username
            </Text>
          </Heading>
        </Flex>

        <Container maxW="4xl" mt="14px">
          <Tabs isFitted variant="enclosed" maxW="4xl">
            <TabList>
              <Tab>Readme</Tab>
              <Tab>Weekly Download</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Stack>
    </Container>
  );
}
