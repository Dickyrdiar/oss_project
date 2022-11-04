/* eslint-disable react/jsx-filename-extension */
import {
  Box,
  Stack,
  Container,
  SimpleGrid,
} from '@chakra-ui/react';
// import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import GetHitApi from '../../pages/api/GetHitApi';
import { octokit } from '../../pages/api/octokit';
import Card from '../../shared/card';
// import Dropdown from '../../shared/dropdown';

function Project() {
  const [repos, setRepos] = useState([]);
  // const [language, setLanguage] = useState([]);
  // const [language, setLanguage] = useState([]);

  useEffect(() => {
    async function onUSer() {
      await octokit.request('GET /repositories', {}).then((res) => {
        setRepos(res?.data);
      }).catch((err) => {
        console.log('error', err);
      });
    }
    onUSer();
  }, []);

  const dataLang = repos.map((val) => val.languages_url);
  console.log('data', dataLang);

  const { response: responseLang } = GetHitApi({
    url: dataLang,
  });

  console.log('response lang', responseLang);
  console.log('image', repos?.owner);

  return (
    <Container maxW="9xl" backgroundColor="#f7f8fd">
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
            <SimpleGrid columns={[2, null, 4]} spacing="40px">
              <Card data={repos} />
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </Container>
  );
}

export default Project;
