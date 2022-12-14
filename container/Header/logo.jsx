/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Box, Text } from '@chakra-ui/react';
// import { ReactComponent as IconHeader } from '../../asset/osi.svg';
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        <Link href="/">
          <Icon icon="ri:open-source-fill" width="40" height="40" />
        </Link>
      </Text>
    </Box>
  );
}
