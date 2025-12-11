import React from "react";
import { Box, Flex, Image, Text, Button, Link } from "@chakra-ui/react";
import { marginX } from "@/utils/constants";

interface ServiceProps {
  imagePosition: "left" | "right";
  title: string;
  description: string;
  imageSrc: string;
}

const Service: React.FC<ServiceProps> = ({
  imagePosition,
  title,
  description,
  imageSrc,
}) => {
  return (
    <Box
      bg="white"
      borderRadius="2xl"
      boxShadow="md"
      p={10}
      mb={12}
      maxW="1200px"
      mx="auto"
    >
      <Flex
        direction={{
          base: "column",
          md: imagePosition === "left" ? "row" : "row-reverse",
        }}
        align="center"
        gap={10}
      >
        {/* IMAGE */}
        <Box flex="1">
          <Image
            src={imageSrc}
            alt={title}
            borderRadius="xl"
            objectFit="cover"
            w="100%"
            h="400px"
            boxShadow="lg"
          />
        </Box>

        {/* TEXT */}
        <Box flex="1">
          <Text fontSize="4xl" fontWeight="bold" mb={6} color="black">
            {title}
          </Text>

          <Text fontSize="lg" mb={8} color="black" lineHeight="1.8">
            {description}
          </Text>

          <Link href="/ContactUs" style={{ textDecoration: "none" }}>
<<<<<<< HEAD
            <Button
              color="white"
              size="lg"
              borderRadius="full"
              px={8}
            >
=======
            <Button color="white" size="lg" borderRadius="full" px={8}>
>>>>>>> b8a4a2114227169076fd83b564dd64de1c242e8d
              Request A Quote
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};



interface ServiceData {
  imagePosition: "left" | "right";
  title: string;
  description: string;
  imageSrc: string;
}

const ServicesPage: React.FC = () => {
  const services: ServiceData[] = [
    {
      imagePosition: "left",
      title: "Audio Systems",
      description:
        " Access one of the largest stocks and wide range of professional audio equipment in East africa.",
      imageSrc: "/Images/audio-systems.jpg",
    },
    {
      imagePosition: "right",
      title: "Visual technology",
      description:
        "We understand the unique challenges of providing video solutions for live events and broadcasts where everything has to be right, first time, every time",
      imageSrc: "/Images/pic2.jpg",
    },
    {
      imagePosition: "left",
      title: "Event lighting",
      description:
        "The Harmony Systems & Design team brings experience and vision together to create Lighting  for any type of event.",
      imageSrc: "/Images/pic3.jpg",
    },
    {
      imagePosition: "right",
      title: "Live event production,Hybrid & Online Livestream",
      description:
        "Our inhouse Broadcast standard 4K and HD video equipment including cameras,video switchers ,wireless video transmitter set us ahead of the rest.",
      imageSrc: "/Images/pic4.jpg",
    },
    {
      imagePosition: "left",
      title: "Event management",
      description:
        "Our goal is to help you in the event planning process ,bringing all elements together with ease and help you create an engaging experience for your attendees",
      imageSrc: "/Images/pic5.jpg",
    },
    {
      imagePosition: "right",
      title: "Stage design",
      description:
        "Don't let your stage be ordinary. We are dedicated to creating creative event  spaces with our stage set design department .",
      imageSrc: "/Images/pic6.jpg",
    },
  ];

  return (
    <Box bg="white" py={20}>
<<<<<<< HEAD
      
      <Box textAlign="left" mb={16}  marginX={marginX} pl={{ base: 12, md: 16, lg: 24 }} pr={8}>
=======
      <Box textAlign="left" mb={16} marginX={marginX}>
>>>>>>> b8a4a2114227169076fd83b564dd64de1c242e8d
        <Text fontSize="lg" fontWeight="medium" color="#d63384">
          What We Do
        </Text>
        <Text fontSize="5xl" fontWeight="bold" color="black" mt={2}>
          Services
        </Text>
      </Box>

      {services.map((service, index) => (
        <Service
          key={index}
          imagePosition={service.imagePosition}
          title={service.title}
          description={service.description}
          imageSrc={service.imageSrc}
        />
      ))}
    </Box>
  );
};

export default ServicesPage;
