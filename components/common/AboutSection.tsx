"use client";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { marginX } from '@/utils/constants';

export default function AboutSection() {
  return (
    <Box py={{ base: 10, md: 20 }}>
      <Container marginX={marginX} pl={{ base: 12, md: 16, lg: 24 }} pr={8}>
        <Flex
          align="center"
          justify="space-between"
          gap={10}
          direction={{ base: "column", md: "row" }}
        >
          {/* LEFT SIDE TEXT */}
          <Box flex="1">
            <Text
              fontSize="lg"
              fontWeight="semibold"
              color="#d40075"
              mb={3}
            >
              About Us
            </Text>

            <Heading
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="medium"
              mb={6}
              color="#1A1A1A"
              lineHeight="1.2"
               maxW={450}
            >
              We Are Harmony Sounds
            </Heading>

            <Text
               fontSize={{ base: "sm", md: "md" }}
              color="gray.600"
              lineHeight="1.8"
              mb={10}
              maxW="650px"
            >
              An entertainment / events company founded in 2006. With over 
              16 years’ experience in the events industry. Our clientele has 
              grown to include Media houses, experiential marketing companies, 
              local and international NGO’s, corporate as well as international 
              firms. We offer the best rental equipment in the industry. By 
              regularly replenishing our rental gear, we are able to invest in 
              the latest technology in the market. We take great pride in 
              providing equipment that is always in good condition for every event.
            </Text>

            <Link href="/AboutUs">
              <Button
                bg="#d40075"
                color="white"
                size="lg"
                px={10}
                py={7}
                borderRadius="full"
                _hover={{ bg: "#b10062" }}
                cursor="pointer"
              >
                More About Us
              </Button>
            </Link>
          </Box>

          {/* RIGHT SIDE IMAGE */}
          <Box flex="1">
            <Image
              src="/Images/event-management.jpg"
              alt="Event Management"
              width="100%"
              height="auto"
              borderRadius="md"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
