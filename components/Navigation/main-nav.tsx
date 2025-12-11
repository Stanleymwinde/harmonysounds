"use client";

import {
  Box,
  Button,
  Flex,
  HStack,
  Link as ChakraLink,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "../../utils/constants";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const MainNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Flex
      id="main-nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={50}
      py={3}
      px={{ base: 4, md: 10 }}
      align="center"
      // ⭐ background depends on scroll: hero color OR pink
      bg={scrolled ? "pink.500" : "var(--hero-bg)"}
      transition="background-color 300ms ease"
      boxShadow={scrolled ? "md" : "none"}
      color="white" // text always white
    >
      {/* LEFT — Logo */}
      <Box>
        <ChakraLink as={NextLink} href="/">
          <Image
            priority
            src="/Images/hs-logo.png"
            alt="logo"
            width={180}
            height={220}
            style={{ cursor: "pointer" }}
          />
        </ChakraLink>
      </Box>

      {/* CENTER — NAV ITEMS */}
      <Flex
        flex="1"
        justify="center"
        display={{ base: "none", md: "flex" }}
      >
        <HStack as="nav" gap={12}>
          {navItems.map((item, i) => (
            <ChakraLink
              key={i}
              as={NextLink}
              href={item.href || "#"}
            
            >
              <Button
                variant="ghost"
                fontWeight="medium"
                fontSize="md"
                color="white"
               
              >
                {item.label}
              </Button>
            </ChakraLink>
          ))}
        </HStack>
      </Flex>

      {/* RIGHT — SOCIAL MEDIA ICONS */}
      <HStack gap={4} display={{ base: "none", md: "flex" }}>
        <ChakraLink href="#" target="_blank">
          <FaFacebook size={22} />
        </ChakraLink>

        <ChakraLink href="#" target="_blank">
          <FaInstagram size={22} />
        </ChakraLink>

        <ChakraLink href="#" target="_blank">
          <FaTwitter size={22} />
        </ChakraLink>
      </HStack>

      {/* MOBILE NAV */}
      <Box display={{ base: "flex", md: "none" }}>
        {/* Your existing MobileNav component */}
      </Box>
    </Flex>
  );
};

export default MainNav;
