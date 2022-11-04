import React from 'react';
import { Box, Text } from '@chakra-ui/react';
// import { ReactComponent as IconHeader } from '../../asset/osi.svg';

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        Logo
      </Text>
    </Box>
  );
}
