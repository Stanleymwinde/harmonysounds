"use client";

import {
  Box,
  Button,
  Flex,
  HStack,
  Link as ChakraLink,
  Menu,
  Portal,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";

import { LuChevronDown } from "react-icons/lu";
import { useEffect, useState } from "react";
import { navItems } from "../../utils/constants";
import MobileNav from "./mobile-nav";

const MainNav = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
      py={3}
      justify="space-between"
      px={{ base: 4, md: 10 }}
      align="center"
      bg={scrolled ? "pink.500" : "transparent"}
      boxShadow={scrolled ? "sm" : "none"}
      wrap="wrap"
      transition="background-color 200ms, box-shadow 200ms, color 200ms"
      color={scrolled ? "white" : "inherit"}
    >
      {/* Logo */}
      <ChakraLink as={NextLink} href="/">
        <Image
          priority
          src="/images/logo.png"
          alt="logo"
          width={55}
          height={65}
          style={{ cursor: "pointer" }}
        />
      </ChakraLink>

      {/* Desktop Nav Links */}
      <HStack
        as="nav"
        gap={3}
        align="center"
        display={{ base: "none", md: "flex" }}
      >
        {navItems.map((item, i) => {
          const hasChildren = item.children && item.children.length > 0;
          const isOpen = openIndex === i;

          return (
            <Menu.Root
              key={i}
              open={isOpen}
              onOpenChange={(open) => setOpenIndex(open ? i : null)}
            >
              <Box
                position="relative"
                onMouseEnter={() => hasChildren && setOpenIndex(i)}
                onMouseLeave={() => hasChildren && setOpenIndex(null)}
              >
                <Menu.Trigger asChild>
                  <ChakraLink
                    as={NextLink}
                    href={item.href || "#"}
                    _hover={{ textDecoration: "none" }}
                  >
                    <Button
                      variant="ghost"
                      fontWeight="semibold"
                      fontSize={{ base: "sm", md: "md" }}
                      transition="color 0.15s"
                      color={scrolled ? "white" : undefined}
                    >
                      {item.label}
                      {hasChildren && (
                        <Box as="span" ml={1} display="inline-flex">
                          <LuChevronDown />
                        </Box>
                      )}
                    </Button>
                  </ChakraLink>
                </Menu.Trigger>

                {hasChildren && (
                  <Portal>
                    <Menu.Positioner>
                      <Menu.Content
                        rounded="md"
                        py={2}
                        minW="200px"
                        bg="gray.50" // connected grey background
                        shadow="md"
                      >
                        {item.children.map((child, j) => (
                          <Menu.Item
                            asChild
                            key={j}
                            value={child.label}
                            cursor="pointer"
                          >
                            <ChakraLink
                              as={NextLink}
                              href={child.href}
                              px={4} // horizontal padding
                              py={2} // vertical padding
                              display="block"
                              fontSize="sm"
                              fontWeight="medium"
                              mb={1} // spacing between links
                              _hover={{ bg: "gray.100" }} // hover effect
                              onClick={(e) => {
                                if (typeof window !== "undefined") {
                                  const currentPath = window.location.pathname;
                                  const [targetPath, hash] = (
                                    child.href || ""
                                  ).split("#");

                                  if (currentPath === targetPath && hash) {
                                    e.preventDefault();
                                    const el = document.getElementById(hash);
                                    if (el) {
                                      el.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start",
                                      });
                                    }
                                  }
                                }
                              }}
                            >
                              {child.label}
                            </ChakraLink>
                          </Menu.Item>
                        ))}
                      </Menu.Content>
                    </Menu.Positioner>
                  </Portal>
                )}
              </Box>
            </Menu.Root>
          );
        })}
      </HStack>

      {/* Desktop Buttons */}
      <HStack gap={3} display={{ base: "none", md: "flex" }}>
        <ChakraLink
          as={NextLink}
          href="https://invest.nabocapital.com"
          target="_blank"
        >
          <Button
            variant="outline"
            borderColor="brand"
            borderRadius="xl"
            fontWeight="semibold"
            size={{ base: "sm", lg: "md" }}
            color={scrolled ? "white" : undefined}
            _hover={{ bg: scrolled ? "pink.600" : undefined }}
          >
            Log In
          </Button>
        </ChakraLink>
        <ChakraLink
          as={NextLink}
          href="https://invest.nabocapital.com"
          target="_blank"
        >
          <Button
            bg="primary"
            color="white"
            borderRadius="xl"
            fontWeight="semibold"
            size={{ base: "sm", lg: "md" }}
            _hover={{ bg: "cyan.600" }}
          >
            INVEST NOW
          </Button>
        </ChakraLink>
      </HStack>

      {/* Mobile Nav */}
      <Box display={{ base: "flex", md: "none" }}>
        <MobileNav />
      </Box>
    </Flex>
  );
};

export default MainNav;
