"use client";

import React, { useRef } from "react";
import {
  Box,
  Grid,
  Text,
  Textarea,
  Input,
  Button,
  Stack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { MdLocationOn, MdEmail, MdPhoneIphone } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { marginX } from "@/utils/constants";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(
        "service_rhrpoxj",
        "template_v21ls69",
        form.current,
        "GInOVYhjRG3bhl4Rc"
      )
      .then(
        () => {
          console.log("SUCCESS: Email sent");
          form.current?.reset();
        },
        (error) => {
          console.error("FAILED:", error.text);
        }
      );
  };

  return (
    <Box
      marginX={marginX}
      pl={{ base: 12, md: 16, lg: 24 }}
      pr={8}
      bg="white"
      px="60px"
      py="80px"
    >
      {/* Heading */}
      <Text
        fontSize="36px"
        fontWeight="700"
        color="black"
        mb="40px"
        textAlign="left"
      >
        Get in Touch
      </Text>

      {/* 2 Column Layout */}
      <Grid
        templateColumns={{ base: "1fr", md: "2fr 1fr" }}
        gap={10}
        alignItems="flex-start"
      >
        {/* Left Form */}
        <Box as="form" ref={form} onSubmit={sendEmail}>
          {/* Message */}
          <Textarea
            name="message"
            placeholder="Enter Message"
            height="220px"
            border="1px solid #f2eafa"
            borderRadius="5px"
            px="15px"
            py="15px"
            mb="25px"
            _focus={{ borderColor: "#d3c7e6", boxShadow: "none" }}
            required
          />

          {/* Name + Email */}
          <HStack gap={5} mb="25px">
            <Input
              name="user_name"
              placeholder="Enter your name"
              border="1px solid #f2eafa"
              height="55px"
              borderRadius="5px"
              px="15px"
              _focus={{ borderColor: "#d3c7e6", boxShadow: "none" }}
              required
            />

            <Input
              name="user_email"
              type="email"
              placeholder="Enter email address"
              border="1px solid #f2eafa"
              height="55px"
              borderRadius="5px"
              px="15px"
              _focus={{ borderColor: "#d3c7e6", boxShadow: "none" }}
              required
            />
          </HStack>

          {/* Subject */}
          <Input
            name="subject"
            placeholder="Enter Subject"
            height="55px"
            border="1px solid #f2eafa"
            borderRadius="5px"
            px="15px"
            mb="30px"
            _focus={{ borderColor: "#d3c7e6", boxShadow: "none" }}
            required
          />

          {/* Send Button */}
          <Button
            type="submit"
            bg="#d4007a"
            color="white"
            px="40px"
            height="55px"
            borderRadius="2px"
            fontWeight="600"
            _hover={{ bg: "#b30068" }}
          >
            SEND MESSAGE
          </Button>
        </Box>

        {/* Right Contact Details */}
        <Stack gap={10}>
          {/* Address */}
          <HStack align="flex-start" gap={4}>
            <Icon as={MdLocationOn} boxSize={6} color="#8b8b8b" />
            <Text fontSize="15px" color="blue.800">
              North Airport Road, Behind Even Business Park <br />
              Nairobi, Kenya
            </Text>
          </HStack>

          {/* Phone */}
          <HStack align="flex-start" gap={4}>
            <Icon as={MdPhoneIphone} boxSize={6} color="#8b8b8b" />
            <Box>
              <Text fontSize="15px" fontWeight="600" color="#3c3c3c">
                +254 720 361935 / +254 722 838675
              </Text>
              <Text fontSize="13px" color="#8b8b8b">
                Mon to Fri 8am to 5pm
              </Text>
            </Box>
          </HStack>

          {/* Email */}
          <HStack align="flex-start" gap={4}>
            <Icon as={MdEmail} boxSize={6} color="#8b8b8b" />
            <Box>
              <Text fontSize="15px" fontWeight="600" color="#3c3c3c">
                info@harmonysounds.co.ke / <br />
                jwambua@harmonysounds.co.ke
              </Text>
              <Text fontSize="13px" color="#8b8b8b">
                Send us your query anytime!
              </Text>
            </Box>
          </HStack>
        </Stack>
      </Grid>
    </Box>
  );
}
