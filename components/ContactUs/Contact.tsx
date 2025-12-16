"use client";
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
import { marginX } from '@/utils/constants';
import { useState } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      alert('Message sent! Thank you for contacting us. We will get back to you soon.');

      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      alert('Error sending message. Please try again later or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box marginX={marginX} pl={{ base: 12, md: 16, lg: 24 }} pr={8} bg="white" px="60px" py="80px">
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
        <Box as="form" onSubmit={handleSubmit}>
          {/* Message Textarea */}
          <Textarea
            placeholder="Enter Message"
            height="220px"
            border="1px solid #f2eafa"
            borderRadius="5px"
            px="15px"
            py="15px"
            mb="25px"
            _focus={{ borderColor: "#d3c7e6", boxShadow: "none" }}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          {/* Name + Email */}
          <HStack gap={5} mb="25px">
            <Input
              placeholder="Enter your name"
              border="1px solid #f2eafa"
              height="55px"
              borderRadius="5px"
              px="15px"
              _focus={{ borderColor: "#d3c7e6", boxShadow: "none" }}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <Input
              placeholder="Enter email address"
              type="email"
              border="1px solid #f2eafa"
              height="55px"
              borderRadius="5px"
              px="15px"
              _focus={{ borderColor: "#d3c7e6", boxShadow: "none" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </HStack>

          {/* Subject */}
          <Input
            placeholder="Enter Subject"
            height="55px"
            border="1px solid #f2eafa"
            borderRadius="5px"
            px="15px"
            mb="30px"
            _focus={{ borderColor: "#d3c7e6", boxShadow: "none" }}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />

          <Button
            type="submit"
            bg="#d4007a"
            color="white"
            px="40px"
            height="55px"
            borderRadius="2px"
            fontWeight="600"
            _hover={{ bg: "#b30068" }}
            loading={isLoading}
            loadingText="Sending..."
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
