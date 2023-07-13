import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Stack } from "@chakra-ui/react";
import Hero from "../components/business/Hero";
import CaseStudy from "../components/CaseStudy";
import Specialization from "../components/business/Specialization";
import Partners from "../components/business/Partners";
import Models from "../components/business/Models";
import Testimonials from "../components/home/Testimonials";

const Business: React.FC = () => {
  return (
    <Stack
      maxW={"100%"}
      backgroundColor={"rgba(255, 208, 151, 0)"}
      backgroundImage="url('/businesshero.png')"
      backgroundSize={["0", "0", "0", "contain"]}
      fontFamily="Red Hat Display"
      backgroundRepeat="no-repeat"
    >
      <Nav />
      <div style={{ margin: 0 }}>
        <Hero />
        <Models />
        <Partners />
        <Specialization />
        <CaseStudy />
        <Testimonials />
      </div>
      <Footer />
    </Stack>
  );
};

export default Business;
