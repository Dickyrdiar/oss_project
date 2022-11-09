/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import {
  Box,
  Stack,
  Container,
  SimpleGrid,
  Spinner,
} from '@chakra-ui/react';
// import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import GetHitApi from '../../pages/api/GetHitApi';
import { octokit } from '../../pages/api/octokit';
import Card from '../../shared/card';
import ProjectList from './projectList';
// import Dropdown from '../../shared/dropdown';

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
        <Container maxW="2xl" background="green">
          {/* <Dropdown data={Data} /> */}
        </Container>
        <Container maxW="7xl">
          <Stack
            as={Box}
            textAlign="center"
            spacing={{ base: 8, md: 14 }}
            py={{ base: 10, md: 36 }}
          >
            <ProjectList data={repos} />
          </Stack>
        </Container>
      </Box>
    </Container>
  );
}

export default Project;
