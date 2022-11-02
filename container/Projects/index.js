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
// import Image from 'next/image';
import React, {useEffect, useState} from "react";
import { octokit } from '../../pages/api/octokit';
import Card from '../../shared/card';
import Dropdown from '../../shared/dropdown';
import dataProjects from './dataProjects';


const Project = () => {
  const [user, setUser] = useState([])

  useEffect(() => {
    async function onUSer() {
      await octokit.request('GET /orgs/{org}/repos', {
        org: 'ORG'
      }).then(res => {
        setUser(res)
      })
    }

    onUSer()
  }, [])

  console.log('user', user)

  return (
    <Container maxW={'9xl'} backgroundColor='#f7f8fd'>
      <Box>
        <Container maxW={'2xl'} background="green">
          <Dropdown data={Data} />
        </Container>
        <Container maxW={'7xl'}>
            <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 10, md: 36 }}
            >
              <SimpleGrid  columns={[2, null, 4]} spacing='40px'>  
                <Card data={dataProjects} />
              </SimpleGrid>
            </Stack>
        </Container>
      </Box>
    </Container>
  )
}

export default Project

const Data = [
  {
    id: 1,
    label: 'start'
  }, 

  {
    id: 2,
    label: 'Fork'
  }
]