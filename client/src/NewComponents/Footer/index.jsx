import React from 'react';
import { Box, Container, Stack, Text, Link, useColorModeValue, } from '@chakra-ui/react';

export default function SmallWithNavigation() {
  return (
    <Box
      bg={useColorModeValue('#2a9d8f', 'teal.900')}
      color={useColorModeValue('black.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Stack direction={'row'} spacing={6}>
          <h5>GitHub Links: </h5>
          <Link href={'https://github.com/jgum63'} target={"_blank"}>Josh Gum</Link>
          <Link href={'https://github.com/dawn-kline-m'} target={"_blank"}>Dawn Kline</Link>
          <Link href={'https://github.com/J3yT'} target={"_blank"}>Jason Tavera</Link>
        </Stack>
        
        <Text>Island Event Coordinator</Text>
      </Container>
    </Box>
  );
}