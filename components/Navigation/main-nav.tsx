"use client";

import {
  Box,
  Button,
  Flex,
  HStack,
  Link as ChakraLink,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  VStack,
  useDisclosure,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { navItems } from "../../utils/constants";
import { FaFacebook, FaInstagram, FaBars } from "react-icons/fa";

const MainNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const { open, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      bg={scrolled ? "pink.500" : "var(--hero-bg)"}
      transition="background-color 300ms ease, box-shadow 300ms ease"
      boxShadow={scrolled ? "sm" : "none"}
    >
      <Container maxW="7xl" px={{ base: 4, md: 6 }}>
        <Flex h="72px" align="center" justify="space-between">
          {/* LOGO */}
          <ChakraLink as={NextLink} href="/" display="flex" alignItems="center">
            <Image
              priority
              src="/Images/hs-logo.png"
              alt="Harmony Sounds Logo"
              width={150}
              height={80}
            />
          </ChakraLink>

          {/* DESKTOP NAV */}
          <HStack gap={10} display={{ base: "none", md: "flex" }}>
            {navItems.map((item) => (
              <Box
                key={item.label}
                position="relative"
                _after={{
                  content: '""',
                  position: "absolute",
                  width: "0%",
                  height: "2px",
                  bottom: "-6px",
                  left: 0,
                  bg: "white",
                  transition: "width 0.3s ease",
                }}
                _hover={{
                  _after: { width: "100%" },
                }}
              >
                <ChakraLink
                  as={NextLink}
                  href={item.href || "#"}
                  color="white"
                  fontSize="sm"
                  fontWeight="medium"
                  _hover={{ textDecoration: "none", opacity: 0.9 }}
                >
                  {item.label}
                </ChakraLink>
              </Box>
            ))}
          </HStack>

          {/* DESKTOP SOCIALS */}
          <HStack
            display={{ base: "none", md: "flex" }}
            ml={10}
            gap={6}
          >
            <ChakraLink
              href="https://www.facebook.com/HarmonySoundsEntertainment"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              color="white"
              _hover={{ opacity: 0.8 }}
            >
              <FaFacebook size={20} />
            </ChakraLink>

            <ChakraLink
              href="https://www.instagram.com/harmonysoundsentke/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              color="white"
              _hover={{ opacity: 0.8 }}
            >
              <FaInstagram size={20} />
            </ChakraLink>
          </HStack>

          {/* MOBILE MENU BUTTON */}
          <IconButton
            display={{ base: "flex", md: "none" }}
            aria-label="Open menu"
            variant="ghost"
            color="white"
            fontSize="20px"
            onClick={onOpen}
          >
            <FaBars />
          </IconButton>
        </Flex>
      </Container>

      {/* MOBILE DRAWER — Chakra v3 */}
      <Drawer.Root
        open={open}
        placement="end"
        onOpenChange={(e) => !e.open && onClose()}
      >
        <DrawerContent bg="pink.500" color="white">
          <DrawerBody pt={16}>
            <VStack gap={6} align="stretch">
              {navItems.map((item) => (
                <ChakraLink
                  key={item.label}
                  as={NextLink}
                  href={item.href || "#"}
                  onClick={onClose}
                  _hover={{ textDecoration: "none" }}
                >
                  <Button
                    variant="ghost"
                    w="full"
                    justifyContent="flex-start"
                    fontSize="lg"
                    fontWeight="medium"
                    color="white"
                    _hover={{ bg: "whiteAlpha.200" }}
                  >
                    {item.label}
                  </Button>
                </ChakraLink>
              ))}

              <HStack gap={6} pt={4}>
                <ChakraLink
                  href="https://www.facebook.com/HarmonySoundsEntertainment"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="white"
                >
                  <FaFacebook size={24} />
                </ChakraLink>

                <ChakraLink
                  href="https://www.instagram.com/harmonysoundsentke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="white"
                >
                  <FaInstagram size={24} />
                </ChakraLink>
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer.Root>
    </Box>
  );
};

export default MainNav;
