import React from 'react';
import { Box, Container, Heading, HStack, Link } from '@chakra-ui/react';
import { marginX } from '@/utils/constants';

const Hero: React.FC = () => {
  return (
    <Box
      bg="linear-gradient(135deg, #4a6fa5 0%, #5d7ba8 50%, #6b88b4 100%)"
      minH="400px"
      display="flex"
      alignItems="center"
      position="relative"
    >
      <Container marginX={marginX} px={8}>
        <HStack
          color="rgba(255, 255, 255, 0.9)"
          fontSize="sm"
          mb={6}
          gap={2}
        >
          <Link 
            href="#" 
            _hover={{ color: 'white' }}
          >
            Home
          </Link>
          <Box>.</Box>
          <Box>Contact Us</Box>
        </HStack>

        <Heading
          as="h1"
          color="white"
          fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
          fontWeight="bold"
          lineHeight="1.2"
          maxW="600px"
        >
          Contact Us
        </Heading>
      </Container>
    </Box>
  );
};

export default Hero;