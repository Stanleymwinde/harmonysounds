import React from "react";
import { Box, Grid, Image, Text, Stack, Container } from "@chakra-ui/react";
import { marginX } from "@/utils/constants";

interface ProjectItem {
  img: string;
  title: string;
  subtitle: string;
}

const projects: ProjectItem[] = [
  {
    img: "/images/international-telecommunicatio-union-conference-final.jpg",
    title: "Web development",
    subtitle: "INTERNATIONAL TELECOMMUNICATION UNION CONFERENCE",
  },
  {
    img: "/images/high-court-judiciary -final.jpg",
    title: "Web development",
    subtitle: "HIGH COURT JUDICIARY",
  },
  {
    img: "/images/safaricom-golf-tour -final.jpg",
    title: "Web development",
    subtitle: "SAFARICOM GOLF TOUR",
  },
  {
    img: "/images/gender-balance-final.jpg",
    title: "Web development",
    subtitle: "GENDER BALANCE",
  },
];

const ProjectGallery: React.FC = () => {
  return (
    <Box bg="white" py={{ base: 8, md: 12 }}>
      <Container marginX={marginX} pl={{ base: 12, md: 16, lg: 24 }} pr={8}  px={{ base: 6, md: 8 }}>

        {/* ---- OUR WORK HEADING ---- */}
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          fontWeight="bold"
          textAlign="center"
          color="black"
          mb={{ base: 8, md: 12 }}
        >
          Our Work
        </Text>

        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: 6, md: 8 }}
        >
          {projects.map((project, idx) => (
            <Box
              key={idx}
              position="relative"
              overflow="hidden"
              role="group"
              cursor="pointer"
              borderRadius={0}
            >
              {/* IMAGE */}
              <Image
                src={project.img}
                alt={project.subtitle}
                w="100%"
                h={{ base: "300px", md: "380px" }}
                objectFit="cover"
                objectPosition="center top"
                transition="transform 0.55s ease"
                _groupHover={{ transform: "scale(1.06)" }}
                display="block"
              />

              {/* HOVER OVERLAY */}
              <Box
                position="absolute"
                top={0}
                left={0}
                right={0}
                bottom={0}
                bg="blackAlpha.700"
                opacity={0}
                transition="opacity 0.3s ease"
                _groupHover={{ opacity: 1 }}
                display="flex"
                justifyContent="center"
                alignItems="center"
                textAlign="center"
                p={5}
                pointerEvents="none"
              >
                <Stack gap={1} pointerEvents="auto">
                  <Text fontSize="sm" color="whiteAlpha.900">
                    {project.title}
                  </Text>
                  <Text
                    fontSize={{ base: "lg", md: "2xl" }}
                    fontWeight="semibold"
                    color="white"
                  >
                    {project.subtitle}
                  </Text>
                </Stack>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectGallery;
