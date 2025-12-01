"use client";

import { Box, VStack, Heading, Text, HStack, Button } from "@chakra-ui/react";

const HeroSection: React.FC = () => {
  return (
    <Box
      position="relative"
      w="100%"
      h={{ base: "60vh", sm: "75vh", md: "75vh" }}
      overflow="hidden"
    >
      {/* Background Image (extend to the top of the viewport so it shows under a fixed nav) */}
      <Box
        top={0}
        left={0}
        w="100%"
        h="100vh"
        bgImage="url('/event.jpg')"
        bgSize="cover"
        bgPos="center"
        pointerEvents="none"
      />

      {/* Black Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="rgba(0,0,0,0.35)"
        zIndex={1}
      />
      {/* Hero Content */}
      <VStack
        position="relative"
        zIndex={2}
        h="100%"
        justify={{ base: "flex-end", sm: "center", md: "center" }} // push down on mobile
        align="center"
        gap={{ base: 3, md: 4 }}
        textAlign="center"
        px={{ base: 4, sm: 6, md: 8 }}
        pb={{ base: 10, sm: 0 }} // extra bottom padding for mobile
        color="white"
        fontFamily="Poppins"
      >
        <Heading
          fontSize={{ base: "xl", sm: "2xl", md: "5xl", lg: "6xl" }}
          fontWeight="bold"
          textAlign="center"
          color="#FFFFFF"
        >
          Who We Are
        </Heading>

        <Text
          fontSize={{ base: "sm", sm: "md", md: "xl" }}
          maxW={{ base: "90%", md: "600px" }}
        >
          A Trusted Partner In Institutional and Retail Investment Solutions.
        </Text>

        {/* Buttons: stacked on mobile */}
        <HStack
          gap={4}
          mt={4}
          flexDirection={{ base: "column", sm: "row" }}
          w={{ base: "full", sm: "auto" }}
        >
          <Button
            color="white"
            w={{ base: "full", sm: "auto" }}
            _hover={{ bg: "#00CAFF" }}
            size={{ base: "md", sm: "lg" }}
            py={{ base: 2, sm: 4 }}
            onClick={() => {
              const section = document.getElementById("section2");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Meet Our Team
          </Button>

          <Button
            color="white"
            w={{ base: "full", sm: "auto" }}
            _hover={{ bg: "#00CAFF" }}
            size={{ base: "md", sm: "lg" }}
            py={{ base: 2, sm: 4 }}
            onClick={() => {
              const section = document.getElementById("section3");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Learn More
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default HeroSection;
