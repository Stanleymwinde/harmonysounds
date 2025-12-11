import React from 'react';
import Link from 'next/link';
import { Box, Container, Heading, Text, Button } from '@chakra-ui/react';
import { marginX } from '@/utils/constants';

const Work: React.FC = () => {
  return (
    <Box bg="white" py={{ base: 12, md: 16, lg: 20 }}>
      <Container marginX={marginX} pl={{ base: 12, md: 16, lg: 24 }} pr={8}>
        <Box maxW="800px">
          <Text color="pink.500" fontSize="lg" fontWeight="medium" mb={4}>
            Who Are We?
          </Text>

          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="medium"
            lineHeight="1.2"
            mb={6}
            color="black"
            maxW={450}
          >
            We Are Harmony Sounds...
          </Heading>

          <Text
            fontSize={{ base: "sm", md: "md" }}
            lineHeight="1.8"
            color="gray.500"
            mb={8}
            maxW={700}
          >
            An entertainment / events company founded in 2006. With over 16
            years' experience in the events industry. Our clientele has grown to
            include Media houses, experiential marketing companies, local and
            international NGO's, corporate as well as international firms. We
            offer the best rental equipment in the industry. By regularly
            replenishing our rental gear, we are able to invest in the latest
            technology in the market. We take great pride in providing equipment
            that is always in good condition for every event.
          </Text>

          <Link href="/Projects">
            <Button
              bg="pink.500"
              color="white"
              size="lg"
              px={{ base: 16, md: 20 }}
              py={{ base: 6, md: 7 }}
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="medium"
              borderRadius="full"
              _hover={{
                bg: "pink.600",
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              transition="all 0.3s"
              cursor="pointer"
            >
              Our Work
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Work