import React from 'react';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { marginX } from '@/utils/constants';

const OurTeamSection: React.FC = () => {
  return (
    <Box bg="white" py={{ base: 12, md: 16, lg: 20 }}>
      <Container marginX={marginX} px={8}>
        <Box maxW="700px" ml="auto">
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="Medium"
            lineHeight="1.2"
            mb={6}
            color="black"
          >
            Our Team
          </Heading>

          <Text
             fontSize={{ base: "sm", md: "md" }}
            lineHeight="1.8"
            color="gray.500"
            mb={6}
          >
            Our staff undergoes continuous{' '}
            <Text as="span" fontWeight="semibold" color="gray.700">
              training and certification from industry manufacturers
            </Text>{' '}
            in safety standards to ensure that we maintain our equipment to the highest standards and service delivery.
          </Text>

          <Text
             fontSize={{ base: "sm", md: "md" }}
            lineHeight="1.8"
            color="gray.500"
            mb={6}
          >
            At harmony we strive to be the most reliable and creative events company in Kenya, always delivering a high standard of quality and value for our money to customers.
          </Text>

          <Text
           fontSize={{ base: "sm", md: "md" }}
            lineHeight="1.8"
            color="black"
            fontWeight="semibold"
          >
            We work in close partnership with our customer's needs always at the forefront of our mind.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default OurTeamSection;