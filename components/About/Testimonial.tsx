"use client";

import React, { useState } from 'react';
import { Box, Container, Heading, Text, HStack, Image, VStack, Flex } from '@chakra-ui/react';
import { marginX } from '@/utils/constants';

interface Testimonial {
  id: number;
  logo: string;
  name: string;
  title: string;
  company: string;
  testimonial: string;
}

const TestimonialsSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      logo: '/images/afropay.jpg',
      name: 'Josphat Simitya',
      title: 'CEO',
      company: 'Afropay Ltd',
      testimonial: 'Great service!',
    },
    {
      id: 2,
      logo: '/images/safricom-logo.png',
      name: 'Emily Too',
      title: 'Senior Manager Purchasing',
      company: 'Safaricom',
      testimonial: 'This is to confirm that Harmony Group of Companies limited has been contracted by Safaricom PLC for provision of technical set-up and sound services.During this short period,Harmony Group of Companies has given Safaricom PLC professional services which have been of high quality and the relationship has been cordial. For any further information or clarification regarding their services please do not hesitate to contact me',
    },
    {
      id: 3,
      logo: '/images/download.png',
      name: 'Dr. Benjamin Odongo Elly',
      title: 'Ag.CEO',
      company: 'The Kenya Obstetrical and Gynaecological Society',
      testimonial: 'It is our please and honour to recommend Harmony Group Of Companies Limited.We have worked with Harmony Group of Companies Limited in our recent Annual Scientific Congress and they have done a commendable job.For further questions and clarifications,please feel free to contact us',
    },
  ];

  return (
    <Box bg="gray.50" py={{ base: 12, md: 16, lg: 20 }}>
      <Container marginX={marginX} px={8}>
        {/* Header */}
        <VStack gap={4} mb={12} textAlign="center">
          <Text color="pink.500" fontSize="lg" fontWeight="medium">
            Testimonials
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
            lineHeight="1.2"
            color="black"
          >
            What Our Clients Say About Us
          </Heading>
        </VStack>

        {/* Testimonial Cards Grid */}
        <Box mb={12}>
          {activeSlide === 0 && (
            <Flex
              direction={{ base: 'column', lg: 'row' }}
              gap={8}
              justify="center"
              mx="auto"
              maxW="1200px"
            >
              {/* First Card - Afropay */}
              <Box
                bg="white"
                p={8}
                borderRadius="lg"
                boxShadow="md"
                maxW={{ base: '100%', lg: '500px' }}
                w="full"
              >
                <HStack gap={4} mb={6} align="start">
                  <Image
                    src={testimonials[0].logo}
                    alt="Afropay Logo"
                    boxSize="60px"
                    objectFit="contain"
                  />
                  <VStack align="start" gap={1}>
                    <Text fontSize="lg" fontWeight="bold" color="black">
                      {testimonials[0].name}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      {testimonials[0].title} - {testimonials[0].company}
                    </Text>
                  </VStack>
                </HStack>
                <Text fontSize="md" lineHeight="1.8" color="gray.600">
                  {testimonials[0].testimonial}
                </Text>
              </Box>

              {/* Second Card - Safaricom */}
              <Box
                bg="white"
                p={8}
                borderRadius="lg"
                boxShadow="md"
                maxW={{ base: '100%', lg: '500px' }}
                w="full"
              >
                <HStack gap={4} mb={6} align="start">
                  <Image
                    src={testimonials[1].logo}
                    alt="Safaricom Logo"
                    boxSize="60px"
                    objectFit="contain"
                  />
                  <VStack align="start" gap={1}>
                    <Text fontSize="lg" fontWeight="bold" color="black">
                      {testimonials[1].name}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      {testimonials[1].title} - {testimonials[1].company}
                    </Text>
                  </VStack>
                </HStack>
                <Text fontSize="md" lineHeight="1.8" color="gray.600">
                  {testimonials[1].testimonial}
                </Text>
              </Box>
            </Flex>
          )}

          {activeSlide === 1 && (
            <Flex
              direction={{ base: 'column', lg: 'row' }}
              gap={8}
              justify="center"
              mx="auto"
              maxW="1200px"
            >
              {/* Third Card - Kenya Obstetrical */}
              <Box
                bg="white"
                p={8}
                borderRadius="lg"
                boxShadow="md"
                maxW={{ base: '100%', lg: '500px' }}
                w="full"
              >
                <HStack gap={4} mb={6} align="start">
                  <Image
                    src={testimonials[2].logo}
                    alt="Kenya Obstetrical Logo"
                    boxSize="60px"
                    objectFit="contain"
                  />
                  <VStack align="start" gap={1}>
                    <Text fontSize="lg" fontWeight="bold" color="black">
                      {testimonials[2].name}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      {testimonials[2].title} - {testimonials[2].company}
                    </Text>
                  </VStack>
                </HStack>
                <Text fontSize="md" lineHeight="1.8" color="gray.600">
                  {testimonials[2].testimonial}
                </Text>
              </Box>

              {/* First Card - Afropay (repeat) */}
              <Box
                bg="white"
                p={8}
                borderRadius="lg"
                boxShadow="md"
                maxW={{ base: '100%', lg: '500px' }}
                w="full"
              >
                <HStack gap={4} mb={6} align="start">
                  <Image
                    src={testimonials[0].logo}
                    alt="Afropay Logo"
                    boxSize="60px"
                    objectFit="contain"
                  />
                  <VStack align="start" gap={1}>
                    <Text fontSize="lg" fontWeight="bold" color="black">
                      {testimonials[0].name}
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      {testimonials[0].title} - {testimonials[0].company}
                    </Text>
                  </VStack>
                </HStack>
                <Text fontSize="md" lineHeight="1.8" color="gray.600">
                  {testimonials[0].testimonial}
                </Text>
              </Box>
            </Flex>
          )}
        </Box>

        {/* Pagination Dots */}
        <HStack justify="center" gap={3}>
          {[0, 1].map((index) => (
            <Box
              key={index}
              w="12px"
              h="12px"
              borderRadius="full"
              bg={activeSlide === index ? 'blue.500' : 'gray.300'}
              cursor="pointer"
              onClick={() => setActiveSlide(index)}
              transition="all 0.3s"
              _hover={{
                transform: 'scale(1.2)',
              }}
            />
          ))}
        </HStack>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;