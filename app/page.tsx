import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Hero } from "../components/common";
import Service from "@/components/Services/Service";
import ProjectGallery from "@/components/Projects/ProjectGallery";
import {Testimonial} from "@/components/About";
import {CTASection} from "@/components/About";





const page = () => {
  return (
    <>
      <Hero />;
        <Service />
        <ProjectGallery />
        <Testimonial />
        <CTASection />
    </>
  );
};

export default page;
