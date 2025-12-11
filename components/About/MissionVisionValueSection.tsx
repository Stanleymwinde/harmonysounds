import React from 'react';
import { Box, Container, SimpleGrid, Heading, Text, VStack } from '@chakra-ui/react';
import { marginX } from '@/utils/constants';

const MissionVisionValuesSection: React.FC = () => {
  return (
    <Box bg="gray.50" py={{ base: 12, md: 16, lg: 20 }}>
      <Container marginX={marginX} px={8}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {/* Mission Card */}
          <Box
            bg="white"
            p={8}
            borderRadius="lg"
            boxShadow="sm"
            _hover={{
              boxShadow: 'md',
              transform: 'translateY(-4px)',
            }}
            transition="all 0.3s"
          >
            <Text
              color="pink.500"
              fontSize="xl"
              fontWeight="bold"
              mb={4}
            >
              01
            </Text>
            <Heading
              as="h3"
              fontSize="2xl"
              fontWeight="bold"
              mb={4}
              color="black"
            >
              Mission
            </Heading>
            <Text
              fontSize="md"
              lineHeight="1.8"
              color="gray.500"
            >
              We strive to be the most reliable and creative events company in Kenya
            </Text>
          </Box>

          {/* Vision Card */}
          <Box
            bg="white"
            p={8}
            borderRadius="lg"
            boxShadow="sm"
            _hover={{
              boxShadow: 'md',
              transform: 'translateY(-4px)',
            }}
            transition="all 0.3s"
          >
            <Text
              color="pink.500"
              fontSize="xl"
              fontWeight="bold"
              mb={4}
            >
              02
            </Text>
            <Heading
              as="h3"
              fontSize="2xl"
              fontWeight="bold"
              mb={4}
              color="black"
            >
              Vision
            </Heading>
            <Text
              fontSize="md"
              lineHeight="1.8"
              color="gray.500"
            >
              To ensure that we maintain our equipment to the highest standards and service delivery.
            </Text>
          </Box>

          {/* Core Values Card */}
          <Box
            bg="white"
            p={8}
            borderRadius="lg"
            boxShadow="sm"
            _hover={{
              boxShadow: 'md',
              transform: 'translateY(-4px)',
            }}
            transition="all 0.3s"
          >
            <Text
              color="pink.500"
              fontSize="xl"
              fontWeight="bold"
              mb={4}
            >
              03
            </Text>
            <Heading
              as="h3"
              fontSize="2xl"
              fontWeight="bold"
              mb={4}
              color="black"
            >
              Core Values
            </Heading>
            <VStack align="start" gap={2}>
              <Text fontSize="md" color="gray.500">
                Creative
              </Text>
              <Text fontSize="md" color="gray.500">
                Reliable
              </Text>
              <Text fontSize="md" color="gray.500">
                Quality
              </Text>
              <Text fontSize="md" color="gray.500">
                Value for money
              </Text>
            </VStack>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default MissionVisionValuesSection;