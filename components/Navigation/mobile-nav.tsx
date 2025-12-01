"use client";

import {
  Button,
  CloseButton,
  Drawer,
  Portal,
  Link,
  VStack,
  HStack,
  Text,
} from "@chakra-ui/react";
import { navItems } from "../../utils/constants";
import { Menu } from "react-feather";

const MobileNav = () => {
  return (
    <Drawer.Root placement="start">
      <Drawer.Trigger asChild>
        <Button
          variant="ghost"
          size="sm"
          _hover={{ bg: "gray.100" }}
          _active={{ bg: "gray.200" }}
        >
          <HStack gap={2}>
            <Menu size={20} />
          </HStack>
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content
            borderRadius="0"
            bg="whiteAlpha.900"
            backdropFilter="blur(12px)"
            boxShadow="xl"
            p={4}
          >
            <HStack justify="space-between" w="full" mb={4}>
              <Drawer.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Drawer.CloseTrigger>
            </HStack>
            <Drawer.Context>
              {(store) => (
                <Drawer.Body pt="4">
                  <VStack align="start" gap="4">
                    {navItems.map((item: any) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        fontSize="md"
                        fontWeight="medium"
                        _hover={{
                          color: "blue.500",
                          textDecoration: "underline",
                        }}
                        onClick={() => store.setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </VStack>
                </Drawer.Body>
              )}
            </Drawer.Context>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default MobileNav;
