"use client";

import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  Link,
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
          <FooterLink label="Work" />
          <FooterLink label="Services" />
          <FooterLink label="Contact" />

          {/* Social Icons (BLACK) */}
          <Flex pt={4} gap={5} align="center">
            <Icon as={FaFacebookF} boxSize={5} color="black" cursor="pointer" />
            <Icon as={FaTwitter} boxSize={5} color="black" cursor="pointer" />
            <Icon as={FaDribbble} boxSize={5} color="black" cursor="pointer" />
            <Icon as={FaInstagram} boxSize={5} color="black" cursor="pointer" />
          </Flex>
        </Stack>

        {/* COLUMN 2 - Company */}
        <Stack gap={3}>
          <FooterHeading>Company</FooterHeading>
          <FooterLink label="Directions" />
          <FooterLink label="Email" />
          <FooterLink label="Phone" />
        </Stack>

        {/* COLUMN 3 - Resources */}
        <Stack gap={3}>
          <FooterHeading>Resources</FooterHeading>
          <FooterLink label="Company Profile" />
          <FooterLink label="About Us" />
          <FooterLink label="Gallery" />
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
          <FooterLink label="+254 720 361935 / +254 722 838675" />
          <FooterLink label="info@harmonysounds.co.ke" />
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

const FooterLink = ({ label, link }: { label: string; link?: string }) => (
  <Link
    href={link || "#"}
    color="gray.600"
    _hover={{ color: "black", textDecoration: "underline" }}
    fontSize="16px"
  >
    {label}
  </Link>
);
