import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Container,
  SimpleGrid,
  Select
} from '@chakra-ui/react';
import axios from 'axios';
// import Image from 'next/image';
import React, {useEffect, useState} from "react";
import { octokit } from '../../pages/api/octokit';
import Card from '../../shared/card';
// import Dropdown from '../../shared/dropdown';


const Project = () => {
  const [repos, setRepos] = useState([])
  const [language, setLanguage] = useState([])

  useEffect(() => {
    async function onUSer() {
      await octokit.request('GET /repositories', {}
      ).then(res => {
        setRepos(res?.data)
      }).catch(err => {
        console.log("error", err)
      })
    }
    onUSer()
  }, [])

  useEffect(() => {
    async function getLanguage() {
     try {
       const data = await axios.get(languages_url)
       console.log("data", data)
       setLanguage(data)
     } catch (error) {
       console.log(error)
     }
    }

    getLanguage()
  }, [])

  console.log('data', language)

  // console.log('user', repos.map(val => val.tags_url))

  return (
    <Container maxW={'9xl'} backgroundColor='#f7f8fd'>
      <Box>
        <Container maxW={'2xl'} background="green">
          {/* <Dropdown data={Data} /> */}
        </Container>
        <Container maxW={'7xl'}>
            <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 10, md: 36 }}
            >
              <SimpleGrid  columns={[2, null, 4]} spacing='40px'>  
                <Card data={repos} />
              </SimpleGrid>
            </Stack>
        </Container>
      </Box>
    </Container>
  )
}

export default Project