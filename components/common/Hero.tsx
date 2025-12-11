"use client";

import { Box, VStack, Heading, Text, Button } from "@chakra-ui/react";
import { marginX } from "@/utils/constants";
import { Poppins } from "next/font/google";

const HeroSection: React.FC = () => {
  return (
    <Box
      position="relative"
      w="100%"
      h="75vh" // Hero height
      overflow="hidden"
      fontFamily="Poppins"
      bg="transparent" // Prevent any dark background
    >
      {/* Background Image */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bgImage="url('/event.jpg')"
        bgSize="cover"
        bgPos="center"
        zIndex={0}
        filter="brightness(0.6)"
      />

      {/* Content */}
      <VStack
        position="relative"
        zIndex={1}
        h="100%"
        justify="center"
        align="flex-start"
        gap={6}
        px={{ base: 6, md: 16, lg: 24 }}
        maxW="800px"
        marginX={marginX}
      >
        {/* Small Tagline */}
        <Text
          color="white"
          fontSize={{ base: "md", md: "lg" }}
          fontWeight="medium"
          fontFamily="arial"
          textShadow="1px 1px 2px rgba(0,0,0,0.7)" // subtle shadow for readability
        >
          We Are The Future Of Events
        </Text>

        {/* Main Heading */}
        <Heading
          color="white"
          lineHeight="1.1"
          fontWeight="bold"
          fontFamily="arial"
          fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          textShadow="2px 2px 4px rgba(0,0,0,0.7)" // subtle shadow for readability
        >
          Entertainment <br />
          Equipment <br />
          Rental & Events <br />
          Management
        </Heading>

        {/* CTA Button */}
        <Button
          bg="#E30079"
          color="white"
          size="xl" // Increase Chakra size
          px={14} // More horizontal padding
          py={8} // More vertical padding
          fontSize="lg" // Larger text
          borderRadius="full"
          _hover={{ bg: "#ff0090" }}
        >
          Learn More About Us
        </Button>
      </VStack>
    </Box>
  );
};

export default HeroSection;
