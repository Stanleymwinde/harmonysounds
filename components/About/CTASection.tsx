import React from 'react';
import Link from 'next/link';
import { Box, Container, Heading, Button } from '@chakra-ui/react';
import { marginX } from '@/utils/constants';

const CTASection: React.FC = () => {
  return (
    <Box
      bg="linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%)"
      py={{ base: 20, md: 24, lg: 28 }}
      position="relative"
    >
      <Container marginX={marginX} px={8}>
        <Box textAlign="center">
          <Heading
            as="h2"
            fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
            fontWeight="medium"
            lineHeight="1.3"
            color="white"
            mb={8}
            maxW="700px"
            mx="auto"
            transform={{ base: "translateX(10px)", md: "translateX(25px)" }} 
          >
            Let's create something awesome together
          </Heading>

          <Link href="/ContactUs">
            <Button
              bg="pink.500"
              color="white"
              size="lg"
              px={12}
              py={7}
              fontSize="md"
              fontWeight="medium"
              borderRadius="full"
              _hover={{
                bg: 'pink.600',
                transform: 'translateY(-2px)',
                boxShadow: 'xl',
              }}
              transition="all 0.3s"
              cursor="pointer"
            >
              Discuss Project Or Event
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default CTASection;
