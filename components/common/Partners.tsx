"use client";
import { Box, Container, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { marginX } from '@/utils/constants';

const partners = [
  "/Images/safaricom_logo.png",
  "/Images/pdf-logo.png",
  "/Images/heifer.png",
  "/Images/kenya-red-cross.png",
  "/Images/kcb-logo.png",
  "/Images/communication-authority-of-kenya.webp",
];

export default function Partners() {
  return (
    <Box  marginX={marginX} pl={{ base: 12, md: 16, lg: 24 }} pr={8}  bg="#F6F9FF" py={10}>
      <Container maxW="container.xl">
        <Flex
          justify="space-between"
          align="center"
          wrap="wrap"
          gap={10}
        >
          {partners.map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt={`partner-${i}`}
              height={{ base: "40px", md: "60px" }}
              objectFit="contain"
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
}
