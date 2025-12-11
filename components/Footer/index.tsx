"use client";
import NextLink from "next/link";

import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Link as ChakraLink,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";

export default function Footer() {
  return (
    <Box bg="white" py="4rem" px="2rem">
      <SimpleGrid
        columns={{ base: 1, md: 3, lg: 5 }}
        gap={10}
        maxW="1200px"
        mx="auto"
      >
        {/* COLUMN 1 - Work / Services / Contact + Socials */}
        <Stack gap={3}>
          <FooterLink label="Work" link="/Projects" />
          <FooterLink label="Services" link="/Services" />
          <FooterLink label="Contact" link="/ContactUs" />

          {/* Social Icons (BLACK) */}
          <Flex pt={4} gap={5} align="center">
            <ChakraLink href="https://www.facebook.com/HarmonySoundsEntertainment" target="_blank" rel="noopener noreferrer">
              <Icon as={FaFacebookF} boxSize={5} color="black" cursor="pointer" />
            </ChakraLink>
            <ChakraLink href="https://www.instagram.com/harmonysoundsentke/" target="_blank" rel="noopener noreferrer">
              <Icon as={FaInstagram} boxSize={5} color="black" cursor="pointer" />
            </ChakraLink>
          </Flex>
        </Stack>

        {/* COLUMN 2 - Company */}
        <Stack gap={3}>
          <FooterHeading>Company</FooterHeading>
          <FooterLink label="Directions" link="/ContactUs" />
          <FooterLink label="Email" link="mailto:info@harmonysounds.co.ke" />
          <FooterLink label="Phone" link="tel:+254720361935" />
        </Stack>

        {/* COLUMN 3 - Resources */}
        <Stack gap={3}>
          <FooterHeading>Resources</FooterHeading>
          <FooterLink label="Company Profile" link="/AboutUs" />
          <FooterLink label="About Us" link="/AboutUs" />
          <FooterLink label="Gallery" link="/Projects" />
        </Stack>

        {/* COLUMN 4 - Location */}
        <Stack gap={3}>
          <FooterHeading>Location</FooterHeading>
          <Text color="gray.600">North Airport Road, Behind Even</Text>
          <Text color="gray.600">Business Park</Text>
        </Stack>

        {/* COLUMN 5 - Contacts */}
        <Stack gap={3}>
          <FooterHeading>Contacts</FooterHeading>
          <FooterLink label="+254 720 361935 / +254 722 838675" link="tel:+254720361935" />
          <FooterLink label="info@harmonysounds.co.ke" link="mailto:info@harmonysounds.co.ke" />
        </Stack>
      </SimpleGrid>

      {/* COPYRIGHT */}
      <Flex justify="center" mt="3rem">
        <Text color="gray.500" fontSize="sm">
          Copyright © Harmony Sounds
        </Text>
      </Flex>
    </Box>
  );
}

/* COMPONENTS */

const FooterHeading = ({ children }: any) => (
  <Heading fontSize="20px" fontWeight="bold" color="black">
    {children}
  </Heading>
);

const FooterLink = ({ label, link }: { label: string; link?: string }) => {
  const href = link || "#";
  const isExternal = href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("http");

  if (isExternal) {
    return (
      <ChakraLink
        href={href}
        color="gray.600"
        _hover={{ color: "black", textDecoration: "underline" }}
        fontSize="16px"
      >
        {label}
      </ChakraLink>
    );
  }

  return (
    <ChakraLink
      as={NextLink}
      href={href}
      color="gray.600"
      _hover={{ color: "black", textDecoration: "underline" }}
      fontSize="16px"
    >
      {label}
    </ChakraLink>
  );
};
