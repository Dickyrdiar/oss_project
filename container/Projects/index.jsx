/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import {
  Box,
  Stack,
  Container,
  SimpleGrid,
  Spinner,
  Heading,
  Text,
  Tabs, TabList, Tab, TabPanels, TabPanel,
} from '@chakra-ui/react';
// import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import GetHitApi from '../../pages/api/GetHitApi';
import { octokit } from '../../pages/api/octokit';
import ProjectLlist from '../../shared/ProjectListt/ProjectNew';

function Project() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function onUSer() {
      setLoading(true);
      await octokit.request('GET /repositories', {}).then((res) => {
        setRepos(res?.data);
      }).catch((err) => {
        console.log('error', err);
      });
    }
    onUSer();
  }, []);

  return (
    <Container maxW="9xl" backgroundColor="#ffff">
      <Box>
        <Container maxW="2xl" textAlign="center">
          <Heading
            fontWeight={300}
            fontSize={{ base: '4xl' }}
            lineHeight="110%"
            mt="5rem"
          >
            <Text as="span">
              Open Source Projets
            </Text>
          </Heading>
        </Container>
        <Container maxW="7xl">
          <Stack
            as={Box}
            textAlign="center"
            spacing={{ base: 8, md: 14 }}
            py={{ base: 10, md: 36 }}
          >
            <Container maxW="4xl">
              <Tabs isFitted variant="enclosed" maxW="4xl">
                <TabList mb="1em">
                  <Tab>
                    <Icon icon="bi:github" width="25" height="25" />
                  </Tab>
                  <Tab>
                    <Icon icon="logos:gitlab" width="25" height="25" />
                  </Tab>
                  <Tab>
                    <Icon icon="logos:bitbucket" width="25" height="25" />
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <ProjectLlist data={repos} />
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>Empty</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Container>
          </Stack>
        </Container>
      </Box>
    </Container>
  );
}

export default Project;
